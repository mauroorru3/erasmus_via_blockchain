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

func createNUniversityDetails(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.UniversityDetails {
	items := make([]types.UniversityDetails, n)
	for i := range items {
		items[i].UniversityName = strconv.Itoa(i)

		keeper.SetUniversityDetails(ctx, items[i])
	}
	return items
}

func TestUniversityDetailsGet(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNUniversityDetails(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetUniversityDetails(ctx,
			item.UniversityName,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestUniversityDetailsRemove(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNUniversityDetails(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveUniversityDetails(ctx,
			item.UniversityName,
		)
		_, found := keeper.GetUniversityDetails(ctx,
			item.UniversityName,
		)
		require.False(t, found)
	}
}

func TestUniversityDetailsGetAll(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNUniversityDetails(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllUniversityDetails(ctx)),
	)
}
