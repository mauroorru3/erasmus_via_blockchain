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

func TestUniversityInfoQuery(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestUniversityInfo(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetUniversityInfoRequest
		response *types.QueryGetUniversityInfoResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetUniversityInfoRequest{},
			response: &types.QueryGetUniversityInfoResponse{UniversityInfo: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.UniversityInfo(wctx, tc.request)
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
