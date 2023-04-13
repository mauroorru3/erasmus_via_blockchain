package keeper

import (
	"context"
	"fmt"
	"os"

	"university_chain_it/x/universitychainit/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InsertStudentResidenceInfo(goCtx context.Context, msg *types.MsgInsertStudentResidenceInfo) (*types.MsgInsertStudentResidenceInfoResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	chainInfo, found := k.Keeper.GetChainInfo(ctx)
	if !found {
		panic("ChainInfo not found")
	}
	if !chainInfo.InitStatus {
		fmt.Fprintln(os.Stderr, "The initial configuration of the chain has not yet been performed.")
		return &types.MsgInsertStudentResidenceInfoResponse{
			Status: -1,
		}, types.ErrChainConfigurationNotDone
	} else {

		searchedStudent, found := k.Keeper.GetStoredStudent(ctx, msg.GetUniversity()+"_"+msg.GetStudentIndex())

		if found {
			if searchedStudent.GetStudentData().GetStudentKey() == msg.Creator {
				searchedStudent.ResidenceData = &types.ResidenceInfo{
					Country:     msg.Country,
					Province:    msg.Province,
					Town:        msg.Town,
					PostCode:    msg.PostCode,
					Address:     msg.Address,
					HouseNumber: msg.HouseNumber,
					HomePhone:   msg.HomePhone,
				}
				err := searchedStudent.ResidenceData.Validate()
				if err != nil {
					return &types.MsgInsertStudentResidenceInfoResponse{
						Status: -1,
					}, err
				}

				k.Keeper.SetStoredStudent(ctx, searchedStudent)

				return &types.MsgInsertStudentResidenceInfoResponse{
					Status: 0,
				}, nil

			}

		}

		return &types.MsgInsertStudentResidenceInfoResponse{
			Status: -1,
		}, types.ErrStudentNotPresent

	}
}
