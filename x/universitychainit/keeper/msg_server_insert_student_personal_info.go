package keeper

import (
	"context"
	"fmt"
	"os"

	"university_chain_it/x/universitychainit/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InsertStudentPersonalInfo(goCtx context.Context, msg *types.MsgInsertStudentPersonalInfo) (*types.MsgInsertStudentPersonalInfoResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	chainInfo, found := k.Keeper.GetChainInfo(ctx)
	if !found {
		panic("ChainInfo not found")
	}
	if !chainInfo.InitStatus {
		fmt.Fprintln(os.Stderr, "The initial configuration of the chain has not yet been performed.")
		return &types.MsgInsertStudentPersonalInfoResponse{
			Status: -1,
		}, types.ErrChainConfigurationNotDone
	} else {

		searchedStudent, found := k.Keeper.GetStoredStudent(ctx, msg.GetUniversity()+"_"+msg.GetStudentIndex())

		if found {
			if searchedStudent.GetStudentData().GetStudentKey() == msg.Creator {
				searchedStudent.PersonalData = &types.PersonalInfo{
					Gender:             msg.Gender,
					DateOfBirth:        msg.DateOfBirth,
					PrimaryNationality: msg.PrimaryNationality,
					CountryOfBirth:     msg.CountryOfBirth,
					ProvinceOfBirth:    msg.ProvinceOfBirth,
					TownOfBirth:        msg.TownOfBirth,
					TaxCode:            msg.TaxCode,
				}
				err := searchedStudent.PersonalData.Validate()
				if err != nil {
					return &types.MsgInsertStudentPersonalInfoResponse{
						Status: -1,
					}, err
				}

				k.Keeper.SetStoredStudent(ctx, searchedStudent)

				return &types.MsgInsertStudentPersonalInfoResponse{
					Status: 0,
				}, nil

			}

		}

		return &types.MsgInsertStudentPersonalInfoResponse{
			Status: -1,
		}, types.ErrStudentNotPresent

	}
}
