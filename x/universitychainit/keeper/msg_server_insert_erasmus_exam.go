package keeper

import (
	"context"

	"university_chain_it/x/universitychainit/types"
	"university_chain_it/x/universitychainit/utilfunc"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InsertErasmusExam(goCtx context.Context, msg *types.MsgInsertErasmusExam) (*types.MsgInsertErasmusExamResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	chainInfo, found := k.Keeper.GetChainInfo(ctx)
	if !found {
		panic("ChainInfo not found")
	}
	if !chainInfo.InitStatus {
		return &types.MsgInsertErasmusExamResponse{
			Status: -1,
		}, types.ErrChainConfigurationNotDone
	} else {
		searchedStudent, found := k.Keeper.GetStoredStudent(ctx, msg.GetUniversity()+"_"+msg.GetStudentIndex())

		if !found {
			return &types.MsgInsertErasmusExamResponse{
				Status: -1,
			}, types.ErrStudentNotPresent
		} else {
			if searchedStudent.GetStudentData().GetStudentKey() != msg.Creator {
				return &types.MsgInsertErasmusExamResponse{
					Status: -1,
				}, types.ErrKeyEnteredMismatchStudent
			} else {

				err := utilfunc.CheckCompleteInformation(searchedStudent)

				if err != nil {
					return &types.MsgInsertErasmusExamResponse{
						Status: -1,
					}, types.ErrIncompleteStudentInformation
				} else {

					ok, err := utilfunc.CheckTaxPayment(searchedStudent)

					if err != nil {
						return &types.MsgInsertErasmusExamResponse{
							Status: -1,
						}, err
					} else {
						if !ok {
							return &types.MsgInsertErasmusExamResponse{
								Status: -1,
							}, types.ErrUnpaidTaxes
						} else {

							res, err := utilfunc.CheckErasmusStatus(searchedStudent)
							if err != nil {
								return &types.MsgInsertErasmusExamResponse{
									Status: -1,
								}, err
							}
							if res == "" {
								return &types.MsgInsertErasmusExamResponse{
									Status: -1,
								}, types.ErrNoErasmusRequest
							} else if res == "in progress" {
								return &types.MsgInsertErasmusExamResponse{
									Status: -1,
								}, types.ErrPreviousRequestInProgress
							} else if res == "terminated" {
								return &types.MsgInsertErasmusExamResponse{
									Status: -1,
								}, types.ErrPreviousRequestCompleted
							} else {

								uni, found := k.Keeper.GetUniversityInfo(ctx, msg.University)
								if !found {
									return &types.MsgInsertErasmusExamResponse{
										Status: -1,
									}, types.ErrWrongNameUniversity
								}
								err := utilfunc.InsertErasmusExam(&searchedStudent, msg.ExamName, uni.MaxErasmusExams)
								if err != nil {
									return &types.MsgInsertErasmusExamResponse{
										Status: -1,
									}, err
								} else {
									k.Keeper.SetStoredStudent(ctx, searchedStudent)
								}
							}

						}
					}
				}
			}
		}
	}

	return &types.MsgInsertErasmusExamResponse{
		Status: 0,
	}, nil
}
