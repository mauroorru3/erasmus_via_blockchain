package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"university_chain_it/x/universitychainit/types"
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
					ExamsData:       new(types.ExamsData),
					TotalExams:      55,
					ExamsPassed:     53,
					TotalCredits:    39,
					AchievedCredits: 32,
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
