package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"university_chain_it/x/universitychainit/types"
)

// SetUniversityInfoUnipi set universityInfoUnipi in the store
func (k Keeper) SetUniversityInfoUnipi(ctx sdk.Context, universityInfoUnipi types.UniversityInfoUnipi) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UniversityInfoUnipiKey))
	b := k.cdc.MustMarshal(&universityInfoUnipi)
	store.Set([]byte{0}, b)
}

// GetUniversityInfoUnipi returns universityInfoUnipi
func (k Keeper) GetUniversityInfoUnipi(ctx sdk.Context) (val types.UniversityInfoUnipi, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UniversityInfoUnipiKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveUniversityInfoUnipi removes universityInfoUnipi from the store
func (k Keeper) RemoveUniversityInfoUnipi(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UniversityInfoUnipiKey))
	store.Delete([]byte{0})
}
