package keeper

import (
	"encoding/json"
	"fmt"
	"os"
	"time"
	"university_chain_it/x/universitychainit/types"
	"university_chain_it/x/universitychainit/utilfunc"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k *Keeper) CollectAndPayTaxes(ctx sdk.Context, student *types.StoredStudent, universityAddressString string) (err error) {

	universityAddress, err := sdk.AccAddressFromBech32(universityAddressString)
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error "+err.Error())
		return err
	}

	taxesDataBytes := []byte(student.TaxesData.TaxesHistory)
	var taxesData []utilfunc.TaxesStruct
	err = json.Unmarshal(taxesDataBytes, &taxesData)
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error "+err.Error())
		return err
	}

	if taxesData[0].Amount == 0 {
		return types.ErrNoTaxesToPay
	}
	if taxesData[0].Payment_made {
		return types.ErrTaxesAlreadyPayed
	}

	studentAddress, err := sdk.AccAddressFromBech32(student.StudentData.StudentKey)
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error "+err.Error())
		return err
	}

	valueInCoin := sdk.NewCoin(sdk.DefaultBondDenom, sdk.NewInt(int64(taxesData[0].Amount)))
	err = k.bank.SendCoinsFromAccountToModule(ctx, studentAddress, types.ModuleName, sdk.NewCoins(valueInCoin))
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error "+err.Error())
		return types.ErrStudentCannotPay
	}

	err = k.bank.SendCoinsFromModuleToAccount(ctx, types.ModuleName, universityAddress, sdk.NewCoins(valueInCoin))
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error "+err.Error())
		panic(fmt.Sprintf(types.ErrCannotPayTaxes.Error(), err.Error()))
	}

	currentTime := time.Now()
	taxesData[0].Date_of_payment = currentTime.Format("01-02-2006")
	taxesData[0].Payment_made = true

	resultByteJSON, err := json.Marshal(taxesData)
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error "+err.Error())
		return err
	}

	student.TaxesData.TaxesHistory = string(resultByteJSON)

	return err

}
