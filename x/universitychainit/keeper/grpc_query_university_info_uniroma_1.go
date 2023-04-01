package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"university_chain_it/x/universitychainit/types"
)

func (k Keeper) UniversityInfoUniroma1(c context.Context, req *types.QueryGetUniversityInfoUniroma1Request) (*types.QueryGetUniversityInfoUniroma1Response, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetUniversityInfoUniroma1(ctx)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetUniversityInfoUniroma1Response{UniversityInfoUniroma1: val}, nil
}
