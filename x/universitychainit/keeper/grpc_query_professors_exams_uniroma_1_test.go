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

func TestProfessorsExamsUniroma1QuerySingle(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNProfessorsExamsUniroma1(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetProfessorsExamsUniroma1Request
		response *types.QueryGetProfessorsExamsUniroma1Response
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetProfessorsExamsUniroma1Request{
				ExamName: msgs[0].ExamName,
			},
			response: &types.QueryGetProfessorsExamsUniroma1Response{ProfessorsExamsUniroma1: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetProfessorsExamsUniroma1Request{
				ExamName: msgs[1].ExamName,
			},
			response: &types.QueryGetProfessorsExamsUniroma1Response{ProfessorsExamsUniroma1: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetProfessorsExamsUniroma1Request{
				ExamName: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.ProfessorsExamsUniroma1(wctx, tc.request)
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

func TestProfessorsExamsUniroma1QueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNProfessorsExamsUniroma1(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllProfessorsExamsUniroma1Request {
		return &types.QueryAllProfessorsExamsUniroma1Request{
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
			resp, err := keeper.ProfessorsExamsUniroma1All(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.ProfessorsExamsUniroma1), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.ProfessorsExamsUniroma1),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ProfessorsExamsUniroma1All(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.ProfessorsExamsUniroma1), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.ProfessorsExamsUniroma1),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.ProfessorsExamsUniroma1All(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.ProfessorsExamsUniroma1),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.ProfessorsExamsUniroma1All(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
