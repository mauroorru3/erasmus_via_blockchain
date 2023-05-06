package keeper

import (
	"context"
	"fmt"
	"university_chain_it/x/universitychainit/utilfunc"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) TerminateExpiredErasmusPeriods(goCtx context.Context) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	uniList := k.GetAllUniversityInfo(ctx)
	lenUniList := len(uniList)

	for i := 0; i < lenUniList; i++ {

		studentIndex := uniList[i].FifoHeadErasmus
		finish := false

		for !finish {
			// Finished moving along
			if studentIndex == "" {
				finish = true
			} else {
				storedStudent, found := k.GetStoredStudent(ctx, studentIndex)

				if !found {
					panic("Fifo head game not found " + uniList[i].FifoHeadErasmus)
				}
				deadline, err := utilfunc.GetErasmusDeadline(storedStudent)
				if err != nil {
					panic(err)
				}
				fmt.Println("****************")
				fmt.Println("deadline " + deadline.String())
				fmt.Println("blocktime " + ctx.BlockTime().Local().String())
				fmt.Println("blocktime " + ctx.BlockTime().String())
				fmt.Println("blocktime " + ctx.BlockTime().GoString())
				fmt.Println("****************")

				//loc, _ := time.LoadLocation("Europe/Rome")
				//currentTime := ctx.BlockTime()
				//if deadline.Before(currentTime.In(loc)) {
				if deadline.Before(ctx.BlockTime()) {

					fmt.Println("****************")
					fmt.Println("QUI 1")
					fmt.Println("****************")
					// Erasmus period is past deadline
					k.RemoveFromFifo(ctx, &storedStudent, &uniList[i])
					k.SetStoredStudent(ctx, storedStudent)
					// Move along FIFO
					studentIndex = uniList[i].FifoHeadErasmus
				} else {
					fmt.Println("****************")
					fmt.Println("QUI 2")
					fmt.Println("****************")
					finish = true
				}

			}
		}
		k.SetUniversityInfo(ctx, uniList[i])

	}

}
