package universitychainit

import (
	"university_chain_it/x/universitychainit/keeper"
	"university_chain_it/x/universitychainit/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the professorsExams
	for _, elem := range genState.ProfessorsExamsList {
		k.SetProfessorsExams(ctx, elem)
	}
	// Set if defined
	if genState.StudentInfo != nil {
		k.SetStudentInfo(ctx, *genState.StudentInfo)
	}
	// Set if defined
	if genState.TranscriptOfRecords != nil {
		k.SetTranscriptOfRecords(ctx, *genState.TranscriptOfRecords)
	}
	// Set if defined
	if genState.PersonalInfo != nil {
		k.SetPersonalInfo(ctx, *genState.PersonalInfo)
	}
	// Set if defined
	if genState.ResidenceInfo != nil {
		k.SetResidenceInfo(ctx, *genState.ResidenceInfo)
	}
	// Set if defined
	if genState.ContactInfo != nil {
		k.SetContactInfo(ctx, *genState.ContactInfo)
	}
	// Set if defined
	if genState.TaxesInfo != nil {
		k.SetTaxesInfo(ctx, *genState.TaxesInfo)
	}
	// Set if defined
	if genState.ErasmusInfo != nil {
		k.SetErasmusInfo(ctx, *genState.ErasmusInfo)
	}
	// Set all the storedStudent
	for _, elem := range genState.StoredStudentList {
		k.SetStoredStudent(ctx, elem)
	}
	// Set if defined
	if genState.UniversityInfo != nil {
		k.SetUniversityInfo(ctx, *genState.UniversityInfo)
	}
	// Set if defined
	k.SetChainInfo(ctx, genState.ChainInfo)
	// Set all the foreignUniversities
	for _, elem := range genState.ForeignUniversitiesList {
		k.SetForeignUniversities(ctx, elem)
	}
	// Set all the professorsExamsUniroma1
	for _, elem := range genState.ProfessorsExamsUniroma1List {
		k.SetProfessorsExamsUniroma1(ctx, elem)
	}
	// Set all the storedStudentUniroma1
	for _, elem := range genState.StoredStudentUniroma1List {
		k.SetStoredStudentUniroma1(ctx, elem)
	}
	// Set if defined
	if genState.UniversityInfoUniroma1 != nil {
		k.SetUniversityInfoUniroma1(ctx, *genState.UniversityInfoUniroma1)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.PortId = k.GetPort(ctx)
	genesis.ProfessorsExamsList = k.GetAllProfessorsExams(ctx)
	// Get all studentInfo
	studentInfo, found := k.GetStudentInfo(ctx)
	if found {
		genesis.StudentInfo = &studentInfo
	}
	// Get all transcriptOfRecords
	transcriptOfRecords, found := k.GetTranscriptOfRecords(ctx)
	if found {
		genesis.TranscriptOfRecords = &transcriptOfRecords
	}
	// Get all personalInfo
	personalInfo, found := k.GetPersonalInfo(ctx)
	if found {
		genesis.PersonalInfo = &personalInfo
	}
	// Get all residenceInfo
	residenceInfo, found := k.GetResidenceInfo(ctx)
	if found {
		genesis.ResidenceInfo = &residenceInfo
	}
	// Get all contactInfo
	contactInfo, found := k.GetContactInfo(ctx)
	if found {
		genesis.ContactInfo = &contactInfo
	}
	// Get all taxesInfo
	taxesInfo, found := k.GetTaxesInfo(ctx)
	if found {
		genesis.TaxesInfo = &taxesInfo
	}
	// Get all erasmusInfo
	erasmusInfo, found := k.GetErasmusInfo(ctx)
	if found {
		genesis.ErasmusInfo = &erasmusInfo
	}
	genesis.StoredStudentList = k.GetAllStoredStudent(ctx)
	// Get all universityInfo
	universityInfo, found := k.GetUniversityInfo(ctx)
	if found {
		genesis.UniversityInfo = &universityInfo
	}
	// Get all chainInfo
	chainInfo, found := k.GetChainInfo(ctx)
	if found {
		genesis.ChainInfo = chainInfo
	}
	genesis.ForeignUniversitiesList = k.GetAllForeignUniversities(ctx)
	genesis.ProfessorsExamsUniroma1List = k.GetAllProfessorsExamsUniroma1(ctx)
	genesis.StoredStudentUniroma1List = k.GetAllStoredStudentUniroma1(ctx)
	// Get all universityInfoUniroma1
	universityInfoUniroma1, found := k.GetUniversityInfoUniroma1(ctx)
	if found {
		genesis.UniversityInfoUniroma1 = &universityInfoUniroma1
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
