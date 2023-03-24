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
		TranscriptOfRecords: nil,
		PersonalInfo:        nil,
		ResidenceInfo:       nil,
		ContactInfo:         nil,
		AnnualTaxesList:     []AnnualTaxes{},
		TaxesInfo:           nil,
		ErasmusContribution: nil,
		ErasmusExamsList:    []ErasmusExams{},
		ErasmusCareerList:   []ErasmusCareer{},
		ErasmusInfo:         nil,
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
	// Check for duplicated ID in annualTaxes
	annualTaxesIdMap := make(map[uint64]bool)
	annualTaxesCount := gs.GetAnnualTaxesCount()
	for _, elem := range gs.AnnualTaxesList {
		if _, ok := annualTaxesIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for annualTaxes")
		}
		if elem.Id >= annualTaxesCount {
			return fmt.Errorf("annualTaxes id should be lower or equal than the last id")
		}
		annualTaxesIdMap[elem.Id] = true
	}
	// Check for duplicated index in erasmusExams
	erasmusExamsIndexMap := make(map[string]struct{})

	for _, elem := range gs.ErasmusExamsList {
		index := string(ErasmusExamsKey(elem.ExamName))
		if _, ok := erasmusExamsIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for erasmusExams")
		}
		erasmusExamsIndexMap[index] = struct{}{}
	}
	// Check for duplicated ID in erasmusCareer
	erasmusCareerIdMap := make(map[uint64]bool)
	erasmusCareerCount := gs.GetErasmusCareerCount()
	for _, elem := range gs.ErasmusCareerList {
		if _, ok := erasmusCareerIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for erasmusCareer")
		}
		if elem.Id >= erasmusCareerCount {
			return fmt.Errorf("erasmusCareer id should be lower or equal than the last id")
		}
		erasmusCareerIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
