package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"university_chain_it/x/universitychainit/types"
)

func (k Keeper) UniversityDetailsAll(c context.Context, req *types.QueryAllUniversityDetailsRequest) (*types.QueryAllUniversityDetailsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var universityDetailss []types.UniversityDetails
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	universityDetailsStore := prefix.NewStore(store, types.KeyPrefix(types.UniversityDetailsKeyPrefix))

	pageRes, err := query.Paginate(universityDetailsStore, req.Pagination, func(key []byte, value []byte) error {
		var universityDetails types.UniversityDetails
		if err := k.cdc.Unmarshal(value, &universityDetails); err != nil {
			return err
		}

		universityDetailss = append(universityDetailss, universityDetails)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllUniversityDetailsResponse{UniversityDetails: universityDetailss, Pagination: pageRes}, nil
}

func (k Keeper) UniversityDetails(c context.Context, req *types.QueryGetUniversityDetailsRequest) (*types.QueryGetUniversityDetailsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetUniversityDetails(
		ctx,
		req.UniversityName,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetUniversityDetailsResponse{UniversityDetails: val}, nil
}
