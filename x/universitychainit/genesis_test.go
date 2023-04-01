package universitychainit_test

import (
	"testing"

	keepertest "university_chain_it/testutil/keeper"
	"university_chain_it/testutil/nullify"
	"university_chain_it/x/universitychainit"
	"university_chain_it/x/universitychainit/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
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
		TranscriptOfRecords: &types.TranscriptOfRecords{
			ExamsData:       "46",
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
		ResidenceInfo: &types.ResidenceInfo{
			Country:     "38",
			Province:    "45",
			Town:        "84",
			PostCode:    "18",
			Address:     "65",
			HouseNumber: "58",
			HomePhone:   "89",
		},
		ContactInfo: &types.ContactInfo{
			ContactAddress: "5",
			Email:          "17",
			MobilePhone:    "83",
		},
		TaxesInfo: &types.TaxesInfo{
			Status:       false,
			TotalAmount:  73,
			TaxesHistory: "10",
		},
		ErasmusInfo: &types.ErasmusInfo{
			ErasmusStudent:      "35",
			NumberTimes:         16,
			NumberMonths:        74,
			TotalExams:          70,
			ExamsPassed:         45,
			TotalCredits:        1,
			AchievedCredits:     10,
			Career:              "10",
			PreviousStudentFifo: "83",
			NextStudentFifo:     "26",
		},
		ChainInfo: types.ChainInfo{
			HubKey:   "21",
			ChainKey: "47",
			Country:  "82",
		},
		ForeignUniversitiesList: []types.ForeignUniversities{
			{
				UniversityName: "0",
			},
			{
				UniversityName: "1",
			},
		},
		ProfessorsExamsUniroma1List: []types.ProfessorsExamsUniroma1{
			{
				ExamName: "0",
			},
			{
				ExamName: "1",
			},
		},
		StoredStudentUniroma1List: []types.StoredStudentUniroma1{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		UniversityInfoUniroma1: &types.UniversityInfoUniroma1{
			NextStudentId:   97,
			SecretariatKey:  "8",
			UniversityKey:   "63",
			CaiKey:          "2",
			FifoHeadErasmus: "77",
			FifoTailErasmus: "91",
			DeadlineTaxes:   "63",
			DeadlineErasmus: "5",
		},
		ProfessorsExamsUnipiList: []types.ProfessorsExamsUnipi{
			{
				ExamName: "0",
			},
			{
				ExamName: "1",
			},
		},
		StoredStudentUnipiList: []types.StoredStudentUnipi{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		UniversityInfoUnipi: &types.UniversityInfoUnipi{
			NextStudentId:   18,
			SecretariatKey:  "53",
			UniversityKey:   "30",
			CaiKey:          "93",
			FifoHeadErasmus: "25",
			FifoTailErasmus: "77",
			DeadlineTaxes:   "62",
			DeadlineErasmus: "28",
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

	require.Equal(t, genesisState.StudentInfo, got.StudentInfo)
	require.Equal(t, genesisState.TranscriptOfRecords, got.TranscriptOfRecords)
	require.Equal(t, genesisState.PersonalInfo, got.PersonalInfo)
	require.Equal(t, genesisState.ResidenceInfo, got.ResidenceInfo)
	require.Equal(t, genesisState.ContactInfo, got.ContactInfo)
	require.Equal(t, genesisState.TaxesInfo, got.TaxesInfo)
	require.Equal(t, genesisState.ErasmusInfo, got.ErasmusInfo)
	require.Equal(t, genesisState.ChainInfo, got.ChainInfo)
	require.ElementsMatch(t, genesisState.ForeignUniversitiesList, got.ForeignUniversitiesList)
	require.ElementsMatch(t, genesisState.ProfessorsExamsUniroma1List, got.ProfessorsExamsUniroma1List)
	require.ElementsMatch(t, genesisState.StoredStudentUniroma1List, got.StoredStudentUniroma1List)
	require.Equal(t, genesisState.UniversityInfoUniroma1, got.UniversityInfoUniroma1)
	require.ElementsMatch(t, genesisState.ProfessorsExamsUnipiList, got.ProfessorsExamsUnipiList)
	require.ElementsMatch(t, genesisState.StoredStudentUnipiList, got.StoredStudentUnipiList)
	require.Equal(t, genesisState.UniversityInfoUnipi, got.UniversityInfoUnipi)
	// this line is used by starport scaffolding # genesis/test/assert
}
