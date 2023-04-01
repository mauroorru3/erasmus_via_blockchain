package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"university_chain_it/x/universitychainit/types"
)

// SetProfessorsExamsUniroma1 set a specific professorsExamsUniroma1 in the store from its index
func (k Keeper) SetProfessorsExamsUniroma1(ctx sdk.Context, professorsExamsUniroma1 types.ProfessorsExamsUniroma1) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfessorsExamsUniroma1KeyPrefix))
	b := k.cdc.MustMarshal(&professorsExamsUniroma1)
	store.Set(types.ProfessorsExamsUniroma1Key(
		professorsExamsUniroma1.ExamName,
	), b)
}

// GetProfessorsExamsUniroma1 returns a professorsExamsUniroma1 from its index
func (k Keeper) GetProfessorsExamsUniroma1(
	ctx sdk.Context,
	examName string,

) (val types.ProfessorsExamsUniroma1, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfessorsExamsUniroma1KeyPrefix))

	b := store.Get(types.ProfessorsExamsUniroma1Key(
		examName,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveProfessorsExamsUniroma1 removes a professorsExamsUniroma1 from the store
func (k Keeper) RemoveProfessorsExamsUniroma1(
	ctx sdk.Context,
	examName string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfessorsExamsUniroma1KeyPrefix))
	store.Delete(types.ProfessorsExamsUniroma1Key(
		examName,
	))
}

// GetAllProfessorsExamsUniroma1 returns all professorsExamsUniroma1
func (k Keeper) GetAllProfessorsExamsUniroma1(ctx sdk.Context) (list []types.ProfessorsExamsUniroma1) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProfessorsExamsUniroma1KeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ProfessorsExamsUniroma1
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
