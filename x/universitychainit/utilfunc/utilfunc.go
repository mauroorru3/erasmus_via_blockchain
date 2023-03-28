package utilfunc

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
)

// UniversityKeys.json

const JSONuniversityInfo string = "UniversityKeys.json"

type UniversityKeys struct {
	Name    string `json:"name"`
	Country string `json:"country"`
	Address string `json:"address"`
}

type UniListKey struct {
	UniversityListKey []UniversityKeys `json:"universitiesList"`
}

//--------------------------------------------------
// examsList.json

const JSONFile string = "examsList.json"

type Exam struct {
	ExamName string `json:"examName"`
	Credits  uint   `json:"credits"`
	ExamType string `json:"examType"`
}

type Course struct {
	CourseOfStudy string `json:"courseOfStudy"`
	Exams         []Exam `json:"exams"`
}

type CourseList struct {
	Name    string   `json:"courseOfStudy"`
	Courses []Course `json:"courses"`
}

type University struct {
	Name           string       `json:"name"`
	CourseTypeList []CourseList `json:"courseTypeList"`
}

type UniList struct {
	UniversityList []University `json:"universitiesList"`
}

func ReadUniversityInfo() (universityInfo []UniversityKeys, err error) {

	// Open our jsonFile
	jsonFile, err := os.OpenFile(JSONuniversityInfo, os.O_RDONLY, 0444)
	// if we os.Open returns an error then handle it
	if err != nil {
		fmt.Println(err)
		return universityInfo, err
	}
	fmt.Println("Successfully Opened " + JSONuniversityInfo)
	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()

	byteValue, err := io.ReadAll(jsonFile)
	if err != nil {
		fmt.Println(err)
		return universityInfo, err
	}

	err = json.Unmarshal([]byte(byteValue), &universityInfo)
	fmt.Println("Successfully Unmarshalled " + JSONuniversityInfo)
	if err != nil {
		fmt.Println(err)
		return universityInfo, err
	}

	return universityInfo, err

}

func ReadCourseExams(NameUniversity string, courseType int, courseName string) (exams []Exam, err error) {

	// Open our jsonFile
	jsonFile, err := os.OpenFile(JSONFile, os.O_RDONLY, 0444)
	// if we os.Open returns an error then handle it
	if err != nil {
		fmt.Println(err)
		return exams, err
	}
	fmt.Println("Successfully Opened " + JSONFile)
	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()

	byteValue, err := io.ReadAll(jsonFile)
	if err != nil {
		fmt.Println(err)
		return exams, err
	}

	var uList UniList
	err = json.Unmarshal([]byte(byteValue), &uList)
	fmt.Println("Successfully Unmarshalled " + JSONFile)
	if err != nil {
		fmt.Println(err)
		return exams, err
	}

	i := 0
	found := false
	for i < len(uList.UniversityList) && !found {
		if uList.UniversityList[i].Name == NameUniversity {
			found = true
		} else {
			i++
		}
	}
	if !found {
		fmt.Printf("University %s not found", NameUniversity)
		return exams, err
	}

	j := 0
	found = false
	for j < len(uList.UniversityList[i].CourseTypeList[courseType].Courses) && !found {
		if uList.UniversityList[i].CourseTypeList[courseType].Courses[j].CourseOfStudy == courseName {
			found = true
		} else {
			j++
		}
	}
	if !found {
		fmt.Printf("Course %s not found", courseName)
		return exams, err
	}

	exams = uList.UniversityList[i].CourseTypeList[courseType].Courses[j].Exams

	err = nil
	return exams, err

}
