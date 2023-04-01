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

func (k Keeper) StoredStudentUniroma1All(c context.Context, req *types.QueryAllStoredStudentUniroma1Request) (*types.QueryAllStoredStudentUniroma1Response, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var storedStudentUniroma1s []types.StoredStudentUniroma1
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	storedStudentUniroma1Store := prefix.NewStore(store, types.KeyPrefix(types.StoredStudentUniroma1KeyPrefix))

	pageRes, err := query.Paginate(storedStudentUniroma1Store, req.Pagination, func(key []byte, value []byte) error {
		var storedStudentUniroma1 types.StoredStudentUniroma1
		if err := k.cdc.Unmarshal(value, &storedStudentUniroma1); err != nil {
			return err
		}

		storedStudentUniroma1s = append(storedStudentUniroma1s, storedStudentUniroma1)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllStoredStudentUniroma1Response{StoredStudentUniroma1: storedStudentUniroma1s, Pagination: pageRes}, nil
}

func (k Keeper) StoredStudentUniroma1(c context.Context, req *types.QueryGetStoredStudentUniroma1Request) (*types.QueryGetStoredStudentUniroma1Response, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetStoredStudentUniroma1(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetStoredStudentUniroma1Response{StoredStudentUniroma1: val}, nil
}
