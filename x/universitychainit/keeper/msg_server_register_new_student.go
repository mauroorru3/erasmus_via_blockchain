package keeper

import (
	"context"
	"fmt"
	"os"
	"strconv"
	"university_chain_it/x/universitychainit/types"
	"university_chain_it/x/universitychainit/utilfunc"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) RegisterNewStudent(goCtx context.Context, msg *types.MsgRegisterNewStudent) (*types.MsgRegisterNewStudentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	chainInfo, found := k.Keeper.GetChainInfo(ctx)
	if !found {
		panic("ChainInfo not found")
	}
	if !chainInfo.InitStatus {
		fmt.Fprintln(os.Stderr, "The initial configuration of the chain has not yet been performed.")
		return &types.MsgRegisterNewStudentResponse{
			StudentIndex: "-1",
		}, types.ErrChainConfigurationNotDone
	} else {

		allStudents := k.Keeper.GetAllStoredStudent(ctx)
		found = false
		i := 0
		for i < len(allStudents) && !found {
			if allStudents[i].StudentData.Name == msg.Name &&
				allStudents[i].StudentData.Surname == msg.Surname &&
				allStudents[i].StudentData.CourseOfStudy == msg.CourseOfStudy &&
				allStudents[i].StudentData.CourseType == msg.CourseType &&
				allStudents[i].StudentData.StudentKey == msg.Creator {
				found = true
			} else {
				i++
			}
		}

		if !found {
			returnIndexStudent := ""

			switch msg.University {
			case "unipi":
				unipiInfo, _ := k.Keeper.GetUniversityInfo(ctx, msg.University)
				newStudentInfo := types.StudentInfo{
					Name:                     msg.Name,
					Surname:                  msg.Surname,
					CourseType:               msg.CourseType,
					CourseOfStudy:            msg.CourseOfStudy,
					Status:                   "Active",
					CurrentYearOfStudy:       1,
					OutOfCourse:              false,
					NumberOfYearsOutOfCourse: 0,
					StudentKey:               msg.Creator,
				}
				err := newStudentInfo.Validate()
				if err != nil {
					return &types.MsgRegisterNewStudentResponse{
						StudentIndex: "-1",
					}, err
				}
				examData, numExams, err := utilfunc.GetJSONFromCourseExams(msg.University, msg.DepartmentName, msg.CourseType, msg.CourseOfStudy)
				if err != nil {
					return &types.MsgRegisterNewStudentResponse{
						StudentIndex: "-1",
					}, err
				}

				taxesData, err := utilfunc.IntializeTaxesStruct(20000, unipiInfo.TaxesBrackets)
				if err != nil {
					return &types.MsgRegisterNewStudentResponse{
						StudentIndex: "-1",
					}, err
				}
				tot_credits := -1
				switch msg.CourseType {
				case "master":
					tot_credits = 120
				case "bachelor":
					tot_credits = 180
				case "single cycle":
					tot_credits = 300
				}
				newStoredStudent := types.StoredStudent{
					Index:       msg.University + "_" + strconv.FormatUint(uint64(unipiInfo.NextStudentId), 10),
					StudentData: &newStudentInfo,
					TranscriptData: &types.TranscriptOfRecords{
						ExamsData:       examData,
						TotalExams:      uint32(numExams),
						ExamsPassed:     0,
						TotalCredits:    uint32(tot_credits),
						AchievedCredits: 0,
					},
					PersonalData:  &types.PersonalInfo{},
					ResidenceData: &types.ResidenceInfo{},
					ContactData:   &types.ContactInfo{},
					TaxesData: &types.TaxesInfo{
						Status:       false,
						TotalAmount:  0,
						TaxesHistory: taxesData,
					},
					ErasmusData: &types.ErasmusInfo{
						ErasmusStudent:      "No",
						NumberTimes:         0,
						NumberMonths:        0,
						TotalExams:          0,
						ExamsPassed:         0,
						TotalCredits:        0,
						AchievedCredits:     0,
						Career:              "",
						PreviousStudentFifo: "-1",
						NextStudentFifo:     "-1",
					},
				}
				returnIndexStudent = strconv.FormatUint(uint64(unipiInfo.NextStudentId), 10)
				unipiInfo.NextStudentId++
				k.Keeper.SetUniversityInfo(ctx, unipiInfo)
				k.Keeper.SetStoredStudent(ctx, newStoredStudent)
			case "uniroma1":
				uniroma1Info, _ := k.Keeper.GetUniversityInfo(ctx, msg.University)
				newStudentInfo := types.StudentInfo{
					Name:                     msg.Name,
					Surname:                  msg.Surname,
					CourseType:               msg.CourseType,
					CourseOfStudy:            msg.CourseOfStudy,
					Status:                   "Active",
					CurrentYearOfStudy:       1,
					OutOfCourse:              false,
					NumberOfYearsOutOfCourse: 0,
					StudentKey:               msg.Creator,
				}
				err := newStudentInfo.Validate()
				if err != nil {
					return &types.MsgRegisterNewStudentResponse{
						StudentIndex: "-1",
					}, err
				}
				examData, numExams, err := utilfunc.GetJSONFromCourseExams(msg.University, msg.DepartmentName, msg.CourseType, msg.CourseOfStudy)
				if err != nil {
					return &types.MsgRegisterNewStudentResponse{
						StudentIndex: "-1",
					}, err
				}
				tot_credits := -1
				switch msg.CourseType {
				case "master":
					tot_credits = 120
				case "bachelor":
					tot_credits = 180
				case "single cycle":
					tot_credits = 300
				}
				newStoredStudent := types.StoredStudent{
					Index:       msg.University + "_" + strconv.FormatUint(uint64(uniroma1Info.NextStudentId), 10),
					StudentData: &newStudentInfo,
					TranscriptData: &types.TranscriptOfRecords{
						ExamsData:       examData,
						TotalExams:      uint32(numExams),
						ExamsPassed:     0,
						TotalCredits:    uint32(tot_credits),
						AchievedCredits: 0,
					},
					PersonalData:  &types.PersonalInfo{},
					ResidenceData: &types.ResidenceInfo{},
					ContactData:   &types.ContactInfo{},
					TaxesData: &types.TaxesInfo{
						Status:       false,
						TotalAmount:  0,
						TaxesHistory: "",
					},
					ErasmusData: &types.ErasmusInfo{
						ErasmusStudent:      "No",
						NumberTimes:         0,
						NumberMonths:        0,
						TotalExams:          0,
						ExamsPassed:         0,
						TotalCredits:        0,
						AchievedCredits:     0,
						Career:              "",
						PreviousStudentFifo: "-1",
						NextStudentFifo:     "-1",
					},
				}
				returnIndexStudent = strconv.FormatUint(uint64(uniroma1Info.NextStudentId), 10)
				uniroma1Info.NextStudentId++
				k.Keeper.SetUniversityInfo(ctx, uniroma1Info)
				k.Keeper.SetStoredStudent(ctx, newStoredStudent)
			default:
				return &types.MsgRegisterNewStudentResponse{
					StudentIndex: "-1",
				}, types.ErrWrongNameUniversity
			}
			return &types.MsgRegisterNewStudentResponse{
				StudentIndex: returnIndexStudent,
			}, nil

		} else {
			return &types.MsgRegisterNewStudentResponse{
				StudentIndex: "-1",
			}, types.ErrStudentAlreadyPresent
		}

	}

}
