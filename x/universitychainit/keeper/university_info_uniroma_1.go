package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"university_chain_it/x/universitychainit/types"
)

// SetUniversityInfoUniroma1 set universityInfoUniroma1 in the store
func (k Keeper) SetUniversityInfoUniroma1(ctx sdk.Context, universityInfoUniroma1 types.UniversityInfoUniroma1) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UniversityInfoUniroma1Key))
	b := k.cdc.MustMarshal(&universityInfoUniroma1)
	store.Set([]byte{0}, b)
}

// GetUniversityInfoUniroma1 returns universityInfoUniroma1
func (k Keeper) GetUniversityInfoUniroma1(ctx sdk.Context) (val types.UniversityInfoUniroma1, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UniversityInfoUniroma1Key))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveUniversityInfoUniroma1 removes universityInfoUniroma1 from the store
func (k Keeper) RemoveUniversityInfoUniroma1(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UniversityInfoUniroma1Key))
	store.Delete([]byte{0})
}
