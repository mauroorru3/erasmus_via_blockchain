package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "university_chain_it/testutil/keeper"
	"university_chain_it/testutil/nullify"
	"university_chain_it/x/universitychainit/types"
)

func TestErasmusCareerQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNErasmusCareer(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetErasmusCareerRequest
		response *types.QueryGetErasmusCareerResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetErasmusCareerRequest{Id: msgs[0].Id},
			response: &types.QueryGetErasmusCareerResponse{ErasmusCareer: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetErasmusCareerRequest{Id: msgs[1].Id},
			response: &types.QueryGetErasmusCareerResponse{ErasmusCareer: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetErasmusCareerRequest{Id: uint64(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.ErasmusCareer(wctx, tc.request)
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

func TestErasmusCareerQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNErasmusCareer(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllErasmusCareerRequest {
		return &types.QueryAllErasmusCareerRequest{
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
			resp, err := keeper.ErasmusCareerAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.ErasmusCareer), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.ErasmusCareer),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ErasmusCareerAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.ErasmusCareer), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.ErasmusCareer),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.ErasmusCareerAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.ErasmusCareer),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.ErasmusCareerAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
