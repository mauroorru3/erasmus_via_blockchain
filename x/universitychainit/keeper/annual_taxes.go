package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"university_chain_it/x/universitychainit/types"
)

// GetAnnualTaxesCount get the total number of annualTaxes
func (k Keeper) GetAnnualTaxesCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.AnnualTaxesCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetAnnualTaxesCount set the total number of annualTaxes
func (k Keeper) SetAnnualTaxesCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.AnnualTaxesCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendAnnualTaxes appends a annualTaxes in the store with a new id and update the count
func (k Keeper) AppendAnnualTaxes(
	ctx sdk.Context,
	annualTaxes types.AnnualTaxes,
) uint64 {
	// Create the annualTaxes
	count := k.GetAnnualTaxesCount(ctx)

	// Set the ID of the appended value
	annualTaxes.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AnnualTaxesKey))
	appendedValue := k.cdc.MustMarshal(&annualTaxes)
	store.Set(GetAnnualTaxesIDBytes(annualTaxes.Id), appendedValue)

	// Update annualTaxes count
	k.SetAnnualTaxesCount(ctx, count+1)

	return count
}

// SetAnnualTaxes set a specific annualTaxes in the store
func (k Keeper) SetAnnualTaxes(ctx sdk.Context, annualTaxes types.AnnualTaxes) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AnnualTaxesKey))
	b := k.cdc.MustMarshal(&annualTaxes)
	store.Set(GetAnnualTaxesIDBytes(annualTaxes.Id), b)
}

// GetAnnualTaxes returns a annualTaxes from its id
func (k Keeper) GetAnnualTaxes(ctx sdk.Context, id uint64) (val types.AnnualTaxes, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AnnualTaxesKey))
	b := store.Get(GetAnnualTaxesIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveAnnualTaxes removes a annualTaxes from the store
func (k Keeper) RemoveAnnualTaxes(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AnnualTaxesKey))
	store.Delete(GetAnnualTaxesIDBytes(id))
}

// GetAllAnnualTaxes returns all annualTaxes
func (k Keeper) GetAllAnnualTaxes(ctx sdk.Context) (list []types.AnnualTaxes) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AnnualTaxesKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.AnnualTaxes
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetAnnualTaxesIDBytes returns the byte representation of the ID
func GetAnnualTaxesIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetAnnualTaxesIDFromBytes returns ID in uint64 format from a byte array
func GetAnnualTaxesIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
