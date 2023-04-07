package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/universitychainit module sentinel errors
var (
	ErrSample                        = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrInvalidPacketTimeout          = sdkerrors.Register(ModuleName, 1500, "invalid packet timeout")
	ErrInvalidVersion                = sdkerrors.Register(ModuleName, 1501, "invalid version")
	ErrInvalidStudentAddress         = sdkerrors.Register(ModuleName, 1101, "student address is invalid: %s")
	ErrChainConfigurationAlreadyDone = sdkerrors.Register(ModuleName, 1102, "the initial configuration of the chain has already been performed")
	ErrChainConfigurationNotDone     = sdkerrors.Register(ModuleName, 1103, "the initial configuration of the chain has not yet been performed.")
	ErrKeyEnteredMismatchAdminChain  = sdkerrors.Register(ModuleName, 1104, "the key entered does not match the chain administrator's key")
	ErrWrongNameUniversity           = sdkerrors.Register(ModuleName, 1105, "the university name does not exists")
	ErrWrongCourseType               = sdkerrors.Register(ModuleName, 1106, "the course type does not exists")
	ErrWrongCourseOfStudy            = sdkerrors.Register(ModuleName, 1107, "the course of study does not exists")
	ErrWrongDepartment               = sdkerrors.Register(ModuleName, 1108, "the department does not exists")
)
