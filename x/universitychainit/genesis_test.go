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
		AnnualTaxesList: []types.AnnualTaxes{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		AnnualTaxesCount: 2,
		TaxesInfo: &types.TaxesInfo{
			Status:       false,
			TotalAmount:  73,
			TaxesHistory: new(types.TaxesHistory),
		},
		ErasmusContribution: &types.ErasmusContribution{
			Amount:        86,
			IncomeBracket: 20,
			PaymentMade:   true,
			DateOfPayment: "33",
		},
		ErasmusExamsList: []types.ErasmusExams{
			{
				ExamName: "0",
			},
			{
				ExamName: "1",
			},
		},
		ErasmusCareerList: []types.ErasmusCareer{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ErasmusCareerCount: 2,
		ErasmusInfo: &types.ErasmusInfo{
			ErasmusStudent:      "35",
			NumberTimes:         16,
			NumberMonths:        74,
			TotalExams:          70,
			ExamsPassed:         45,
			TotalCredits:        1,
			AchievedCredits:     10,
			Career:              new(types.Career),
			PreviousStudentFifo: "83",
			NextStudentFifo:     "26",
		},
		StoredStudentList: []types.StoredStudent{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		UniversityInfo: &types.UniversityInfo{
			NextStudentId:   43,
			SecretariatKey:  "96",
			UniversityKey:   "16",
			CaiKey:          "18",
			FifoHeadErasmus: "70",
			FifoTailErasmus: "98",
			DeadlineTaxes:   "23",
			DeadlineErasmus: "46",
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
	require.Equal(t, genesisState.ResidenceInfo, got.ResidenceInfo)
	require.Equal(t, genesisState.ContactInfo, got.ContactInfo)
	require.ElementsMatch(t, genesisState.AnnualTaxesList, got.AnnualTaxesList)
	require.Equal(t, genesisState.AnnualTaxesCount, got.AnnualTaxesCount)
	require.Equal(t, genesisState.TaxesInfo, got.TaxesInfo)
	require.Equal(t, genesisState.ErasmusContribution, got.ErasmusContribution)
	require.ElementsMatch(t, genesisState.ErasmusExamsList, got.ErasmusExamsList)
	require.ElementsMatch(t, genesisState.ErasmusCareerList, got.ErasmusCareerList)
	require.Equal(t, genesisState.ErasmusCareerCount, got.ErasmusCareerCount)
	require.Equal(t, genesisState.ErasmusInfo, got.ErasmusInfo)
	require.ElementsMatch(t, genesisState.StoredStudentList, got.StoredStudentList)
	require.Equal(t, genesisState.UniversityInfo, got.UniversityInfo)
	// this line is used by starport scaffolding # genesis/test/assert
}
