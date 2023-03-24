package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "university_chain_it/testutil/keeper"
	"university_chain_it/testutil/nullify"
	"university_chain_it/x/universitychainit/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestUniversityDetailsQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNUniversityDetails(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetUniversityDetailsRequest
		response *types.QueryGetUniversityDetailsResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetUniversityDetailsRequest{
				UniversityName: msgs[0].UniversityName,
			},
			response: &types.QueryGetUniversityDetailsResponse{UniversityDetails: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetUniversityDetailsRequest{
				UniversityName: msgs[1].UniversityName,
			},
			response: &types.QueryGetUniversityDetailsResponse{UniversityDetails: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetUniversityDetailsRequest{
				UniversityName: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.UniversityDetails(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestUniversityDetailsQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNUniversityDetails(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllUniversityDetailsRequest {
		return &types.QueryAllUniversityDetailsRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.UniversityDetailsAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.UniversityDetails), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.UniversityDetails),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.UniversityDetailsAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.UniversityDetails), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.UniversityDetails),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.UniversityDetailsAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.UniversityDetails),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.UniversityDetailsAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
