package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"university_chain_it/x/universitychainit/types"
)

// SetStoredStudentUniroma1 set a specific storedStudentUniroma1 in the store from its index
func (k Keeper) SetStoredStudentUniroma1(ctx sdk.Context, storedStudentUniroma1 types.StoredStudentUniroma1) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredStudentUniroma1KeyPrefix))
	b := k.cdc.MustMarshal(&storedStudentUniroma1)
	store.Set(types.StoredStudentUniroma1Key(
		storedStudentUniroma1.Index,
	), b)
}

// GetStoredStudentUniroma1 returns a storedStudentUniroma1 from its index
func (k Keeper) GetStoredStudentUniroma1(
	ctx sdk.Context,
	index string,

) (val types.StoredStudentUniroma1, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredStudentUniroma1KeyPrefix))

	b := store.Get(types.StoredStudentUniroma1Key(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveStoredStudentUniroma1 removes a storedStudentUniroma1 from the store
func (k Keeper) RemoveStoredStudentUniroma1(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredStudentUniroma1KeyPrefix))
	store.Delete(types.StoredStudentUniroma1Key(
		index,
	))
}

// GetAllStoredStudentUniroma1 returns all storedStudentUniroma1
func (k Keeper) GetAllStoredStudentUniroma1(ctx sdk.Context) (list []types.StoredStudentUniroma1) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredStudentUniroma1KeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.StoredStudentUniroma1
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
