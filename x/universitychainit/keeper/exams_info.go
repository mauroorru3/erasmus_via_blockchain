package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"university_chain_it/x/universitychainit/types"
)

// SetExamsInfo set a specific examsInfo in the store from its index
func (k Keeper) SetExamsInfo(ctx sdk.Context, examsInfo types.ExamsInfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExamsInfoKeyPrefix))
	b := k.cdc.MustMarshal(&examsInfo)
	store.Set(types.ExamsInfoKey(
		examsInfo.ExamName,
	), b)
}

// GetExamsInfo returns a examsInfo from its index
func (k Keeper) GetExamsInfo(
	ctx sdk.Context,
	examName string,

) (val types.ExamsInfo, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExamsInfoKeyPrefix))

	b := store.Get(types.ExamsInfoKey(
		examName,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveExamsInfo removes a examsInfo from the store
func (k Keeper) RemoveExamsInfo(
	ctx sdk.Context,
	examName string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExamsInfoKeyPrefix))
	store.Delete(types.ExamsInfoKey(
		examName,
	))
}

// GetAllExamsInfo returns all examsInfo
func (k Keeper) GetAllExamsInfo(ctx sdk.Context) (list []types.ExamsInfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ExamsInfoKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ExamsInfo
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
