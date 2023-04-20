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
	ErrStudentAlreadyPresent         = sdkerrors.Register(ModuleName, 1109, "the student is already present")
	ErrStudentNotPresent             = sdkerrors.Register(ModuleName, 1110, "the student is not present")
	ErrGenderNotFound                = sdkerrors.Register(ModuleName, 1111, "the student gender is not found")
	ErrWrongDate                     = sdkerrors.Register(ModuleName, 1112, "the student birth date is wrong")
	ErrWrongTaxCode                  = sdkerrors.Register(ModuleName, 1113, "the student tax code is wrong")
	ErrWrongMobileNumber             = sdkerrors.Register(ModuleName, 1114, "the student mobile number is wrong")
	ErrWrongExamName                 = sdkerrors.Register(ModuleName, 1115, "the exam does not exists")
	ErrUnauthorisedUser              = sdkerrors.Register(ModuleName, 1116, "the user is not authorised to enter the grade for the exam under consideration")
	ErrWrongExamGrade                = sdkerrors.Register(ModuleName, 1117, "the exam grade is wrong")
	ErrGradeAlreadyAssigned          = sdkerrors.Register(ModuleName, 1118, "the exam grade was already assigned")
	ErrIncompleteStudentInformation  = sdkerrors.Register(ModuleName, 1119, "the student must first enter all information about him/herself")
	ErrStudentCannotPay              = sdkerrors.Register(ModuleName, 1120, "the student cannot pay the taxes")
	ErrCannotPayTaxes                = sdkerrors.Register(ModuleName, 1121, "the bank module cannot transfer the taxes")
	ErrNoTaxesToPay                  = sdkerrors.Register(ModuleName, 1122, "the student does not have to pay taxes")
	ErrTaxesAlreadyPayed             = sdkerrors.Register(ModuleName, 1123, "the student has already paid taxes")
	ErrUnpaidTaxes                   = sdkerrors.Register(ModuleName, 1124, "the student has not yet paid university taxes")
)
