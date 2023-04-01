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
			i := 0
			for i = 0; i < len(foreignUniversitiesList); i++ {

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

			for i = 0; i < len(universityInfoList); i++ {

				switch universityInfoList[i].Name {
				case "unipi":
					k.Keeper.SetUniversityInfo(ctx, types.UniversityInfo{
						UniversityName:  "unipi",
						NextStudentId:   1,
						SecretariatKey:  universityInfoList[i].Secretariat_key,
						UniversityKey:   universityInfoList[i].University_key,
						CaiKey:          "",
						FifoHeadErasmus: "-1",
						FifoTailErasmus: "-1",
						DeadlineTaxes:   universityInfoList[i].Deadline_taxes,
						DeadlineErasmus: universityInfoList[i].Deadline_erasmus,
					})

					j := 0

					for j = 0; j < len(universityInfoList[i].DepartmentList); j++ {
						q := 0
						for q = 0; q < len(universityInfoList[i].DepartmentList[j].CoursesTypeList); q++ {
							w := 0
							for w = 0; w < len(universityInfoList[i].DepartmentList[j].CoursesTypeList[q].Courses); w++ {
								z := 0
								for z = 0; z < len(universityInfoList[i].DepartmentList[j].CoursesTypeList[q].Courses[w].Exams); z++ {

									/*
										data := map[string]interface{}{
											"intValue":    1234,
											"boolValue":   true,
											"stringValue": "hello!",
											"objectValue": map[string]interface{}{
												"arrayValue": []int{1, 2, 3, 4},
											},
										}

										test_json, _ := json.Marshal(data)

										test_ass := string(test_json)

									*/

									k.Keeper.SetProfessorsExams(ctx, types.ProfessorsExams{
										ExamName:      universityInfoList[i].Name + "_" + universityInfoList[i].DepartmentList[j].CoursesTypeList[q].Courses[w].Exams[z].ExamName,
										ProfessorName: universityInfoList[i].DepartmentList[j].CoursesTypeList[q].Courses[w].Exams[z].ProfessorName,
										ProfessorId:   "",
										ProfessorKey:  universityInfoList[i].DepartmentList[j].CoursesTypeList[q].Courses[w].Exams[z].ProfessorAddress,
									})
								}

							}

						}

					}

				case "uniroma1":
					k.Keeper.SetUniversityInfo(ctx, types.UniversityInfo{
						UniversityName:  "uniroma1",
						NextStudentId:   1,
						SecretariatKey:  universityInfoList[i].Secretariat_key,
						UniversityKey:   universityInfoList[i].University_key,
						CaiKey:          "",
						FifoHeadErasmus: "-1",
						FifoTailErasmus: "-1",
						DeadlineTaxes:   universityInfoList[i].Deadline_taxes,
						DeadlineErasmus: universityInfoList[i].Deadline_erasmus,
					})

					j := 0

					for j = 0; j < len(universityInfoList[i].DepartmentList); j++ {
						q := 0
						for q = 0; q < len(universityInfoList[i].DepartmentList[j].CoursesTypeList); q++ {
							w := 0
							for w = 0; w < len(universityInfoList[i].DepartmentList[j].CoursesTypeList[q].Courses); w++ {
								z := 0
								for z = 0; z < len(universityInfoList[i].DepartmentList[j].CoursesTypeList[q].Courses[w].Exams); z++ {

									k.Keeper.SetProfessorsExams(ctx, types.ProfessorsExams{
										ExamName:      universityInfoList[i].Name + "_" + universityInfoList[i].DepartmentList[j].CoursesTypeList[q].Courses[w].Exams[z].ExamName,
										ProfessorName: universityInfoList[i].DepartmentList[j].CoursesTypeList[q].Courses[w].Exams[z].ProfessorName,
										ProfessorId:   "",
										ProfessorKey:  universityInfoList[i].DepartmentList[j].CoursesTypeList[q].Courses[w].Exams[z].ProfessorAddress,
									})
								}

							}

						}

					}

				}

			}

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
