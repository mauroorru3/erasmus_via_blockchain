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

func createNStoredStudentUnipi(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.StoredStudentUnipi {
	items := make([]types.StoredStudentUnipi, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetStoredStudentUnipi(ctx, items[i])
	}
	return items
}

func TestStoredStudentUnipiGet(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNStoredStudentUnipi(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetStoredStudentUnipi(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestStoredStudentUnipiRemove(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNStoredStudentUnipi(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveStoredStudentUnipi(ctx,
			item.Index,
		)
		_, found := keeper.GetStoredStudentUnipi(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestStoredStudentUnipiGetAll(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNStoredStudentUnipi(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllStoredStudentUnipi(ctx)),
	)
}
