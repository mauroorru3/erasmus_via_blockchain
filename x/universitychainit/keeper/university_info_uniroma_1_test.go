package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "university_chain_it/testutil/keeper"
	"university_chain_it/testutil/nullify"
	"university_chain_it/x/universitychainit/keeper"
	"university_chain_it/x/universitychainit/types"
)

func createTestUniversityInfoUniroma1(keeper *keeper.Keeper, ctx sdk.Context) types.UniversityInfoUniroma1 {
	item := types.UniversityInfoUniroma1{}
	keeper.SetUniversityInfoUniroma1(ctx, item)
	return item
}

func TestUniversityInfoUniroma1Get(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	item := createTestUniversityInfoUniroma1(keeper, ctx)
	rst, found := keeper.GetUniversityInfoUniroma1(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestUniversityInfoUniroma1Remove(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	createTestUniversityInfoUniroma1(keeper, ctx)
	keeper.RemoveUniversityInfoUniroma1(ctx)
	_, found := keeper.GetUniversityInfoUniroma1(ctx)
	require.False(t, found)
}
