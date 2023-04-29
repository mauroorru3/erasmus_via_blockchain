package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgConfigureChain{}, "universitychainit/ConfigureChain", nil)
	cdc.RegisterConcrete(&MsgRegisterNewStudent{}, "universitychainit/RegisterNewStudent", nil)
	cdc.RegisterConcrete(&MsgInsertStudentPersonalInfo{}, "universitychainit/InsertStudentPersonalInfo", nil)
	cdc.RegisterConcrete(&MsgInsertStudentContactInfo{}, "universitychainit/InsertStudentContactInfo", nil)
	cdc.RegisterConcrete(&MsgInsertStudentResidenceInfo{}, "universitychainit/InsertStudentResidenceInfo", nil)
	cdc.RegisterConcrete(&MsgInsertExamGrade{}, "universitychainit/InsertExamGrade", nil)
	cdc.RegisterConcrete(&MsgPayTaxes{}, "universitychainit/PayTaxes", nil)
	cdc.RegisterConcrete(&MsgInsertErasmusRequest{}, "universitychainit/InsertErasmusRequest", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgConfigureChain{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRegisterNewStudent{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgInsertStudentPersonalInfo{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgInsertStudentContactInfo{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgInsertStudentResidenceInfo{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgInsertExamGrade{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgPayTaxes{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgInsertErasmusRequest{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
