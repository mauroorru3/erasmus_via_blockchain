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

func createTestUniversityInfoUnipi(keeper *keeper.Keeper, ctx sdk.Context) types.UniversityInfoUnipi {
	item := types.UniversityInfoUnipi{}
	keeper.SetUniversityInfoUnipi(ctx, item)
	return item
}

func TestUniversityInfoUnipiGet(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	item := createTestUniversityInfoUnipi(keeper, ctx)
	rst, found := keeper.GetUniversityInfoUnipi(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestUniversityInfoUnipiRemove(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	createTestUniversityInfoUnipi(keeper, ctx)
	keeper.RemoveUniversityInfoUnipi(ctx)
	_, found := keeper.GetUniversityInfoUnipi(ctx)
	require.False(t, found)
}
