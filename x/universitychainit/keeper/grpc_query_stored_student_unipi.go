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

func (k Keeper) StoredStudentUnipiAll(c context.Context, req *types.QueryAllStoredStudentUnipiRequest) (*types.QueryAllStoredStudentUnipiResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var storedStudentUnipis []types.StoredStudentUnipi
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	storedStudentUnipiStore := prefix.NewStore(store, types.KeyPrefix(types.StoredStudentUnipiKeyPrefix))

	pageRes, err := query.Paginate(storedStudentUnipiStore, req.Pagination, func(key []byte, value []byte) error {
		var storedStudentUnipi types.StoredStudentUnipi
		if err := k.cdc.Unmarshal(value, &storedStudentUnipi); err != nil {
			return err
		}

		storedStudentUnipis = append(storedStudentUnipis, storedStudentUnipi)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllStoredStudentUnipiResponse{StoredStudentUnipi: storedStudentUnipis, Pagination: pageRes}, nil
}

func (k Keeper) StoredStudentUnipi(c context.Context, req *types.QueryGetStoredStudentUnipiRequest) (*types.QueryGetStoredStudentUnipiResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetStoredStudentUnipi(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetStoredStudentUnipiResponse{StoredStudentUnipi: val}, nil
}
