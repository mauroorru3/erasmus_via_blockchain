package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ProfessorsExamsUnipiKeyPrefix is the prefix to retrieve all ProfessorsExamsUnipi
	ProfessorsExamsUnipiKeyPrefix = "ProfessorsExamsUnipi/value/"
)

// ProfessorsExamsUnipiKey returns the store key to retrieve a ProfessorsExamsUnipi from the index fields
func ProfessorsExamsUnipiKey(
	examName string,
) []byte {
	var key []byte

	examNameBytes := []byte(examName)
	key = append(key, examNameBytes...)
	key = append(key, []byte("/")...)

	return key
}
