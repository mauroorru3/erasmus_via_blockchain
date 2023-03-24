package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"university_chain_it/x/universitychainit/types"
)

// GetErasmusCareerCount get the total number of erasmusCareer
func (k Keeper) GetErasmusCareerCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ErasmusCareerCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetErasmusCareerCount set the total number of erasmusCareer
func (k Keeper) SetErasmusCareerCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ErasmusCareerCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendErasmusCareer appends a erasmusCareer in the store with a new id and update the count
func (k Keeper) AppendErasmusCareer(
	ctx sdk.Context,
	erasmusCareer types.ErasmusCareer,
) uint64 {
	// Create the erasmusCareer
	count := k.GetErasmusCareerCount(ctx)

	// Set the ID of the appended value
	erasmusCareer.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ErasmusCareerKey))
	appendedValue := k.cdc.MustMarshal(&erasmusCareer)
	store.Set(GetErasmusCareerIDBytes(erasmusCareer.Id), appendedValue)

	// Update erasmusCareer count
	k.SetErasmusCareerCount(ctx, count+1)

	return count
}

// SetErasmusCareer set a specific erasmusCareer in the store
func (k Keeper) SetErasmusCareer(ctx sdk.Context, erasmusCareer types.ErasmusCareer) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ErasmusCareerKey))
	b := k.cdc.MustMarshal(&erasmusCareer)
	store.Set(GetErasmusCareerIDBytes(erasmusCareer.Id), b)
}

// GetErasmusCareer returns a erasmusCareer from its id
func (k Keeper) GetErasmusCareer(ctx sdk.Context, id uint64) (val types.ErasmusCareer, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ErasmusCareerKey))
	b := store.Get(GetErasmusCareerIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveErasmusCareer removes a erasmusCareer from the store
func (k Keeper) RemoveErasmusCareer(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ErasmusCareerKey))
	store.Delete(GetErasmusCareerIDBytes(id))
}

// GetAllErasmusCareer returns all erasmusCareer
func (k Keeper) GetAllErasmusCareer(ctx sdk.Context) (list []types.ErasmusCareer) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ErasmusCareerKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ErasmusCareer
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetErasmusCareerIDBytes returns the byte representation of the ID
func GetErasmusCareerIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetErasmusCareerIDFromBytes returns ID in uint64 format from a byte array
func GetErasmusCareerIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
