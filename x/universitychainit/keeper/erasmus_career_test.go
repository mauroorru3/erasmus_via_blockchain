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

func createNErasmusCareer(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.ErasmusCareer {
	items := make([]types.ErasmusCareer, n)
	for i := range items {
		items[i].Id = keeper.AppendErasmusCareer(ctx, items[i])
	}
	return items
}

func TestErasmusCareerGet(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNErasmusCareer(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetErasmusCareer(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestErasmusCareerRemove(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNErasmusCareer(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveErasmusCareer(ctx, item.Id)
		_, found := keeper.GetErasmusCareer(ctx, item.Id)
		require.False(t, found)
	}
}

func TestErasmusCareerGetAll(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNErasmusCareer(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllErasmusCareer(ctx)),
	)
}

func TestErasmusCareerCount(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNErasmusCareer(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetErasmusCareerCount(ctx))
}
