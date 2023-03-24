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

func (k Keeper) ExamsInfoAll(c context.Context, req *types.QueryAllExamsInfoRequest) (*types.QueryAllExamsInfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var examsInfos []types.ExamsInfo
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	examsInfoStore := prefix.NewStore(store, types.KeyPrefix(types.ExamsInfoKeyPrefix))

	pageRes, err := query.Paginate(examsInfoStore, req.Pagination, func(key []byte, value []byte) error {
		var examsInfo types.ExamsInfo
		if err := k.cdc.Unmarshal(value, &examsInfo); err != nil {
			return err
		}

		examsInfos = append(examsInfos, examsInfo)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllExamsInfoResponse{ExamsInfo: examsInfos, Pagination: pageRes}, nil
}

func (k Keeper) ExamsInfo(c context.Context, req *types.QueryGetExamsInfoRequest) (*types.QueryGetExamsInfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetExamsInfo(
		ctx,
		req.ExamName,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetExamsInfoResponse{ExamsInfo: val}, nil
}
