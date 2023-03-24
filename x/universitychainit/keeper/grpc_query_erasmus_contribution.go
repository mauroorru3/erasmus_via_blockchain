package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"university_chain_it/x/universitychainit/types"
)

func (k Keeper) ErasmusContribution(c context.Context, req *types.QueryGetErasmusContributionRequest) (*types.QueryGetErasmusContributionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetErasmusContribution(ctx)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetErasmusContributionResponse{ErasmusContribution: val}, nil
}
