// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: universitychainit/genesis.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// GenesisState defines the universitychainit module's genesis state.
type GenesisState struct {
	Params                  Params                `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
	PortId                  string                `protobuf:"bytes,2,opt,name=port_id,json=portId,proto3" json:"port_id,omitempty"`
	ProfessorsExamsList     []ProfessorsExams     `protobuf:"bytes,3,rep,name=professorsExamsList,proto3" json:"professorsExamsList"`
	StudentInfo             *StudentInfo          `protobuf:"bytes,4,opt,name=studentInfo,proto3" json:"studentInfo,omitempty"`
	TranscriptOfRecords     *TranscriptOfRecords  `protobuf:"bytes,5,opt,name=transcriptOfRecords,proto3" json:"transcriptOfRecords,omitempty"`
	PersonalInfo            *PersonalInfo         `protobuf:"bytes,6,opt,name=personalInfo,proto3" json:"personalInfo,omitempty"`
	ResidenceInfo           *ResidenceInfo        `protobuf:"bytes,7,opt,name=residenceInfo,proto3" json:"residenceInfo,omitempty"`
	ContactInfo             *ContactInfo          `protobuf:"bytes,8,opt,name=contactInfo,proto3" json:"contactInfo,omitempty"`
	TaxesInfo               *TaxesInfo            `protobuf:"bytes,9,opt,name=taxesInfo,proto3" json:"taxesInfo,omitempty"`
	ErasmusInfo             *ErasmusInfo          `protobuf:"bytes,10,opt,name=erasmusInfo,proto3" json:"erasmusInfo,omitempty"`
	StoredStudentList       []StoredStudent       `protobuf:"bytes,11,rep,name=storedStudentList,proto3" json:"storedStudentList"`
	UniversityInfo          *UniversityInfo       `protobuf:"bytes,12,opt,name=universityInfo,proto3" json:"universityInfo,omitempty"`
	ChainInfo               ChainInfo             `protobuf:"bytes,13,opt,name=chainInfo,proto3" json:"chainInfo"`
	ForeignUniversitiesList []ForeignUniversities `protobuf:"bytes,14,rep,name=foreignUniversitiesList,proto3" json:"foreignUniversitiesList"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_249e485a20113873, []int{0}
}
func (m *GenesisState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenesisState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenesisState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenesisState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenesisState.Merge(m, src)
}
func (m *GenesisState) XXX_Size() int {
	return m.Size()
}
func (m *GenesisState) XXX_DiscardUnknown() {
	xxx_messageInfo_GenesisState.DiscardUnknown(m)
}

var xxx_messageInfo_GenesisState proto.InternalMessageInfo

func (m *GenesisState) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

func (m *GenesisState) GetPortId() string {
	if m != nil {
		return m.PortId
	}
	return ""
}

func (m *GenesisState) GetProfessorsExamsList() []ProfessorsExams {
	if m != nil {
		return m.ProfessorsExamsList
	}
	return nil
}

func (m *GenesisState) GetStudentInfo() *StudentInfo {
	if m != nil {
		return m.StudentInfo
	}
	return nil
}

func (m *GenesisState) GetTranscriptOfRecords() *TranscriptOfRecords {
	if m != nil {
		return m.TranscriptOfRecords
	}
	return nil
}

func (m *GenesisState) GetPersonalInfo() *PersonalInfo {
	if m != nil {
		return m.PersonalInfo
	}
	return nil
}

func (m *GenesisState) GetResidenceInfo() *ResidenceInfo {
	if m != nil {
		return m.ResidenceInfo
	}
	return nil
}

func (m *GenesisState) GetContactInfo() *ContactInfo {
	if m != nil {
		return m.ContactInfo
	}
	return nil
}

func (m *GenesisState) GetTaxesInfo() *TaxesInfo {
	if m != nil {
		return m.TaxesInfo
	}
	return nil
}

func (m *GenesisState) GetErasmusInfo() *ErasmusInfo {
	if m != nil {
		return m.ErasmusInfo
	}
	return nil
}

func (m *GenesisState) GetStoredStudentList() []StoredStudent {
	if m != nil {
		return m.StoredStudentList
	}
	return nil
}

func (m *GenesisState) GetUniversityInfo() *UniversityInfo {
	if m != nil {
		return m.UniversityInfo
	}
	return nil
}

func (m *GenesisState) GetChainInfo() ChainInfo {
	if m != nil {
		return m.ChainInfo
	}
	return ChainInfo{}
}

func (m *GenesisState) GetForeignUniversitiesList() []ForeignUniversities {
	if m != nil {
		return m.ForeignUniversitiesList
	}
	return nil
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "university_chain_it.universitychainit.GenesisState")
}

func init() { proto.RegisterFile("universitychainit/genesis.proto", fileDescriptor_249e485a20113873) }

var fileDescriptor_249e485a20113873 = []byte{
	// 602 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x95, 0xd1, 0x6e, 0xd3, 0x3e,
	0x14, 0xc6, 0x9b, 0xff, 0xf6, 0xef, 0xa8, 0xdb, 0x4d, 0xc2, 0x43, 0x5a, 0xd5, 0x8b, 0xac, 0x9a,
	0x18, 0xf4, 0x82, 0xb6, 0xa8, 0x1b, 0x5c, 0x70, 0xb9, 0x69, 0x4c, 0x13, 0x08, 0x90, 0xd7, 0x09,
	0x69, 0x12, 0x8a, 0x42, 0xe2, 0x74, 0x96, 0x36, 0xbb, 0xb2, 0x5d, 0xd4, 0xf1, 0x14, 0x3c, 0xd6,
	0x2e, 0x77, 0xc9, 0x15, 0x42, 0xed, 0x2b, 0xf0, 0x00, 0xa8, 0xa7, 0xee, 0x9c, 0x90, 0xc0, 0xdc,
	0xbb, 0x56, 0xf9, 0xbe, 0xdf, 0x39, 0x3e, 0xf9, 0x8e, 0x83, 0xb6, 0x47, 0x9c, 0x7d, 0xa1, 0x52,
	0x31, 0x7d, 0x1d, 0x5d, 0x84, 0x8c, 0x33, 0xdd, 0x1d, 0x50, 0x4e, 0x15, 0x53, 0x9d, 0xa1, 0x14,
	0x5a, 0xe0, 0x5d, 0x2b, 0x08, 0x40, 0x11, 0x30, 0xdd, 0xc9, 0x99, 0x1a, 0x8f, 0x06, 0x62, 0x20,
	0xc0, 0xd1, 0x9d, 0xfd, 0x9a, 0x9b, 0x1b, 0x7e, 0x9e, 0x3e, 0x0c, 0x65, 0x78, 0x65, 0xe0, 0x8d,
	0x56, 0xc1, 0x73, 0x29, 0x12, 0xaa, 0x94, 0x90, 0x2a, 0xa0, 0x63, 0xab, 0x7c, 0x9c, 0x57, 0x2a,
	0x3d, 0x8a, 0x29, 0xd7, 0x01, 0xe3, 0xc9, 0xa2, 0x5e, 0x3b, 0xaf, 0xd2, 0x32, 0xe4, 0x2a, 0x92,
	0x6c, 0xa8, 0x03, 0x91, 0x04, 0x92, 0x46, 0x42, 0xc6, 0x0b, 0xe8, 0x6e, 0x41, 0x79, 0x2a, 0x95,
	0xe0, 0xe1, 0x65, 0x9a, 0xfa, 0x24, 0x2f, 0x93, 0x54, 0xb1, 0x98, 0xf2, 0x88, 0xa6, 0x75, 0x05,
	0x3d, 0x46, 0x82, 0xeb, 0x30, 0xca, 0xf4, 0xb8, 0x53, 0xd0, 0x63, 0x38, 0xa6, 0xea, 0x1e, 0x12,
	0x95, 0xa1, 0xba, 0x1a, 0xa9, 0x7b, 0xfa, 0x52, 0x5a, 0x48, 0x1a, 0x07, 0x66, 0x34, 0x46, 0xf7,
	0x34, 0xaf, 0x4b, 0xbd, 0xd4, 0x7f, 0xb7, 0x66, 0x5e, 0xb9, 0xd5, 0x3c, 0xcb, 0x6b, 0x12, 0x21,
	0x29, 0x1b, 0xf0, 0xe0, 0xee, 0x09, 0xa3, 0x66, 0xc2, 0x3b, 0xbf, 0x2a, 0xa8, 0x76, 0x3c, 0xcf,
	0xd3, 0xa9, 0x0e, 0x35, 0xc5, 0x6f, 0x50, 0x79, 0x9e, 0x80, 0xba, 0xd7, 0xf4, 0x5a, 0xd5, 0x5e,
	0xbb, 0xe3, 0x94, 0xaf, 0xce, 0x07, 0x30, 0x1d, 0xac, 0xde, 0xfc, 0xd8, 0x2e, 0x11, 0x83, 0xc0,
	0x5b, 0x68, 0x6d, 0x28, 0xa4, 0x0e, 0x58, 0x5c, 0xff, 0xaf, 0xe9, 0xb5, 0x2a, 0xa4, 0x3c, 0xfb,
	0x7b, 0x12, 0x63, 0x8e, 0x36, 0x6d, 0x8e, 0x8e, 0x66, 0x31, 0x7a, 0xcb, 0x94, 0xae, 0xaf, 0x34,
	0x57, 0x5a, 0xd5, 0xde, 0x4b, 0xd7, 0x92, 0x59, 0x82, 0xa9, 0x5d, 0x04, 0xc6, 0x7d, 0x54, 0x35,
	0x23, 0x3f, 0xe1, 0x89, 0xa8, 0xaf, 0xc2, 0xd1, 0x7a, 0x8e, 0x75, 0x4e, 0xad, 0x93, 0xa4, 0x31,
	0xf8, 0x12, 0x6d, 0xda, 0xf4, 0xbe, 0x4f, 0xc8, 0x3c, 0xbb, 0xf5, 0xff, 0x81, 0xfe, 0xca, 0x91,
	0xde, 0xcf, 0x13, 0x48, 0x11, 0x16, 0x7f, 0x44, 0xb5, 0x45, 0xf8, 0xe1, 0x10, 0x65, 0x28, 0xb3,
	0xe7, 0x3a, 0xac, 0x94, 0x95, 0x64, 0x40, 0xf8, 0x1c, 0xad, 0xdf, 0xad, 0x0b, 0x90, 0xd7, 0x80,
	0xbc, 0xef, 0x48, 0x26, 0x69, 0x2f, 0xc9, 0xa2, 0x66, 0x83, 0x37, 0x2b, 0x06, 0xe4, 0x07, 0x4b,
	0x0d, 0xfe, 0xd0, 0x3a, 0x49, 0x1a, 0x83, 0xdf, 0xa1, 0x0a, 0xac, 0x24, 0x30, 0x2b, 0xc0, 0x7c,
	0xee, 0x3a, 0xee, 0x85, 0x8f, 0x58, 0xc4, 0xac, 0x4b, 0xb3, 0xbe, 0x40, 0x44, 0x4b, 0x75, 0x79,
	0x64, 0x9d, 0x24, 0x8d, 0xc1, 0x17, 0xe8, 0xe1, 0x7c, 0xdd, 0x4d, 0x80, 0x20, 0xe2, 0x55, 0x88,
	0xf8, 0xbe, 0x73, 0xf4, 0x52, 0x7e, 0x13, 0xf0, 0x3c, 0x14, 0x7f, 0x42, 0x1b, 0xd6, 0x0b, 0x47,
	0xa8, 0xc1, 0x11, 0x5e, 0x38, 0x96, 0x39, 0xcb, 0x98, 0xc9, 0x1f, 0x30, 0xdc, 0x47, 0x15, 0x50,
	0x02, 0x79, 0x7d, 0xa9, 0x71, 0x1f, 0x2e, 0x7c, 0xa6, 0x79, 0x0b, 0xc2, 0x5f, 0xd1, 0x96, 0xb9,
	0x98, 0xce, 0x52, 0xf7, 0x12, 0x0c, 0x69, 0x03, 0x86, 0xe4, 0xba, 0x41, 0xaf, 0xf3, 0x14, 0x53,
	0xed, 0x6f, 0x05, 0x0e, 0x8e, 0x6f, 0x26, 0xbe, 0x77, 0x3b, 0xf1, 0xbd, 0x9f, 0x13, 0xdf, 0xfb,
	0x36, 0xf5, 0x4b, 0xb7, 0x53, 0xbf, 0xf4, 0x7d, 0xea, 0x97, 0xce, 0xdb, 0x05, 0x35, 0xbb, 0xe3,
	0x6e, 0xc1, 0x37, 0xe1, 0x7a, 0x48, 0xd5, 0xe7, 0x32, 0x5c, 0xa3, 0x7b, 0xbf, 0x03, 0x00, 0x00,
	0xff, 0xff, 0x5c, 0x7b, 0x72, 0x32, 0xa7, 0x07, 0x00, 0x00,
}

func (m *GenesisState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenesisState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenesisState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.ForeignUniversitiesList) > 0 {
		for iNdEx := len(m.ForeignUniversitiesList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.ForeignUniversitiesList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x72
		}
	}
	{
		size, err := m.ChainInfo.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintGenesis(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x6a
	if m.UniversityInfo != nil {
		{
			size, err := m.UniversityInfo.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x62
	}
	if len(m.StoredStudentList) > 0 {
		for iNdEx := len(m.StoredStudentList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.StoredStudentList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x5a
		}
	}
	if m.ErasmusInfo != nil {
		{
			size, err := m.ErasmusInfo.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x52
	}
	if m.TaxesInfo != nil {
		{
			size, err := m.TaxesInfo.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x4a
	}
	if m.ContactInfo != nil {
		{
			size, err := m.ContactInfo.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x42
	}
	if m.ResidenceInfo != nil {
		{
			size, err := m.ResidenceInfo.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x3a
	}
	if m.PersonalInfo != nil {
		{
			size, err := m.PersonalInfo.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x32
	}
	if m.TranscriptOfRecords != nil {
		{
			size, err := m.TranscriptOfRecords.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x2a
	}
	if m.StudentInfo != nil {
		{
			size, err := m.StudentInfo.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x22
	}
	if len(m.ProfessorsExamsList) > 0 {
		for iNdEx := len(m.ProfessorsExamsList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.ProfessorsExamsList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x1a
		}
	}
	if len(m.PortId) > 0 {
		i -= len(m.PortId)
		copy(dAtA[i:], m.PortId)
		i = encodeVarintGenesis(dAtA, i, uint64(len(m.PortId)))
		i--
		dAtA[i] = 0x12
	}
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintGenesis(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintGenesis(dAtA []byte, offset int, v uint64) int {
	offset -= sovGenesis(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenesisState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Params.Size()
	n += 1 + l + sovGenesis(uint64(l))
	l = len(m.PortId)
	if l > 0 {
		n += 1 + l + sovGenesis(uint64(l))
	}
	if len(m.ProfessorsExamsList) > 0 {
		for _, e := range m.ProfessorsExamsList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.StudentInfo != nil {
		l = m.StudentInfo.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.TranscriptOfRecords != nil {
		l = m.TranscriptOfRecords.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.PersonalInfo != nil {
		l = m.PersonalInfo.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.ResidenceInfo != nil {
		l = m.ResidenceInfo.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.ContactInfo != nil {
		l = m.ContactInfo.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.TaxesInfo != nil {
		l = m.TaxesInfo.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.ErasmusInfo != nil {
		l = m.ErasmusInfo.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if len(m.StoredStudentList) > 0 {
		for _, e := range m.StoredStudentList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.UniversityInfo != nil {
		l = m.UniversityInfo.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	l = m.ChainInfo.Size()
	n += 1 + l + sovGenesis(uint64(l))
	if len(m.ForeignUniversitiesList) > 0 {
		for _, e := range m.ForeignUniversitiesList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	return n
}

func sovGenesis(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGenesis(x uint64) (n int) {
	return sovGenesis(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenesisState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: GenesisState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenesisState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PortId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PortId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ProfessorsExamsList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ProfessorsExamsList = append(m.ProfessorsExamsList, ProfessorsExams{})
			if err := m.ProfessorsExamsList[len(m.ProfessorsExamsList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field StudentInfo", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.StudentInfo == nil {
				m.StudentInfo = &StudentInfo{}
			}
			if err := m.StudentInfo.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TranscriptOfRecords", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.TranscriptOfRecords == nil {
				m.TranscriptOfRecords = &TranscriptOfRecords{}
			}
			if err := m.TranscriptOfRecords.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PersonalInfo", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.PersonalInfo == nil {
				m.PersonalInfo = &PersonalInfo{}
			}
			if err := m.PersonalInfo.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ResidenceInfo", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.ResidenceInfo == nil {
				m.ResidenceInfo = &ResidenceInfo{}
			}
			if err := m.ResidenceInfo.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ContactInfo", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.ContactInfo == nil {
				m.ContactInfo = &ContactInfo{}
			}
			if err := m.ContactInfo.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TaxesInfo", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.TaxesInfo == nil {
				m.TaxesInfo = &TaxesInfo{}
			}
			if err := m.TaxesInfo.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ErasmusInfo", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.ErasmusInfo == nil {
				m.ErasmusInfo = &ErasmusInfo{}
			}
			if err := m.ErasmusInfo.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 11:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field StoredStudentList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.StoredStudentList = append(m.StoredStudentList, StoredStudent{})
			if err := m.StoredStudentList[len(m.StoredStudentList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 12:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field UniversityInfo", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.UniversityInfo == nil {
				m.UniversityInfo = &UniversityInfo{}
			}
			if err := m.UniversityInfo.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 13:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ChainInfo", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.ChainInfo.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 14:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ForeignUniversitiesList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ForeignUniversitiesList = append(m.ForeignUniversitiesList, ForeignUniversities{})
			if err := m.ForeignUniversitiesList[len(m.ForeignUniversitiesList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipGenesis(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGenesis
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipGenesis(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthGenesis
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGenesis
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGenesis
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGenesis        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGenesis          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGenesis = fmt.Errorf("proto: unexpected end of group")
)
