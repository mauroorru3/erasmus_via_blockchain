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

func createNProfessorsExamsUniroma1(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.ProfessorsExamsUniroma1 {
	items := make([]types.ProfessorsExamsUniroma1, n)
	for i := range items {
		items[i].ExamName = strconv.Itoa(i)

		keeper.SetProfessorsExamsUniroma1(ctx, items[i])
	}
	return items
}

func TestProfessorsExamsUniroma1Get(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNProfessorsExamsUniroma1(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetProfessorsExamsUniroma1(ctx,
			item.ExamName,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestProfessorsExamsUniroma1Remove(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNProfessorsExamsUniroma1(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveProfessorsExamsUniroma1(ctx,
			item.ExamName,
		)
		_, found := keeper.GetProfessorsExamsUniroma1(ctx,
			item.ExamName,
		)
		require.False(t, found)
	}
}

func TestProfessorsExamsUniroma1GetAll(t *testing.T) {
	keeper, ctx := keepertest.UniversitychainitKeeper(t)
	items := createNProfessorsExamsUniroma1(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllProfessorsExamsUniroma1(ctx)),
	)
}
