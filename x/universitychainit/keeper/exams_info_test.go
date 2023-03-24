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

func createNExamsInfo(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.ExamsInfo {
	items := make([]types.ExamsInfo, n)
	for i := range items {
		items[i].ExamName = strconv.Itoa(i)

		keeper.SetExamsInfo(ctx, items[i])
	}
	return items
}

func TestExamsInfoGet(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNExamsInfo(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetExamsInfo(ctx,
			item.ExamName,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestExamsInfoRemove(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNExamsInfo(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveExamsInfo(ctx,
			item.ExamName,
		)
		_, found := keeper.GetExamsInfo(ctx,
			item.ExamName,
		)
		require.False(t, found)
	}
}

func TestExamsInfoGetAll(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNExamsInfo(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllExamsInfo(ctx)),
	)
}
