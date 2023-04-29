package keeper

import (
	"context"

	"university_chain_it/x/universitychainit/types"
	"university_chain_it/x/universitychainit/utilfunc"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InsertErasmusRequest(goCtx context.Context, msg *types.MsgInsertErasmusRequest) (*types.MsgInsertErasmusRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	chainInfo, found := k.Keeper.GetChainInfo(ctx)
	if !found {
		panic("ChainInfo not found")
	}
	if !chainInfo.InitStatus {
		return &types.MsgInsertErasmusRequestResponse{
			Status: -1,
		}, types.ErrChainConfigurationNotDone
	} else {
		searchedStudent, found := k.Keeper.GetStoredStudent(ctx, msg.GetUniversity()+"_"+msg.GetStudentIndex())

		if !found {
			return &types.MsgInsertErasmusRequestResponse{
				Status: -1,
			}, types.ErrStudentNotPresent
		} else {
			if searchedStudent.GetStudentData().GetStudentKey() != msg.Creator {
				return &types.MsgInsertErasmusRequestResponse{
					Status: -1,
				}, types.ErrKeyEnteredMismatchStudent
			} else {

				err := utilfunc.CheckCompleteInformation(searchedStudent)

				if err != nil {
					return &types.MsgInsertErasmusRequestResponse{
						Status: -1,
					}, types.ErrIncompleteStudentInformation
				} else {

					ok, err := utilfunc.CheckTaxPayment(searchedStudent)

					if err != nil {
						return &types.MsgInsertErasmusRequestResponse{
							Status: -1,
						}, err
					} else {
						if !ok {
							return &types.MsgInsertErasmusRequestResponse{
								Status: -1,
							}, types.ErrUnpaidTaxes
						} else {

							foreignUni, found := k.Keeper.GetForeignUniversities(ctx, msg.ForeignUniversityName)
							if !found {
								return &types.MsgInsertErasmusRequestResponse{
									Status: -1,
								}, types.ErrWrongForeignUniversity
							} else {

								err = utilfunc.CheckErasmusParams(msg.DurationInMonths, msg.ErasmusType, &searchedStudent, msg.ForeignUniversityName, foreignUni.ForeignUniversitiesCountry)
								if err != nil {
									return &types.MsgInsertErasmusRequestResponse{
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

	return &types.MsgInsertErasmusRequestResponse{
		Status: 0,
	}, nil
}
