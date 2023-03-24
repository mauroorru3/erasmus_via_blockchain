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
	Params              Params               `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
	PortId              string               `protobuf:"bytes,2,opt,name=port_id,json=portId,proto3" json:"port_id,omitempty"`
	ProfessorsExamsList []ProfessorsExams    `protobuf:"bytes,3,rep,name=professorsExamsList,proto3" json:"professorsExamsList"`
	StudentInfo         *StudentInfo         `protobuf:"bytes,4,opt,name=studentInfo,proto3" json:"studentInfo,omitempty"`
	ExamsInfoList       []ExamsInfo          `protobuf:"bytes,5,rep,name=examsInfoList,proto3" json:"examsInfoList"`
	TranscriptOfRecords *TranscriptOfRecords `protobuf:"bytes,6,opt,name=transcriptOfRecords,proto3" json:"transcriptOfRecords,omitempty"`
	PersonalInfo        *PersonalInfo        `protobuf:"bytes,7,opt,name=personalInfo,proto3" json:"personalInfo,omitempty"`
	ResidenceInfo       *ResidenceInfo       `protobuf:"bytes,8,opt,name=residenceInfo,proto3" json:"residenceInfo,omitempty"`
	ContactInfo         *ContactInfo         `protobuf:"bytes,9,opt,name=contactInfo,proto3" json:"contactInfo,omitempty"`
	AnnualTaxesList     []AnnualTaxes        `protobuf:"bytes,10,rep,name=annualTaxesList,proto3" json:"annualTaxesList"`
	AnnualTaxesCount    uint64               `protobuf:"varint,11,opt,name=annualTaxesCount,proto3" json:"annualTaxesCount,omitempty"`
	TaxesInfo           *TaxesInfo           `protobuf:"bytes,12,opt,name=taxesInfo,proto3" json:"taxesInfo,omitempty"`
	ErasmusContribution *ErasmusContribution `protobuf:"bytes,13,opt,name=erasmusContribution,proto3" json:"erasmusContribution,omitempty"`
	ErasmusExamsList    []ErasmusExams       `protobuf:"bytes,14,rep,name=erasmusExamsList,proto3" json:"erasmusExamsList"`
	ErasmusCareerList   []ErasmusCareer      `protobuf:"bytes,15,rep,name=erasmusCareerList,proto3" json:"erasmusCareerList"`
	ErasmusCareerCount  uint64               `protobuf:"varint,16,opt,name=erasmusCareerCount,proto3" json:"erasmusCareerCount,omitempty"`
	ErasmusInfo         *ErasmusInfo         `protobuf:"bytes,17,opt,name=erasmusInfo,proto3" json:"erasmusInfo,omitempty"`
	StoredStudentList   []StoredStudent      `protobuf:"bytes,18,rep,name=storedStudentList,proto3" json:"storedStudentList"`
	UniversityInfo      *UniversityInfo      `protobuf:"bytes,19,opt,name=universityInfo,proto3" json:"universityInfo,omitempty"`
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

func (m *GenesisState) GetExamsInfoList() []ExamsInfo {
	if m != nil {
		return m.ExamsInfoList
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

func (m *GenesisState) GetAnnualTaxesList() []AnnualTaxes {
	if m != nil {
		return m.AnnualTaxesList
	}
	return nil
}

func (m *GenesisState) GetAnnualTaxesCount() uint64 {
	if m != nil {
		return m.AnnualTaxesCount
	}
	return 0
}

func (m *GenesisState) GetTaxesInfo() *TaxesInfo {
	if m != nil {
		return m.TaxesInfo
	}
	return nil
}

func (m *GenesisState) GetErasmusContribution() *ErasmusContribution {
	if m != nil {
		return m.ErasmusContribution
	}
	return nil
}

func (m *GenesisState) GetErasmusExamsList() []ErasmusExams {
	if m != nil {
		return m.ErasmusExamsList
	}
	return nil
}

func (m *GenesisState) GetErasmusCareerList() []ErasmusCareer {
	if m != nil {
		return m.ErasmusCareerList
	}
	return nil
}

func (m *GenesisState) GetErasmusCareerCount() uint64 {
	if m != nil {
		return m.ErasmusCareerCount
	}
	return 0
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

func init() {
	proto.RegisterType((*GenesisState)(nil), "university_chain_it.universitychainit.GenesisState")
}

func init() { proto.RegisterFile("universitychainit/genesis.proto", fileDescriptor_249e485a20113873) }

var fileDescriptor_249e485a20113873 = []byte{
	// 710 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x95, 0xdf, 0x4e, 0x13, 0x41,
	0x14, 0xc6, 0xbb, 0x82, 0x45, 0xa6, 0xe5, 0xdf, 0x60, 0xe2, 0x86, 0x8b, 0xa5, 0x21, 0x82, 0x8d,
	0x91, 0xd6, 0x00, 0x7a, 0xe1, 0x9d, 0x90, 0x86, 0x10, 0x8d, 0x9a, 0xa1, 0xc6, 0x84, 0x68, 0x36,
	0x4b, 0x3b, 0x85, 0x49, 0x60, 0xa6, 0x99, 0x99, 0x1a, 0x78, 0x0b, 0x1f, 0x8b, 0x4b, 0x2e, 0xbd,
	0x32, 0x06, 0x1e, 0x44, 0xb3, 0x67, 0x67, 0xdd, 0x29, 0xb3, 0xc5, 0xdd, 0xbb, 0x76, 0xe6, 0x7c,
	0xbf, 0x33, 0xdf, 0x9c, 0x33, 0x67, 0xd1, 0xea, 0x88, 0xb3, 0xef, 0x54, 0x2a, 0xa6, 0x2f, 0x7b,
	0xa7, 0x11, 0xe3, 0x4c, 0xb7, 0x4f, 0x28, 0xa7, 0x8a, 0xa9, 0xd6, 0x50, 0x0a, 0x2d, 0xf0, 0x7a,
	0x16, 0x10, 0x42, 0x44, 0xc8, 0x74, 0xcb, 0x11, 0xad, 0x3c, 0x3e, 0x11, 0x27, 0x02, 0x14, 0xed,
	0xf8, 0x57, 0x22, 0x5e, 0x09, 0x5c, 0xfa, 0x30, 0x92, 0xd1, 0xb9, 0x81, 0xaf, 0x34, 0x73, 0xf6,
	0xa5, 0x18, 0x50, 0xa5, 0x84, 0x54, 0x21, 0xbd, 0xc8, 0x22, 0x9f, 0xba, 0x91, 0x4a, 0x8f, 0xfa,
	0x94, 0xeb, 0x90, 0xf1, 0x41, 0x9a, 0x6f, 0xcd, 0x8d, 0x02, 0x88, 0x1d, 0xb3, 0xe9, 0xc6, 0x68,
	0x19, 0x71, 0xd5, 0x93, 0x6c, 0xa8, 0x43, 0x31, 0x08, 0x25, 0xed, 0x09, 0xd9, 0x4f, 0x13, 0xaf,
	0xe7, 0x1c, 0x91, 0x4a, 0x25, 0x78, 0x74, 0x66, 0x53, 0x37, 0xdc, 0x30, 0x49, 0x15, 0xeb, 0x53,
	0xde, 0xa3, 0x76, 0x5c, 0x8e, 0x8f, 0x9e, 0xe0, 0x3a, 0xea, 0xe9, 0xff, 0x44, 0x45, 0x9c, 0x8f,
	0xa2, 0xb3, 0x50, 0x47, 0x17, 0x54, 0x4d, 0x76, 0x0b, 0xdb, 0x36, 0xe9, 0x45, 0xce, 0x8d, 0xc8,
	0x48, 0x9d, 0x8f, 0x54, 0x18, 0xe7, 0x95, 0xec, 0x78, 0xa4, 0x99, 0xe0, 0x93, 0xcd, 0xa6, 0xd1,
	0x76, 0x31, 0x36, 0xee, 0x81, 0x46, 0x92, 0x52, 0x39, 0xd9, 0x46, 0x1a, 0x77, 0xff, 0xd5, 0x29,
	0x2d, 0x24, 0xed, 0x87, 0xa6, 0xc2, 0x26, 0xee, 0x99, 0x1b, 0x67, 0xf5, 0x66, 0x06, 0x5c, 0xfb,
	0x53, 0x47, 0xf5, 0xfd, 0xa4, 0x89, 0x0f, 0x75, 0xa4, 0x29, 0x7e, 0x87, 0xaa, 0x49, 0xdb, 0xf9,
	0x5e, 0xc3, 0x6b, 0xd6, 0xb6, 0x36, 0x5b, 0x85, 0x9a, 0xba, 0xf5, 0x09, 0x44, 0xbb, 0xd3, 0x57,
	0xbf, 0x56, 0x2b, 0xc4, 0x20, 0xf0, 0x13, 0x34, 0x33, 0x14, 0x52, 0x87, 0xac, 0xef, 0x3f, 0x68,
	0x78, 0xcd, 0x59, 0x52, 0x8d, 0xff, 0x1e, 0xf4, 0x31, 0x47, 0xcb, 0x59, 0xf3, 0x76, 0xe2, 0xeb,
	0x7a, 0xcf, 0x94, 0xf6, 0xa7, 0x1a, 0x53, 0xcd, 0xda, 0xd6, 0xeb, 0xa2, 0x29, 0xc7, 0x09, 0x26,
	0x77, 0x1e, 0x18, 0x77, 0x51, 0xcd, 0x5c, 0xd0, 0x01, 0x1f, 0x08, 0x7f, 0x1a, 0xac, 0x6d, 0x15,
	0xcc, 0x73, 0x98, 0x29, 0x89, 0x8d, 0xc1, 0x5f, 0xd1, 0x1c, 0x94, 0x3a, 0xfe, 0x03, 0xe7, 0x7f,
	0x08, 0xe7, 0x7f, 0x59, 0x90, 0xdb, 0x49, 0xb5, 0xe6, 0xe4, 0xe3, 0x30, 0x7c, 0x86, 0x96, 0xb3,
	0xc7, 0xf6, 0x71, 0x40, 0x92, 0xa7, 0xe6, 0x57, 0xe1, 0xec, 0x6f, 0x0a, 0xe6, 0xe8, 0xba, 0x04,
	0x92, 0x87, 0xc5, 0x5f, 0x50, 0x3d, 0x7d, 0xab, 0x70, 0x45, 0x33, 0x90, 0x66, 0xbb, 0x68, 0x29,
	0x2c, 0x29, 0x19, 0x03, 0xe1, 0x23, 0x34, 0xf7, 0xef, 0x75, 0x03, 0xf9, 0x11, 0x90, 0x77, 0x0a,
	0x92, 0x89, 0xad, 0x25, 0xe3, 0xa8, 0xb8, 0xac, 0x66, 0x22, 0x00, 0x79, 0xb6, 0x54, 0x59, 0xf7,
	0x32, 0x25, 0xb1, 0x31, 0xf8, 0x18, 0x2d, 0x24, 0x13, 0xa4, 0x1b, 0x4f, 0x08, 0x28, 0x2c, 0x82,
	0xc2, 0x16, 0x25, 0xbf, 0xcd, 0xd4, 0xa6, 0xb4, 0x77, 0x81, 0xf8, 0x39, 0x5a, 0xb4, 0x96, 0xf6,
	0xc4, 0x88, 0x6b, 0xbf, 0xd6, 0xf0, 0x9a, 0xd3, 0xc4, 0x59, 0xc7, 0x1f, 0xd0, 0x2c, 0xcc, 0x2a,
	0xf0, 0x58, 0x07, 0x8f, 0x45, 0x5b, 0xac, 0x9b, 0xea, 0x48, 0x86, 0x88, 0x1b, 0xcb, 0x8c, 0x96,
	0x3d, 0x6b, 0xac, 0xf9, 0x73, 0xa5, 0x1a, 0xab, 0xe3, 0x12, 0x48, 0x1e, 0x16, 0x53, 0xb4, 0x68,
	0x96, 0xb3, 0x77, 0x3e, 0x0f, 0xd7, 0xb9, 0x5d, 0x2e, 0x95, 0xfd, 0xc8, 0x1d, 0x24, 0x3e, 0x45,
	0x4b, 0x69, 0x76, 0x18, 0xab, 0x90, 0x67, 0x01, 0xf2, 0xec, 0x94, 0xb4, 0x04, 0x7a, 0x93, 0xc8,
	0x85, 0xe2, 0x16, 0xc2, 0x63, 0x8b, 0x49, 0xf1, 0x16, 0xa1, 0x78, 0x39, 0x3b, 0x71, 0x93, 0x9a,
	0x55, 0x28, 0xe0, 0x52, 0xa9, 0x26, 0xed, 0x64, 0x4a, 0x62, 0x63, 0x62, 0xbf, 0xc9, 0xe4, 0x37,
	0xd3, 0x09, 0xfc, 0xe2, 0x52, 0x7e, 0x0f, 0x6d, 0x7d, 0xea, 0xd7, 0x81, 0xe2, 0x6f, 0x68, 0x3e,
	0xd3, 0x82, 0x85, 0x65, 0xb0, 0xf0, 0xaa, 0x60, 0x9a, 0xcf, 0x63, 0x62, 0x72, 0x07, 0xb6, 0xbb,
	0x7f, 0x75, 0x13, 0x78, 0xd7, 0x37, 0x81, 0xf7, 0xfb, 0x26, 0xf0, 0x7e, 0xdc, 0x06, 0x95, 0xeb,
	0xdb, 0xa0, 0xf2, 0xf3, 0x36, 0xa8, 0x1c, 0x6d, 0xe6, 0xf0, 0xdb, 0x17, 0xed, 0x9c, 0x2f, 0xf9,
	0xe5, 0x90, 0xaa, 0xe3, 0x2a, 0x7c, 0xd1, 0xb6, 0xff, 0x06, 0x00, 0x00, 0xff, 0xff, 0x60, 0x15,
	0xce, 0x2f, 0xa7, 0x09, 0x00, 0x00,
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
		dAtA[i] = 0x1
		i--
		dAtA[i] = 0x9a
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
			dAtA[i] = 0x1
			i--
			dAtA[i] = 0x92
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
		dAtA[i] = 0x1
		i--
		dAtA[i] = 0x8a
	}
	if m.ErasmusCareerCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.ErasmusCareerCount))
		i--
		dAtA[i] = 0x1
		i--
		dAtA[i] = 0x80
	}
	if len(m.ErasmusCareerList) > 0 {
		for iNdEx := len(m.ErasmusCareerList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.ErasmusCareerList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x7a
		}
	}
	if len(m.ErasmusExamsList) > 0 {
		for iNdEx := len(m.ErasmusExamsList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.ErasmusExamsList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
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
	if m.ErasmusContribution != nil {
		{
			size, err := m.ErasmusContribution.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x6a
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
		dAtA[i] = 0x62
	}
	if m.AnnualTaxesCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.AnnualTaxesCount))
		i--
		dAtA[i] = 0x58
	}
	if len(m.AnnualTaxesList) > 0 {
		for iNdEx := len(m.AnnualTaxesList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.AnnualTaxesList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x52
		}
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
		dAtA[i] = 0x4a
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
		dAtA[i] = 0x42
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
		dAtA[i] = 0x3a
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
		dAtA[i] = 0x32
	}
	if len(m.ExamsInfoList) > 0 {
		for iNdEx := len(m.ExamsInfoList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.ExamsInfoList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x2a
		}
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
	if len(m.ExamsInfoList) > 0 {
		for _, e := range m.ExamsInfoList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
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
	if len(m.AnnualTaxesList) > 0 {
		for _, e := range m.AnnualTaxesList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.AnnualTaxesCount != 0 {
		n += 1 + sovGenesis(uint64(m.AnnualTaxesCount))
	}
	if m.TaxesInfo != nil {
		l = m.TaxesInfo.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.ErasmusContribution != nil {
		l = m.ErasmusContribution.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if len(m.ErasmusExamsList) > 0 {
		for _, e := range m.ErasmusExamsList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.ErasmusCareerList) > 0 {
		for _, e := range m.ErasmusCareerList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.ErasmusCareerCount != 0 {
		n += 2 + sovGenesis(uint64(m.ErasmusCareerCount))
	}
	if m.ErasmusInfo != nil {
		l = m.ErasmusInfo.Size()
		n += 2 + l + sovGenesis(uint64(l))
	}
	if len(m.StoredStudentList) > 0 {
		for _, e := range m.StoredStudentList {
			l = e.Size()
			n += 2 + l + sovGenesis(uint64(l))
		}
	}
	if m.UniversityInfo != nil {
		l = m.UniversityInfo.Size()
		n += 2 + l + sovGenesis(uint64(l))
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
				return fmt.Errorf("proto: wrong wireType = %d for field ExamsInfoList", wireType)
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
			m.ExamsInfoList = append(m.ExamsInfoList, ExamsInfo{})
			if err := m.ExamsInfoList[len(m.ExamsInfoList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
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
		case 7:
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
		case 8:
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
		case 9:
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
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AnnualTaxesList", wireType)
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
			m.AnnualTaxesList = append(m.AnnualTaxesList, AnnualTaxes{})
			if err := m.AnnualTaxesList[len(m.AnnualTaxesList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 11:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field AnnualTaxesCount", wireType)
			}
			m.AnnualTaxesCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.AnnualTaxesCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 12:
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
		case 13:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ErasmusContribution", wireType)
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
			if m.ErasmusContribution == nil {
				m.ErasmusContribution = &ErasmusContribution{}
			}
			if err := m.ErasmusContribution.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 14:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ErasmusExamsList", wireType)
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
			m.ErasmusExamsList = append(m.ErasmusExamsList, ErasmusExams{})
			if err := m.ErasmusExamsList[len(m.ErasmusExamsList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 15:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ErasmusCareerList", wireType)
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
			m.ErasmusCareerList = append(m.ErasmusCareerList, ErasmusCareer{})
			if err := m.ErasmusCareerList[len(m.ErasmusCareerList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 16:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ErasmusCareerCount", wireType)
			}
			m.ErasmusCareerCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ErasmusCareerCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 17:
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
		case 18:
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
		case 19:
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
