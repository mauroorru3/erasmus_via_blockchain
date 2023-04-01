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

func (k Keeper) ProfessorsExamsUnipiAll(c context.Context, req *types.QueryAllProfessorsExamsUnipiRequest) (*types.QueryAllProfessorsExamsUnipiResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var professorsExamsUnipis []types.ProfessorsExamsUnipi
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	professorsExamsUnipiStore := prefix.NewStore(store, types.KeyPrefix(types.ProfessorsExamsUnipiKeyPrefix))

	pageRes, err := query.Paginate(professorsExamsUnipiStore, req.Pagination, func(key []byte, value []byte) error {
		var professorsExamsUnipi types.ProfessorsExamsUnipi
		if err := k.cdc.Unmarshal(value, &professorsExamsUnipi); err != nil {
			return err
		}

		professorsExamsUnipis = append(professorsExamsUnipis, professorsExamsUnipi)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllProfessorsExamsUnipiResponse{ProfessorsExamsUnipi: professorsExamsUnipis, Pagination: pageRes}, nil
}

func (k Keeper) ProfessorsExamsUnipi(c context.Context, req *types.QueryGetProfessorsExamsUnipiRequest) (*types.QueryGetProfessorsExamsUnipiResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetProfessorsExamsUnipi(
		ctx,
		req.ExamName,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetProfessorsExamsUnipiResponse{ProfessorsExamsUnipi: val}, nil
}
