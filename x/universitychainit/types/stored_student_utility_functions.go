package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var course_of_studies map[string]int = map[string]int{
	"cs": 1,
}

func (student_info StudentInfo) GetStudentAddress() (address sdk.AccAddress, err error) {
	address, errAddress := sdk.AccAddressFromBech32(student_info.StudentKey)
	return address, sdkerrors.Wrapf(errAddress, ErrInvalidStudentAddress.Error(), student_info.StudentKey)
}

func (student_info StudentInfo) Validate() (err error) {

	_, err = student_info.GetStudentAddress()
	if err != nil {
		return err
	}
	if student_info.CourseType != "master" && student_info.CourseType != "bachelor" {
		return ErrWrongCourseType
	}
	_, found := course_of_studies[student_info.CourseOfStudy]
	if !found {
		return ErrWrongCourseOfStudy
	}
	return err
}
