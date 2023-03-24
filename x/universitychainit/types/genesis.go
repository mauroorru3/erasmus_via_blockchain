package types

import (
	"fmt"
	host "github.com/cosmos/ibc-go/v3/modules/core/24-host"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId:              PortID,
		ProfessorsExamsList: []ProfessorsExams{},
		StudentInfo:         nil,
		ExamsInfoList:       []ExamsInfo{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}
	// Check for duplicated index in professorsExams
	professorsExamsIndexMap := make(map[string]struct{})

	for _, elem := range gs.ProfessorsExamsList {
		index := string(ProfessorsExamsKey(elem.ExamName))
		if _, ok := professorsExamsIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for professorsExams")
		}
		professorsExamsIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in examsInfo
	examsInfoIndexMap := make(map[string]struct{})

	for _, elem := range gs.ExamsInfoList {
		index := string(ExamsInfoKey(elem.ExamName))
		if _, ok := examsInfoIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for examsInfo")
		}
		examsInfoIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
