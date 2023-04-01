package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"university_chain_it/x/universitychainit/types"
)

// SetProfessorsExamsUnipi set a specific professorsExamsUnipi in the store from its index
func (k Keeper) SetProfessorsExamsUnipi(ctx sdk.Context, professorsExamsUnipi types.ProfessorsExamsUnipi) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfessorsExamsUnipiKeyPrefix))
	b := k.cdc.MustMarshal(&professorsExamsUnipi)
	store.Set(types.ProfessorsExamsUnipiKey(
		professorsExamsUnipi.ExamName,
	), b)
}

// GetProfessorsExamsUnipi returns a professorsExamsUnipi from its index
func (k Keeper) GetProfessorsExamsUnipi(
	ctx sdk.Context,
	examName string,

) (val types.ProfessorsExamsUnipi, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfessorsExamsUnipiKeyPrefix))

	b := store.Get(types.ProfessorsExamsUnipiKey(
		examName,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveProfessorsExamsUnipi removes a professorsExamsUnipi from the store
func (k Keeper) RemoveProfessorsExamsUnipi(
	ctx sdk.Context,
	examName string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfessorsExamsUnipiKeyPrefix))
	store.Delete(types.ProfessorsExamsUnipiKey(
		examName,
	))
}

// GetAllProfessorsExamsUnipi returns all professorsExamsUnipi
func (k Keeper) GetAllProfessorsExamsUnipi(ctx sdk.Context) (list []types.ProfessorsExamsUnipi) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfessorsExamsUnipiKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ProfessorsExamsUnipi
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
