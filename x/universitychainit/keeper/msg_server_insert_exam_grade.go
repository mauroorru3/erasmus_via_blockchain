package keeper

import (
	"context"
	"strconv"

	"university_chain_it/x/universitychainit/types"
	"university_chain_it/x/universitychainit/utilfunc"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InsertExamGrade(goCtx context.Context, msg *types.MsgInsertExamGrade) (*types.MsgInsertExamGradeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	gradeNum, err := strconv.ParseUint(msg.Grade, 10, 8)
	if err != nil {
		if msg.Grade != "30L" {
			return &types.MsgInsertExamGradeResponse{
				Status: -1,
			}, types.ErrWrongExamGrade
		}
	} else {
		if gradeNum > 30 {
			return &types.MsgInsertExamGradeResponse{
				Status: -1,
			}, types.ErrWrongExamGrade
		}
	}

	examInfo, found := k.Keeper.GetProfessorsExams(ctx, msg.University+"_"+msg.ExamName)
	if !found {
		return &types.MsgInsertExamGradeResponse{
			Status: -1,
		}, types.ErrWrongExamName
	}
	if msg.Creator == examInfo.ProfessorKey {

		searchedStudent, found := k.Keeper.GetStoredStudent(ctx, msg.GetUniversity()+"_"+msg.GetStudentIndex())
		if found {

			completeInfo := searchedStudent.StudentData.CompleteInformation

			if completeInfo[0] == 0 || completeInfo[1] == 0 || completeInfo[2] == 0 {
				return &types.MsgInsertExamGradeResponse{
					Status: -1,
				}, types.ErrIncompleteStudentInformation
			} else {
				JSONExams, credits, err := utilfunc.SetExamGrade(searchedStudent.TranscriptData.ExamsData, msg.ExamName, msg.Grade)
				if err != nil {
					return &types.MsgInsertExamGradeResponse{
						Status: -1,
					}, err
				}
				searchedStudent.TranscriptData.ExamsData = JSONExams
				searchedStudent.TranscriptData.AchievedCredits += uint32(credits)
				searchedStudent.TranscriptData.ExamsPassed += 1
				k.Keeper.SetStoredStudent(ctx, searchedStudent)
			}

		} else {
			return &types.MsgInsertExamGradeResponse{
				Status: -1,
			}, types.ErrStudentNotPresent
		}

	} else {
		return &types.MsgInsertExamGradeResponse{
			Status: -1,
		}, types.ErrUnauthorisedUser
	}

	return &types.MsgInsertExamGradeResponse{
		Status: 0,
	}, nil
}
