package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"university_chain_it/x/universitychainit/types"
)

func (k Keeper) ErasmusCareerAll(c context.Context, req *types.QueryAllErasmusCareerRequest) (*types.QueryAllErasmusCareerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var erasmusCareers []types.ErasmusCareer
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	erasmusCareerStore := prefix.NewStore(store, types.KeyPrefix(types.ErasmusCareerKey))

	pageRes, err := query.Paginate(erasmusCareerStore, req.Pagination, func(key []byte, value []byte) error {
		var erasmusCareer types.ErasmusCareer
		if err := k.cdc.Unmarshal(value, &erasmusCareer); err != nil {
			return err
		}

		erasmusCareers = append(erasmusCareers, erasmusCareer)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllErasmusCareerResponse{ErasmusCareer: erasmusCareers, Pagination: pageRes}, nil
}

func (k Keeper) ErasmusCareer(c context.Context, req *types.QueryGetErasmusCareerRequest) (*types.QueryGetErasmusCareerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	erasmusCareer, found := k.GetErasmusCareer(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetErasmusCareerResponse{ErasmusCareer: erasmusCareer}, nil
}
