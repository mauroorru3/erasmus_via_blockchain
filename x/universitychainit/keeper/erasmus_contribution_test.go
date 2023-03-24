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

func createTestErasmusContribution(keeper *keeper.Keeper, ctx sdk.Context) types.ErasmusContribution {
	item := types.ErasmusContribution{}
	keeper.SetErasmusContribution(ctx, item)
	return item
}

func TestErasmusContributionGet(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	item := createTestErasmusContribution(keeper, ctx)
	rst, found := keeper.GetErasmusContribution(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestErasmusContributionRemove(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	createTestErasmusContribution(keeper, ctx)
	keeper.RemoveErasmusContribution(ctx)
	_, found := keeper.GetErasmusContribution(ctx)
	require.False(t, found)
}
