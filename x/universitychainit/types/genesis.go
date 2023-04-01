package types

import (
	"fmt"

	host "github.com/cosmos/ibc-go/v3/modules/core/24-host"
)

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {

	/*
		uniInfo, err := utilfunc.ReadUniversityInfo()
		if err != nil {
			os.Exit(-1)
		}
	*/

	return &GenesisState{
		PortId:              PortID,
		StudentInfo:         nil,
		TranscriptOfRecords: nil,
		PersonalInfo:        nil,
		ResidenceInfo:       nil,
		ContactInfo:         nil,
		TaxesInfo:           nil,
		ErasmusInfo:         nil,
		ChainInfo: ChainInfo{
			HubKey:                "",
			ChainAdministratorKey: "cosmos1ga559f4vhx98u0exa5cvtxr4vxnk00tqfc0rlc", // bob address, to change
			ChainKey:              "",
			Country:               "",
			InitStatus:            false,
		},
		ForeignUniversitiesList:     []ForeignUniversities{},
		ProfessorsExamsUniroma1List: []ProfessorsExamsUniroma1{},
		StoredStudentUniroma1List:   []StoredStudentUniroma1{},
		UniversityInfoUniroma1:      nil,
		ProfessorsExamsUnipiList:    []ProfessorsExamsUnipi{},
		StoredStudentUnipiList:      []StoredStudentUnipi{},
		UniversityInfoUnipi:         nil,
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
	// Check for duplicated index in foreignUniversities
	foreignUniversitiesIndexMap := make(map[string]struct{})

	for _, elem := range gs.ForeignUniversitiesList {
		index := string(ForeignUniversitiesKey(elem.UniversityName))
		if _, ok := foreignUniversitiesIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for foreignUniversities")
		}
		foreignUniversitiesIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in professorsExamsUniroma1
	professorsExamsUniroma1IndexMap := make(map[string]struct{})

	for _, elem := range gs.ProfessorsExamsUniroma1List {
		index := string(ProfessorsExamsUniroma1Key(elem.ExamName))
		if _, ok := professorsExamsUniroma1IndexMap[index]; ok {
			return fmt.Errorf("duplicated index for professorsExamsUniroma1")
		}
		professorsExamsUniroma1IndexMap[index] = struct{}{}
	}
	// Check for duplicated index in storedStudentUniroma1
	storedStudentUniroma1IndexMap := make(map[string]struct{})

	for _, elem := range gs.StoredStudentUniroma1List {
		index := string(StoredStudentUniroma1Key(elem.Index))
		if _, ok := storedStudentUniroma1IndexMap[index]; ok {
			return fmt.Errorf("duplicated index for storedStudentUniroma1")
		}
		storedStudentUniroma1IndexMap[index] = struct{}{}
	}
	// Check for duplicated index in professorsExamsUnipi
	professorsExamsUnipiIndexMap := make(map[string]struct{})

	for _, elem := range gs.ProfessorsExamsUnipiList {
		index := string(ProfessorsExamsUnipiKey(elem.ExamName))
		if _, ok := professorsExamsUnipiIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for professorsExamsUnipi")
		}
		professorsExamsUnipiIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in storedStudentUnipi
	storedStudentUnipiIndexMap := make(map[string]struct{})

	for _, elem := range gs.StoredStudentUnipiList {
		index := string(StoredStudentUnipiKey(elem.Index))
		if _, ok := storedStudentUnipiIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for storedStudentUnipi")
		}
		storedStudentUnipiIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
