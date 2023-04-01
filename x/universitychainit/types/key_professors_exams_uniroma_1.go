package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ProfessorsExamsUniroma1KeyPrefix is the prefix to retrieve all ProfessorsExamsUniroma1
	ProfessorsExamsUniroma1KeyPrefix = "ProfessorsExamsUniroma1/value/"
)

// ProfessorsExamsUniroma1Key returns the store key to retrieve a ProfessorsExamsUniroma1 from the index fields
func ProfessorsExamsUniroma1Key(
	examName string,
) []byte {
	var key []byte

	examNameBytes := []byte(examName)
	key = append(key, examNameBytes...)
	key = append(key, []byte("/")...)

	return key
}
