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

func createTestUniversityInfo(keeper *keeper.Keeper, ctx sdk.Context) types.UniversityInfo {
	item := types.UniversityInfo{}
	keeper.SetUniversityInfo(ctx, item)
	return item
}

func TestUniversityInfoGet(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	item := createTestUniversityInfo(keeper, ctx)
	rst, found := keeper.GetUniversityInfo(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestUniversityInfoRemove(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	createTestUniversityInfo(keeper, ctx)
	keeper.RemoveUniversityInfo(ctx)
	_, found := keeper.GetUniversityInfo(ctx)
	require.False(t, found)
}
