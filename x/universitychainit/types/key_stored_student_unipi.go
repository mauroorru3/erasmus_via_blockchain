package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// StoredStudentUnipiKeyPrefix is the prefix to retrieve all StoredStudentUnipi
	StoredStudentUnipiKeyPrefix = "StoredStudentUnipi/value/"
)

// StoredStudentUnipiKey returns the store key to retrieve a StoredStudentUnipi from the index fields
func StoredStudentUnipiKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
