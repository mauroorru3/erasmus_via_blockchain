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
				TranscriptOfRecords: &types.TranscriptOfRecords{
					ExamsData:       "69",
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
				TaxesInfo: &types.TaxesInfo{
					Status:       false,
					TotalAmount:  63,
					TaxesHistory: "85",
				},
				ErasmusInfo: &types.ErasmusInfo{
					ErasmusStudent:      "57",
					NumberTimes:         69,
					NumberMonths:        57,
					TotalExams:          87,
					ExamsPassed:         51,
					TotalCredits:        7,
					AchievedCredits:     36,
					Career:              "55",
					PreviousStudentFifo: "42",
					NextStudentFifo:     "21",
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
					NextStudentId:   71,
					SecretariatKey:  "60",
					UniversityKey:   "61",
					CaiKey:          "4",
					FifoHeadErasmus: "22",
					FifoTailErasmus: "49",
					DeadlineTaxes:   "34",
					DeadlineErasmus: "97",
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
					NextStudentId:   97,
					SecretariatKey:  "46",
					UniversityKey:   "57",
					CaiKey:          "24",
					FifoHeadErasmus: "93",
					FifoTailErasmus: "14",
					DeadlineTaxes:   "8",
					DeadlineErasmus: "91",
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
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
		{
			desc: "duplicated professorsExamsUniroma1",
			genState: &types.GenesisState{
				ProfessorsExamsUniroma1List: []types.ProfessorsExamsUniroma1{
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
			desc: "duplicated storedStudentUniroma1",
			genState: &types.GenesisState{
				StoredStudentUniroma1List: []types.StoredStudentUniroma1{
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
			desc: "duplicated professorsExamsUnipi",
			genState: &types.GenesisState{
				ProfessorsExamsUnipiList: []types.ProfessorsExamsUnipi{
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
			desc: "duplicated storedStudentUnipi",
			genState: &types.GenesisState{
				StoredStudentUnipiList: []types.StoredStudentUnipi{
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
			PortId:              "universitychainit",
			StudentInfo:         nil,
			TranscriptOfRecords: nil,
			PersonalInfo:        nil,
			ResidenceInfo:       nil,
			ContactInfo:         nil,
			TaxesInfo:           nil,
			ErasmusInfo:         nil,
			ChainInfo: types.ChainInfo{
				HubKey:                "",
				ChainKey:              "",
				ChainAdministratorKey: "cosmos1ga559f4vhx98u0exa5cvtxr4vxnk00tqfc0rlc",
				Country:               "",
				InitStatus:            false,
			},
			ForeignUniversitiesList:     []types.ForeignUniversities{},
			ProfessorsExamsUniroma1List: []types.ProfessorsExamsUniroma1{},
			StoredStudentUniroma1List:   []types.StoredStudentUniroma1{},
			UniversityInfoUniroma1:      nil,
			ProfessorsExamsUnipiList:    []types.ProfessorsExamsUnipi{},
			StoredStudentUnipiList:      []types.StoredStudentUnipi{},
			UniversityInfoUnipi:         nil,
			Params:                      types.DefaultParams(),
		},
		types.DefaultGenesis())
}
