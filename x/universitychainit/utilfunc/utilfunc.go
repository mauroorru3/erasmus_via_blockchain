package utilfunc

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
)

// UniversityKeys.json

const foreignUniversityInfoJSON string = "UniversityKeys.json"

type UniversityKeys struct {
	Name    string `json:"name"`
	Country string `json:"country"`
	Address string `json:"address"`
}

type UniListKey struct {
	UniversityListKey []UniversityKeys `json:"universitiesList"`
}

//--------------------------------------------------
// university_info.json

const universityInfoJSON string = "university_info.json"

type Exam struct {
	ExamName         string `json:"examName"`
	Credits          uint   `json:"credits"`
	ExamType         string `json:"examType"`
	ProfessorName    string `json:"Name and Surname"`
	ProfessorAddress string `json:"Address"`
}

type Course struct {
	CourseOfStudy string `json:"courseOfStudy"`
	Exams         []Exam `json:"exams"`
}

type CourseList struct {
	Name    string   `json:"name"`
	Courses []Course `json:"courses"`
}

type CAI_struct struct {
	Department string `json:"department"`
	Name       string `json:"Name and Surname"`
	Address    string `json:"address"`
}

type DepartmentList struct {
	Name            string       `json:"name"`
	CAI             CAI_struct   `json:"CAI"`
	CoursesTypeList []CourseList `json:"courseTypeList"`
}

type University struct {
	Name             string           `json:"name"`
	Country          string           `json:"country"`
	Secretariat_key  string           `json:"secretariat_key"`
	University_key   string           `json:"university_key"`
	Deadline_taxes   string           `json:"deadline_taxes"`
	Deadline_erasmus string           `json:"deadline_erasmus"`
	DepartmentList   []DepartmentList `json:"departmentList"`
}

type UniList struct {
	UniversityList []University `json:"universitiesList"`
}

func ReadForeignUniversityInfo() (universityInfo []UniversityKeys, err error) {

	// Open our jsonFile
	jsonFile, err := os.OpenFile("data/"+foreignUniversityInfoJSON, os.O_RDONLY, 0444)
	// if we os.Open returns an error then handle it
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error "+err.Error())
		return universityInfo, err
	}
	fmt.Println("Successfully Opened " + foreignUniversityInfoJSON)
	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()

	byteValue, err := io.ReadAll(jsonFile)
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error "+err.Error())
		return universityInfo, err
	}

	var uniK UniListKey

	err = json.Unmarshal([]byte(byteValue), &uniK)
	fmt.Println("Successfully Unmarshalled " + foreignUniversityInfoJSON)
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error "+err.Error())
		return universityInfo, err
	}

	universityInfo = uniK.UniversityListKey

	return universityInfo, err

}

func ReadCourseExams(NameUniversity string, departmentName string, courseType int, courseName string) (exams []Exam, err error) {

	// Open our jsonFile
	jsonFile, err := os.OpenFile("data/"+universityInfoJSON, os.O_RDONLY, 0444)
	// if we os.Open returns an error then handle it
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error "+err.Error())
		return exams, err
	}
	fmt.Println("Successfully Opened " + universityInfoJSON)
	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()

	byteValue, err := io.ReadAll(jsonFile)
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error "+err.Error())
		return exams, err
	}

	var uList UniList
	err = json.Unmarshal([]byte(byteValue), &uList)
	fmt.Println("Successfully Unmarshalled " + universityInfoJSON)
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error "+err.Error())
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
	for i < len(uList.UniversityList[i].DepartmentList) && !found {
		if uList.UniversityList[i].DepartmentList[j].Name == departmentName {
			found = true
		} else {
			j++
		}
	}
	k := 0
	found = false
	for j < len(uList.UniversityList[i].DepartmentList[j].CoursesTypeList[courseType].Courses) && !found {
		if uList.UniversityList[i].DepartmentList[j].CoursesTypeList[courseType].Courses[k].CourseOfStudy == courseName {
			found = true
		} else {
			k++
		}
	}
	if !found {
		fmt.Fprintln(os.Stderr, "Course "+courseName+" not found")
		return exams, err
	}

	exams = uList.UniversityList[i].DepartmentList[j].CoursesTypeList[courseType].Courses[k].Exams

	err = nil
	return exams, err

}

func ReadUniversitiesInfo() (universitiesInfo []University, err error) {

	// Open our jsonFile
	jsonFile, err := os.OpenFile("data/"+universityInfoJSON, os.O_RDONLY, 0444)
	// if we os.Open returns an error then handle it
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error "+err.Error())
		return universitiesInfo, err
	}
	fmt.Println("Successfully Opened " + universityInfoJSON)
	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()

	byteValue, err := io.ReadAll(jsonFile)
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error "+err.Error())
		return universitiesInfo, err
	}

	var uList UniList

	err = json.Unmarshal([]byte(byteValue), &uList)
	fmt.Println("Successfully Unmarshalled " + universityInfoJSON)
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error "+err.Error())
		return universitiesInfo, err
	}

	universitiesInfo = uList.UniversityList

	return universitiesInfo, err

}
