package utilfunc

import (
	"encoding/json"
	"fmt"
	"os"
)

type ErasmusContributionStruct struct {
	Amount          uint32 `json:"amount"`
	Income_bracket  uint32 `json:"income_bracket"`
	Payment_made    bool   `json:"payment_made"`
	Date_of_payment string `json:"date_of_payment"`
}

type ErasmusExamsStruct struct {
	Exam_label         string `json:"exam_label"`
	Exam_date          string `json:"exam_date"`
	Credits            uint8  `json:"credits"`
	Marks              uint8  `json:"marks"`
	Course_year        uint16 `json:"course_year"`
	Status             bool   `json:"status"`
	Attendance_year    uint16 `json:"attendance_year"`
	Exam_type          string `json:"exam_type"`
	Course_of_study    string `json:"course_of_study"`
	Home_university_id string `json:"home_university_id"`
}

type ErasmusCareerStruct struct {
	Duration_in_months            uint8                     `json:"duration_in_months"`
	Start_date                    string                    `json:"start_date"`
	End_date                      string                    `json:"end_date"`
	Erasmus_type                  string                    `json:"erasmus_type"`
	Total_credits                 uint8                     `json:"total_credits"`
	Achieved_credits              uint8                     `json:"achieved_credits"`
	Total_exams                   uint8                     `json:"total_exams"`
	Exams_passed                  uint8                     `json:"exams_passed"`
	Foreign_university_name       string                    `json:"foreign_university_name"`
	Foreign_university_country    string                    `json:"foreign_university_country"`
	Foreign_university_student_id string                    `json:"foreign_university_student_id"`
	Status                        string                    `json:"status"`
	Contribution                  ErasmusContributionStruct `json:"contribution"`
	Exams_data                    string                    `json:"exams_data"`
}

func IntializeErasmusStruct(incomeBracket uint32) (erasmusJSON string, err error) {

	erasmusInfo := ErasmusCareerStruct{
		Duration_in_months:            0,
		Start_date:                    "",
		End_date:                      "",
		Erasmus_type:                  "",
		Total_credits:                 0,
		Achieved_credits:              0,
		Total_exams:                   0,
		Exams_passed:                  0,
		Foreign_university_name:       "",
		Foreign_university_country:    "",
		Foreign_university_student_id: "",
		Status:                        "",
		Contribution: ErasmusContributionStruct{
			Amount:          0,
			Income_bracket:  incomeBracket,
			Payment_made:    false,
			Date_of_payment: "",
		},
		Exams_data: "",
	}

	var erasmusCareer []ErasmusCareerStruct
	erasmusCareer = append(erasmusCareer, erasmusInfo)

	resultByteJSON, err := json.Marshal(erasmusCareer)
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error "+err.Error())
		return erasmusJSON, err
	}

	erasmusJSON = string(resultByteJSON)

	return erasmusJSON, err

}
