package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"university_chain_it/x/universitychainit/types"
)

// SetUniversityInfo set universityInfo in the store
func (k Keeper) SetUniversityInfo(ctx sdk.Context, universityInfo types.UniversityInfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UniversityInfoKey))
	b := k.cdc.MustMarshal(&universityInfo)
	store.Set([]byte{0}, b)
}

// GetUniversityInfo returns universityInfo
func (k Keeper) GetUniversityInfo(ctx sdk.Context) (val types.UniversityInfo, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UniversityInfoKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveUniversityInfo removes universityInfo from the store
func (k Keeper) RemoveUniversityInfo(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UniversityInfoKey))
	store.Delete([]byte{0})
}
