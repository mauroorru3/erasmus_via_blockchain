package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "university_chain_it/testutil/keeper"
	"university_chain_it/testutil/nullify"
	"university_chain_it/x/universitychainit/types"
)

func TestUniversityInfoUniroma1Query(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestUniversityInfoUniroma1(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetUniversityInfoUniroma1Request
		response *types.QueryGetUniversityInfoUniroma1Response
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetUniversityInfoUniroma1Request{},
			response: &types.QueryGetUniversityInfoUniroma1Response{UniversityInfoUniroma1: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.UniversityInfoUniroma1(wctx, tc.request)
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
