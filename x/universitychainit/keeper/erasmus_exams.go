package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"university_chain_it/x/universitychainit/types"
)

// SetErasmusExams set a specific erasmusExams in the store from its index
func (k Keeper) SetErasmusExams(ctx sdk.Context, erasmusExams types.ErasmusExams) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ErasmusExamsKeyPrefix))
	b := k.cdc.MustMarshal(&erasmusExams)
	store.Set(types.ErasmusExamsKey(
		erasmusExams.ExamName,
	), b)
}

// GetErasmusExams returns a erasmusExams from its index
func (k Keeper) GetErasmusExams(
	ctx sdk.Context,
	examName string,

) (val types.ErasmusExams, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ErasmusExamsKeyPrefix))

	b := store.Get(types.ErasmusExamsKey(
		examName,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveErasmusExams removes a erasmusExams from the store
func (k Keeper) RemoveErasmusExams(
	ctx sdk.Context,
	examName string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ErasmusExamsKeyPrefix))
	store.Delete(types.ErasmusExamsKey(
		examName,
	))
}

// GetAllErasmusExams returns all erasmusExams
func (k Keeper) GetAllErasmusExams(ctx sdk.Context) (list []types.ErasmusExams) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ErasmusExamsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ErasmusExams
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
