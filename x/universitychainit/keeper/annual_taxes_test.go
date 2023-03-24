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

func createNAnnualTaxes(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.AnnualTaxes {
	items := make([]types.AnnualTaxes, n)
	for i := range items {
		items[i].Id = keeper.AppendAnnualTaxes(ctx, items[i])
	}
	return items
}

func TestAnnualTaxesGet(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNAnnualTaxes(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetAnnualTaxes(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestAnnualTaxesRemove(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNAnnualTaxes(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveAnnualTaxes(ctx, item.Id)
		_, found := keeper.GetAnnualTaxes(ctx, item.Id)
		require.False(t, found)
	}
}

func TestAnnualTaxesGetAll(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNAnnualTaxes(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllAnnualTaxes(ctx)),
	)
}

func TestAnnualTaxesCount(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNAnnualTaxes(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetAnnualTaxesCount(ctx))
}
