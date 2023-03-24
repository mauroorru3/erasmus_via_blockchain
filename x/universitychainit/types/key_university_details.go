package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// UniversityDetailsKeyPrefix is the prefix to retrieve all UniversityDetails
	UniversityDetailsKeyPrefix = "UniversityDetails/value/"
)

// UniversityDetailsKey returns the store key to retrieve a UniversityDetails from the index fields
func UniversityDetailsKey(
	universityName string,
) []byte {
	var key []byte

	universityNameBytes := []byte(universityName)
	key = append(key, universityNameBytes...)
	key = append(key, []byte("/")...)

	return key
}
