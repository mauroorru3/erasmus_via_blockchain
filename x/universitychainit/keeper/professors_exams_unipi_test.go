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

func createNProfessorsExamsUnipi(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.ProfessorsExamsUnipi {
	items := make([]types.ProfessorsExamsUnipi, n)
	for i := range items {
		items[i].ExamName = strconv.Itoa(i)

		keeper.SetProfessorsExamsUnipi(ctx, items[i])
	}
	return items
}

func TestProfessorsExamsUnipiGet(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNProfessorsExamsUnipi(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetProfessorsExamsUnipi(ctx,
			item.ExamName,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestProfessorsExamsUnipiRemove(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNProfessorsExamsUnipi(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveProfessorsExamsUnipi(ctx,
			item.ExamName,
		)
		_, found := keeper.GetProfessorsExamsUnipi(ctx,
			item.ExamName,
		)
		require.False(t, found)
	}
}

func TestProfessorsExamsUnipiGetAll(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNProfessorsExamsUnipi(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllProfessorsExamsUnipi(ctx)),
	)
}
