package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"university_chain_it/x/universitychainit/types"
)

// SetStoredStudentUnipi set a specific storedStudentUnipi in the store from its index
func (k Keeper) SetStoredStudentUnipi(ctx sdk.Context, storedStudentUnipi types.StoredStudentUnipi) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredStudentUnipiKeyPrefix))
	b := k.cdc.MustMarshal(&storedStudentUnipi)
	store.Set(types.StoredStudentUnipiKey(
		storedStudentUnipi.Index,
	), b)
}

// GetStoredStudentUnipi returns a storedStudentUnipi from its index
func (k Keeper) GetStoredStudentUnipi(
	ctx sdk.Context,
	index string,

) (val types.StoredStudentUnipi, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredStudentUnipiKeyPrefix))

	b := store.Get(types.StoredStudentUnipiKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveStoredStudentUnipi removes a storedStudentUnipi from the store
func (k Keeper) RemoveStoredStudentUnipi(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredStudentUnipiKeyPrefix))
	store.Delete(types.StoredStudentUnipiKey(
		index,
	))
}

// GetAllStoredStudentUnipi returns all storedStudentUnipi
func (k Keeper) GetAllStoredStudentUnipi(ctx sdk.Context) (list []types.StoredStudentUnipi) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredStudentUnipiKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.StoredStudentUnipi
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
