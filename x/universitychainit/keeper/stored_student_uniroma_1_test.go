package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "university_chain_it/testutil/keeper"
	"university_chain_it/testutil/nullify"
	"university_chain_it/x/universitychainit/keeper"
	"university_chain_it/x/universitychainit/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNStoredStudentUniroma1(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.StoredStudentUniroma1 {
	items := make([]types.StoredStudentUniroma1, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetStoredStudentUniroma1(ctx, items[i])
	}
	return items
}

func TestStoredStudentUniroma1Get(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNStoredStudentUniroma1(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetStoredStudentUniroma1(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestStoredStudentUniroma1Remove(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNStoredStudentUniroma1(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveStoredStudentUniroma1(ctx,
			item.Index,
		)
		_, found := keeper.GetStoredStudentUniroma1(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestStoredStudentUniroma1GetAll(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNStoredStudentUniroma1(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllStoredStudentUniroma1(ctx)),
	)
}
