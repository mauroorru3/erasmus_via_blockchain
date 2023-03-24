package universitychainit_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "university_chain_it/testutil/keeper"
	"university_chain_it/testutil/nullify"
	"university_chain_it/x/universitychainit"
	"university_chain_it/x/universitychainit/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		ProfessorsExamsList: []types.ProfessorsExams{
			{
				ExamName: "0",
			},
			{
				ExamName: "1",
			},
		},
		StudentInfo: &types.StudentInfo{
			Name:                     "46",
			Surname:                  "10",
			CourseType:               6,
			CourseOfStudy:            "66",
			Status:                   18,
			CurrentYearOfStudy:       84,
			OutOfCourse:              true,
			NumberOfYearsOutOfCourse: 69,
			StudentKey:               "57",
		},
		ExamsInfoList: []types.ExamsInfo{
			{
				ExamName: "0",
			},
			{
				ExamName: "1",
			},
		},
		TranscriptOfRecords: &types.TranscriptOfRecords{
			ExamsData:       new(types.ExamsData),
			TotalExams:      44,
			ExamsPassed:     43,
			TotalCredits:    65,
			AchievedCredits: 71,
		},
		PersonalInfo: &types.PersonalInfo{
			Gender:             4,
			DateOfBirth:        "52",
			PrimaryNationality: "85",
			CountryOfBirth:     "7",
			ProvinceOfBirth:    "13",
			TownOfBirth:        "49",
			TaxCode:            "95",
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.UniversitychainitKeeper(t)
	universitychainit.InitGenesis(ctx, *k, genesisState)
	got := universitychainit.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	require.ElementsMatch(t, genesisState.ProfessorsExamsList, got.ProfessorsExamsList)
	require.Equal(t, genesisState.StudentInfo, got.StudentInfo)
	require.ElementsMatch(t, genesisState.ExamsInfoList, got.ExamsInfoList)
	require.Equal(t, genesisState.TranscriptOfRecords, got.TranscriptOfRecords)
	require.Equal(t, genesisState.PersonalInfo, got.PersonalInfo)
	// this line is used by starport scaffolding # genesis/test/assert
}
