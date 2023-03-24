package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"university_chain_it/x/universitychainit/types"
)

// SetErasmusContribution set erasmusContribution in the store
func (k Keeper) SetErasmusContribution(ctx sdk.Context, erasmusContribution types.ErasmusContribution) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ErasmusContributionKey))
	b := k.cdc.MustMarshal(&erasmusContribution)
	store.Set([]byte{0}, b)
}

// GetErasmusContribution returns erasmusContribution
func (k Keeper) GetErasmusContribution(ctx sdk.Context) (val types.ErasmusContribution, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ErasmusContributionKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveErasmusContribution removes erasmusContribution from the store
func (k Keeper) RemoveErasmusContribution(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ErasmusContributionKey))
	store.Delete([]byte{0})
}
