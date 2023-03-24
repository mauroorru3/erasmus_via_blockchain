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

func TestAnnualTaxesQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNAnnualTaxes(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetAnnualTaxesRequest
		response *types.QueryGetAnnualTaxesResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetAnnualTaxesRequest{Id: msgs[0].Id},
			response: &types.QueryGetAnnualTaxesResponse{AnnualTaxes: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetAnnualTaxesRequest{Id: msgs[1].Id},
			response: &types.QueryGetAnnualTaxesResponse{AnnualTaxes: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetAnnualTaxesRequest{Id: uint64(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.AnnualTaxes(wctx, tc.request)
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

func TestAnnualTaxesQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNAnnualTaxes(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllAnnualTaxesRequest {
		return &types.QueryAllAnnualTaxesRequest{
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
			resp, err := keeper.AnnualTaxesAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.AnnualTaxes), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.AnnualTaxes),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.AnnualTaxesAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.AnnualTaxes), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.AnnualTaxes),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.AnnualTaxesAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.AnnualTaxes),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.AnnualTaxesAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
