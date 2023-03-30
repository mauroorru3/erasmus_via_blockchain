package keeper

import (
	"context"
	"fmt"
	"os"

	"university_chain_it/x/universitychainit/types"
	"university_chain_it/x/universitychainit/utilfunc"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) ConfigureChain(goCtx context.Context, msg *types.MsgConfigureChain) (*types.MsgConfigureChainResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	chainInfo, found := k.Keeper.GetChainInfo(ctx)
	if !found {
		panic("ChainInfo not found")
	}
	if !chainInfo.InitStatus {
		if msg.GetCreator() == chainInfo.ChainAdministratorKey {
			// set the flag to one in order to do the initialization just one time
			chainInfo.InitStatus = true
			k.Keeper.SetChainInfo(ctx, chainInfo)
			// get the universities name and key and insert these info into a map
			foreignUniversitiesList, err := utilfunc.ReadForeignUniversityInfo()
			if err != nil {
				return &types.MsgConfigureChainResponse{
					Status: -1,
				}, err
			}
			for i := 0; i < len(foreignUniversitiesList); i++ {

				foreignUniversity := types.ForeignUniversities{
					UniversityName:         foreignUniversitiesList[i].Name,
					ForeignUniversitiesKey: foreignUniversitiesList[i].Address,
				}
				err = foreignUniversity.Validate()
				if err != nil {
					return &types.MsgConfigureChainResponse{
						Status: -1,
					}, err
				} else {
					k.Keeper.SetForeignUniversities(ctx, foreignUniversity)
				}
			}

			universityInfoList, err := utilfunc.ReadUniversitiesInfo()
			if err != nil {
				return &types.MsgConfigureChainResponse{
					Status: -1,
				}, err
			}
			fmt.Println(universityInfoList[0])

			/*
				k.Keeper.SetUniversityDetails(ctx, types.UniversityDetails{
					UniversityName: "Unipi",
					ProfessorsInfo,
					UniversityData,
					StudentDetails:
				})
			*/

		} else {
			fmt.Fprintln(os.Stderr, "The key entered does not match the chain administrator's key.")
			return &types.MsgConfigureChainResponse{
				Status: -1,
			}, types.ErrKeyEnteredMismatchAdminChain
		}
	} else {
		fmt.Fprintln(os.Stderr, "The chain configuration has already been performed.")
		return &types.MsgConfigureChainResponse{
			Status: -1,
		}, types.ErrChainConfigurationAlreadyDone
	}

	return &types.MsgConfigureChainResponse{
		Status: 0,
	}, nil
}
