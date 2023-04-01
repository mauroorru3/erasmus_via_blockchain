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

func (k Keeper) ProfessorsExamsUniroma1All(c context.Context, req *types.QueryAllProfessorsExamsUniroma1Request) (*types.QueryAllProfessorsExamsUniroma1Response, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var professorsExamsUniroma1s []types.ProfessorsExamsUniroma1
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	professorsExamsUniroma1Store := prefix.NewStore(store, types.KeyPrefix(types.ProfessorsExamsUniroma1KeyPrefix))

	pageRes, err := query.Paginate(professorsExamsUniroma1Store, req.Pagination, func(key []byte, value []byte) error {
		var professorsExamsUniroma1 types.ProfessorsExamsUniroma1
		if err := k.cdc.Unmarshal(value, &professorsExamsUniroma1); err != nil {
			return err
		}

		professorsExamsUniroma1s = append(professorsExamsUniroma1s, professorsExamsUniroma1)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllProfessorsExamsUniroma1Response{ProfessorsExamsUniroma1: professorsExamsUniroma1s, Pagination: pageRes}, nil
}

func (k Keeper) ProfessorsExamsUniroma1(c context.Context, req *types.QueryGetProfessorsExamsUniroma1Request) (*types.QueryGetProfessorsExamsUniroma1Response, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetProfessorsExamsUniroma1(
		ctx,
		req.ExamName,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetProfessorsExamsUniroma1Response{ProfessorsExamsUniroma1: val}, nil
}
