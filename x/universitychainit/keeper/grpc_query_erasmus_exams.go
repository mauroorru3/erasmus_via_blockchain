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

func (k Keeper) ErasmusExamsAll(c context.Context, req *types.QueryAllErasmusExamsRequest) (*types.QueryAllErasmusExamsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var erasmusExamss []types.ErasmusExams
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	erasmusExamsStore := prefix.NewStore(store, types.KeyPrefix(types.ErasmusExamsKeyPrefix))

	pageRes, err := query.Paginate(erasmusExamsStore, req.Pagination, func(key []byte, value []byte) error {
		var erasmusExams types.ErasmusExams
		if err := k.cdc.Unmarshal(value, &erasmusExams); err != nil {
			return err
		}

		erasmusExamss = append(erasmusExamss, erasmusExams)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllErasmusExamsResponse{ErasmusExams: erasmusExamss, Pagination: pageRes}, nil
}

func (k Keeper) ErasmusExams(c context.Context, req *types.QueryGetErasmusExamsRequest) (*types.QueryGetErasmusExamsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetErasmusExams(
		ctx,
		req.ExamName,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetErasmusExamsResponse{ErasmusExams: val}, nil
}
