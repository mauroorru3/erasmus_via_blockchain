package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"university_chain_it/x/universitychainit/types"
)

// SetUniversityDetails set a specific universityDetails in the store from its index
func (k Keeper) SetUniversityDetails(ctx sdk.Context, universityDetails types.UniversityDetails) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UniversityDetailsKeyPrefix))
	b := k.cdc.MustMarshal(&universityDetails)
	store.Set(types.UniversityDetailsKey(
		universityDetails.UniversityName,
	), b)
}

// GetUniversityDetails returns a universityDetails from its index
func (k Keeper) GetUniversityDetails(
	ctx sdk.Context,
	universityName string,

) (val types.UniversityDetails, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UniversityDetailsKeyPrefix))

	b := store.Get(types.UniversityDetailsKey(
		universityName,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveUniversityDetails removes a universityDetails from the store
func (k Keeper) RemoveUniversityDetails(
	ctx sdk.Context,
	universityName string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UniversityDetailsKeyPrefix))
	store.Delete(types.UniversityDetailsKey(
		universityName,
	))
}

// GetAllUniversityDetails returns all universityDetails
func (k Keeper) GetAllUniversityDetails(ctx sdk.Context) (list []types.UniversityDetails) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UniversityDetailsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.UniversityDetails
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
