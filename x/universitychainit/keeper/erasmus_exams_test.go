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

func createNErasmusExams(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.ErasmusExams {
	items := make([]types.ErasmusExams, n)
	for i := range items {
		items[i].ExamName = strconv.Itoa(i)

		keeper.SetErasmusExams(ctx, items[i])
	}
	return items
}

func TestErasmusExamsGet(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNErasmusExams(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetErasmusExams(ctx,
			item.ExamName,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestErasmusExamsRemove(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNErasmusExams(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveErasmusExams(ctx,
			item.ExamName,
		)
		_, found := keeper.GetErasmusExams(ctx,
			item.ExamName,
		)
		require.False(t, found)
	}
}

func TestErasmusExamsGetAll(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNErasmusExams(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllErasmusExams(ctx)),
	)
}
