package universitychainit

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"university_chain_it/testutil/sample"
	universitychainitsimulation "university_chain_it/x/universitychainit/simulation"
	"university_chain_it/x/universitychainit/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = universitychainitsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgConfigureChain = "op_weight_msg_configure_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgConfigureChain int = 100

	opWeightMsgRegisterNewStudent = "op_weight_msg_register_new_student"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRegisterNewStudent int = 100

	opWeightMsgInsertStudentPersonalInfo = "op_weight_msg_insert_student_personal_info"
	// TODO: Determine the simulation weight value
	defaultWeightMsgInsertStudentPersonalInfo int = 100

	opWeightMsgInsertStudentContactInfo = "op_weight_msg_insert_student_contact_info"
	// TODO: Determine the simulation weight value
	defaultWeightMsgInsertStudentContactInfo int = 100

	opWeightMsgInsertStudentResidenceInfo = "op_weight_msg_insert_student_residence_info"
	// TODO: Determine the simulation weight value
	defaultWeightMsgInsertStudentResidenceInfo int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	universitychainitGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&universitychainitGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgConfigureChain int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgConfigureChain, &weightMsgConfigureChain, nil,
		func(_ *rand.Rand) {
			weightMsgConfigureChain = defaultWeightMsgConfigureChain
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgConfigureChain,
		universitychainitsimulation.SimulateMsgConfigureChain(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRegisterNewStudent int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRegisterNewStudent, &weightMsgRegisterNewStudent, nil,
		func(_ *rand.Rand) {
			weightMsgRegisterNewStudent = defaultWeightMsgRegisterNewStudent
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRegisterNewStudent,
		universitychainitsimulation.SimulateMsgRegisterNewStudent(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgInsertStudentPersonalInfo int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgInsertStudentPersonalInfo, &weightMsgInsertStudentPersonalInfo, nil,
		func(_ *rand.Rand) {
			weightMsgInsertStudentPersonalInfo = defaultWeightMsgInsertStudentPersonalInfo
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgInsertStudentPersonalInfo,
		universitychainitsimulation.SimulateMsgInsertStudentPersonalInfo(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgInsertStudentContactInfo int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgInsertStudentContactInfo, &weightMsgInsertStudentContactInfo, nil,
		func(_ *rand.Rand) {
			weightMsgInsertStudentContactInfo = defaultWeightMsgInsertStudentContactInfo
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgInsertStudentContactInfo,
		universitychainitsimulation.SimulateMsgInsertStudentContactInfo(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgInsertStudentResidenceInfo int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgInsertStudentResidenceInfo, &weightMsgInsertStudentResidenceInfo, nil,
		func(_ *rand.Rand) {
			weightMsgInsertStudentResidenceInfo = defaultWeightMsgInsertStudentResidenceInfo
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgInsertStudentResidenceInfo,
		universitychainitsimulation.SimulateMsgInsertStudentResidenceInfo(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
