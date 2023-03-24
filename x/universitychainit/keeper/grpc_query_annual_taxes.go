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

func (k Keeper) AnnualTaxesAll(c context.Context, req *types.QueryAllAnnualTaxesRequest) (*types.QueryAllAnnualTaxesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var annualTaxess []types.AnnualTaxes
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	annualTaxesStore := prefix.NewStore(store, types.KeyPrefix(types.AnnualTaxesKey))

	pageRes, err := query.Paginate(annualTaxesStore, req.Pagination, func(key []byte, value []byte) error {
		var annualTaxes types.AnnualTaxes
		if err := k.cdc.Unmarshal(value, &annualTaxes); err != nil {
			return err
		}

		annualTaxess = append(annualTaxess, annualTaxes)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAnnualTaxesResponse{AnnualTaxes: annualTaxess, Pagination: pageRes}, nil
}

func (k Keeper) AnnualTaxes(c context.Context, req *types.QueryGetAnnualTaxesRequest) (*types.QueryGetAnnualTaxesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	annualTaxes, found := k.GetAnnualTaxes(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetAnnualTaxesResponse{AnnualTaxes: annualTaxes}, nil
}
