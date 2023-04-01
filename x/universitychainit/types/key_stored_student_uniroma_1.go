package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// StoredStudentUniroma1KeyPrefix is the prefix to retrieve all StoredStudentUniroma1
	StoredStudentUniroma1KeyPrefix = "StoredStudentUniroma1/value/"
)

// StoredStudentUniroma1Key returns the store key to retrieve a StoredStudentUniroma1 from the index fields
func StoredStudentUniroma1Key(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
