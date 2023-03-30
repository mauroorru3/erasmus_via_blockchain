package types_test

import (
	"testing"

	"university_chain_it/x/universitychainit/types"

	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
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
					Name:                     "69",
					Surname:                  "71",
					CourseType:               7,
					CourseOfStudy:            "10",
					Status:                   14,
					CurrentYearOfStudy:       67,
					OutOfCourse:              true,
					NumberOfYearsOutOfCourse: 25,
					StudentKey:               "3",
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
					ExamsData:       new(types.ExamsInfo),
					TotalExams:      55,
					ExamsPassed:     53,
					TotalCredits:    39,
					AchievedCredits: 32,
				},
				PersonalInfo: &types.PersonalInfo{
					Gender:             18,
					DateOfBirth:        "58",
					PrimaryNationality: "73",
					CountryOfBirth:     "97",
					ProvinceOfBirth:    "53",
					TownOfBirth:        "7",
					TaxCode:            "83",
				},
				ResidenceInfo: &types.ResidenceInfo{
					Country:     "84",
					Province:    "11",
					Town:        "61",
					PostCode:    "30",
					Address:     "13",
					HouseNumber: "77",
					HomePhone:   "77",
				},
				ContactInfo: &types.ContactInfo{
					ContactAddress: "89",
					Email:          "6",
					MobilePhone:    "63",
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
					TotalAmount:  63,
					TaxesHistory: new(types.AnnualTaxes),
				},
				ErasmusContribution: &types.ErasmusContribution{
					Amount:        59,
					IncomeBracket: 74,
					PaymentMade:   false,
					DateOfPayment: "10",
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
					ErasmusStudent:      "57",
					NumberTimes:         69,
					NumberMonths:        57,
					TotalExams:          87,
					ExamsPassed:         51,
					TotalCredits:        7,
					AchievedCredits:     36,
					Career:              new(types.ErasmusCareer),
					PreviousStudentFifo: "42",
					NextStudentFifo:     "21",
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
					NextStudentId:   3,
					SecretariatKey:  "91",
					UniversityKey:   "4",
					CaiKey:          "51",
					FifoHeadErasmus: "27",
					FifoTailErasmus: "70",
					DeadlineTaxes:   "89",
					DeadlineErasmus: "99",
				},
				UniversityDetailsList: []types.UniversityDetails{
					{
						UniversityName: "0",
					},
					{
						UniversityName: "1",
					},
				},
				ChainInfo: types.ChainInfo{
					HubKey:   "96",
					ChainKey: "54",
					Country:  "27",
				},
				ForeignUniversitiesList: []types.ForeignUniversities{
					{
						UniversityName: "0",
					},
					{
						UniversityName: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated professorsExams",
			genState: &types.GenesisState{
				ProfessorsExamsList: []types.ProfessorsExams{
					{
						ExamName: "0",
					},
					{
						ExamName: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated examsInfo",
			genState: &types.GenesisState{
				ExamsInfoList: []types.ExamsInfo{
					{
						ExamName: "0",
					},
					{
						ExamName: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated annualTaxes",
			genState: &types.GenesisState{
				AnnualTaxesList: []types.AnnualTaxes{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid annualTaxes count",
			genState: &types.GenesisState{
				AnnualTaxesList: []types.AnnualTaxes{
					{
						Id: 1,
					},
				},
				AnnualTaxesCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated erasmusExams",
			genState: &types.GenesisState{
				ErasmusExamsList: []types.ErasmusExams{
					{
						ExamName: "0",
					},
					{
						ExamName: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated erasmusCareer",
			genState: &types.GenesisState{
				ErasmusCareerList: []types.ErasmusCareer{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid erasmusCareer count",
			genState: &types.GenesisState{
				ErasmusCareerList: []types.ErasmusCareer{
					{
						Id: 1,
					},
				},
				ErasmusCareerCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated storedStudent",
			genState: &types.GenesisState{
				StoredStudentList: []types.StoredStudent{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated universityDetails",
			genState: &types.GenesisState{
				UniversityDetailsList: []types.UniversityDetails{
					{
						UniversityName: "0",
					},
					{
						UniversityName: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated foreignUniversities",
			genState: &types.GenesisState{
				ForeignUniversitiesList: []types.ForeignUniversities{
					{
						UniversityName: "0",
					},
					{
						UniversityName: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}

func TestDefaultGenesisState_ExpectedInitialValues(t *testing.T) {
	require.EqualValues(t,
		&types.GenesisState{
			PortId:                "universitychainit",
			ProfessorsExamsList:   []types.ProfessorsExams{},
			StudentInfo:           nil,
			ExamsInfoList:         []types.ExamsInfo{},
			TranscriptOfRecords:   nil,
			PersonalInfo:          nil,
			ResidenceInfo:         nil,
			ContactInfo:           nil,
			AnnualTaxesList:       []types.AnnualTaxes{},
			TaxesInfo:             nil,
			ErasmusContribution:   nil,
			ErasmusExamsList:      []types.ErasmusExams{},
			ErasmusCareerList:     []types.ErasmusCareer{},
			ErasmusInfo:           nil,
			StoredStudentList:     []types.StoredStudent{},
			UniversityInfo:        nil,
			UniversityDetailsList: []types.UniversityDetails{},
			ChainInfo: types.ChainInfo{
				HubKey:              "",
				ChainKey:            "",
				HubAdministratorKey: "cosmos1xyxs3skf3f4jfqeuv89yyaqvjc6lffavxqhc8g",
				Country:             "",
				InitStatus:          false,
			},
			ForeignUniversitiesList: []types.ForeignUniversities{},
			Params:                  types.DefaultParams(),
		},
		types.DefaultGenesis())
}
