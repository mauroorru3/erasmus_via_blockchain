// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: universitychainit/university_info.proto

package types

import (
	fmt "fmt"
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

type UniversityInfo struct {
	NextStudentId   uint64 `protobuf:"varint,1,opt,name=nextStudentId,proto3" json:"nextStudentId,omitempty"`
	SecretariatKey  string `protobuf:"bytes,2,opt,name=secretariatKey,proto3" json:"secretariatKey,omitempty"`
	UniversityKey   string `protobuf:"bytes,3,opt,name=universityKey,proto3" json:"universityKey,omitempty"`
	CaiKey          string `protobuf:"bytes,4,opt,name=caiKey,proto3" json:"caiKey,omitempty"`
	FifoHeadErasmus string `protobuf:"bytes,5,opt,name=fifoHeadErasmus,proto3" json:"fifoHeadErasmus,omitempty"`
	FifoTailErasmus string `protobuf:"bytes,6,opt,name=fifoTailErasmus,proto3" json:"fifoTailErasmus,omitempty"`
	DeadlineTaxes   string `protobuf:"bytes,7,opt,name=deadlineTaxes,proto3" json:"deadlineTaxes,omitempty"`
	DeadlineErasmus string `protobuf:"bytes,8,opt,name=deadlineErasmus,proto3" json:"deadlineErasmus,omitempty"`
}

func (m *UniversityInfo) Reset()         { *m = UniversityInfo{} }
func (m *UniversityInfo) String() string { return proto.CompactTextString(m) }
func (*UniversityInfo) ProtoMessage()    {}
func (*UniversityInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_ca6c2af5cbdf9810, []int{0}
}
func (m *UniversityInfo) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *UniversityInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_UniversityInfo.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *UniversityInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UniversityInfo.Merge(m, src)
}
func (m *UniversityInfo) XXX_Size() int {
	return m.Size()
}
func (m *UniversityInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_UniversityInfo.DiscardUnknown(m)
}

var xxx_messageInfo_UniversityInfo proto.InternalMessageInfo

func (m *UniversityInfo) GetNextStudentId() uint64 {
	if m != nil {
		return m.NextStudentId
	}
	return 0
}

func (m *UniversityInfo) GetSecretariatKey() string {
	if m != nil {
		return m.SecretariatKey
	}
	return ""
}

func (m *UniversityInfo) GetUniversityKey() string {
	if m != nil {
		return m.UniversityKey
	}
	return ""
}

func (m *UniversityInfo) GetCaiKey() string {
	if m != nil {
		return m.CaiKey
	}
	return ""
}

func (m *UniversityInfo) GetFifoHeadErasmus() string {
	if m != nil {
		return m.FifoHeadErasmus
	}
	return ""
}

func (m *UniversityInfo) GetFifoTailErasmus() string {
	if m != nil {
		return m.FifoTailErasmus
	}
	return ""
}

func (m *UniversityInfo) GetDeadlineTaxes() string {
	if m != nil {
		return m.DeadlineTaxes
	}
	return ""
}

func (m *UniversityInfo) GetDeadlineErasmus() string {
	if m != nil {
		return m.DeadlineErasmus
	}
	return ""
}

func init() {
	proto.RegisterType((*UniversityInfo)(nil), "university_chain_it.universitychainit.UniversityInfo")
}

func init() {
	proto.RegisterFile("universitychainit/university_info.proto", fileDescriptor_ca6c2af5cbdf9810)
}

var fileDescriptor_ca6c2af5cbdf9810 = []byte{
	// 278 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x2f, 0xcd, 0xcb, 0x2c,
	0x4b, 0x2d, 0x2a, 0xce, 0x2c, 0xa9, 0x4c, 0xce, 0x48, 0xcc, 0xcc, 0xcb, 0x2c, 0xd1, 0x47, 0x88,
	0xc4, 0x67, 0xe6, 0xa5, 0xe5, 0xeb, 0x15, 0x14, 0xe5, 0x97, 0xe4, 0x0b, 0xa9, 0x22, 0x09, 0x83,
	0x55, 0xc6, 0x67, 0x96, 0xe8, 0x61, 0x68, 0x56, 0x3a, 0xc0, 0xc4, 0xc5, 0x17, 0x0a, 0x17, 0xf5,
	0xcc, 0x4b, 0xcb, 0x17, 0x52, 0xe1, 0xe2, 0xcd, 0x4b, 0xad, 0x28, 0x09, 0x2e, 0x29, 0x4d, 0x49,
	0xcd, 0x2b, 0xf1, 0x4c, 0x91, 0x60, 0x54, 0x60, 0xd4, 0x60, 0x09, 0x42, 0x15, 0x14, 0x52, 0xe3,
	0xe2, 0x2b, 0x4e, 0x4d, 0x2e, 0x4a, 0x2d, 0x49, 0x2c, 0xca, 0x4c, 0x2c, 0xf1, 0x4e, 0xad, 0x94,
	0x60, 0x52, 0x60, 0xd4, 0xe0, 0x0c, 0x42, 0x13, 0x05, 0x99, 0x86, 0xb0, 0x15, 0xa4, 0x8c, 0x19,
	0xac, 0x0c, 0x55, 0x50, 0x48, 0x8c, 0x8b, 0x2d, 0x39, 0x31, 0x13, 0x24, 0xcd, 0x02, 0x96, 0x86,
	0xf2, 0x84, 0x34, 0xb8, 0xf8, 0xd3, 0x32, 0xd3, 0xf2, 0x3d, 0x52, 0x13, 0x53, 0x5c, 0x8b, 0x12,
	0x8b, 0x73, 0x4b, 0x8b, 0x25, 0x58, 0xc1, 0x0a, 0xd0, 0x85, 0x61, 0x2a, 0x43, 0x12, 0x33, 0x73,
	0x60, 0x2a, 0xd9, 0x10, 0x2a, 0x91, 0x84, 0x41, 0x2e, 0x4a, 0x49, 0x4d, 0x4c, 0xc9, 0xc9, 0xcc,
	0x4b, 0x0d, 0x49, 0xac, 0x48, 0x2d, 0x96, 0x60, 0x87, 0xb8, 0x08, 0x45, 0x10, 0x64, 0x1e, 0x4c,
	0x00, 0x66, 0x1e, 0x07, 0xc4, 0x3c, 0x34, 0x61, 0x27, 0xf7, 0x13, 0x8f, 0xe4, 0x18, 0x2f, 0x3c,
	0x92, 0x63, 0x7c, 0xf0, 0x48, 0x8e, 0x71, 0xc2, 0x63, 0x39, 0x86, 0x0b, 0x8f, 0xe5, 0x18, 0x6e,
	0x3c, 0x96, 0x63, 0x88, 0xd2, 0xc5, 0x12, 0x07, 0xfa, 0x15, 0xfa, 0x98, 0x51, 0x58, 0x52, 0x59,
	0x90, 0x5a, 0x9c, 0xc4, 0x06, 0x8e, 0x39, 0x63, 0x40, 0x00, 0x00, 0x00, 0xff, 0xff, 0x3f, 0x16,
	0x69, 0xf8, 0xe4, 0x01, 0x00, 0x00,
}

func (m *UniversityInfo) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *UniversityInfo) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *UniversityInfo) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.DeadlineErasmus) > 0 {
		i -= len(m.DeadlineErasmus)
		copy(dAtA[i:], m.DeadlineErasmus)
		i = encodeVarintUniversityInfo(dAtA, i, uint64(len(m.DeadlineErasmus)))
		i--
		dAtA[i] = 0x42
	}
	if len(m.DeadlineTaxes) > 0 {
		i -= len(m.DeadlineTaxes)
		copy(dAtA[i:], m.DeadlineTaxes)
		i = encodeVarintUniversityInfo(dAtA, i, uint64(len(m.DeadlineTaxes)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.FifoTailErasmus) > 0 {
		i -= len(m.FifoTailErasmus)
		copy(dAtA[i:], m.FifoTailErasmus)
		i = encodeVarintUniversityInfo(dAtA, i, uint64(len(m.FifoTailErasmus)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.FifoHeadErasmus) > 0 {
		i -= len(m.FifoHeadErasmus)
		copy(dAtA[i:], m.FifoHeadErasmus)
		i = encodeVarintUniversityInfo(dAtA, i, uint64(len(m.FifoHeadErasmus)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.CaiKey) > 0 {
		i -= len(m.CaiKey)
		copy(dAtA[i:], m.CaiKey)
		i = encodeVarintUniversityInfo(dAtA, i, uint64(len(m.CaiKey)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.UniversityKey) > 0 {
		i -= len(m.UniversityKey)
		copy(dAtA[i:], m.UniversityKey)
		i = encodeVarintUniversityInfo(dAtA, i, uint64(len(m.UniversityKey)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.SecretariatKey) > 0 {
		i -= len(m.SecretariatKey)
		copy(dAtA[i:], m.SecretariatKey)
		i = encodeVarintUniversityInfo(dAtA, i, uint64(len(m.SecretariatKey)))
		i--
		dAtA[i] = 0x12
	}
	if m.NextStudentId != 0 {
		i = encodeVarintUniversityInfo(dAtA, i, uint64(m.NextStudentId))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintUniversityInfo(dAtA []byte, offset int, v uint64) int {
	offset -= sovUniversityInfo(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *UniversityInfo) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.NextStudentId != 0 {
		n += 1 + sovUniversityInfo(uint64(m.NextStudentId))
	}
	l = len(m.SecretariatKey)
	if l > 0 {
		n += 1 + l + sovUniversityInfo(uint64(l))
	}
	l = len(m.UniversityKey)
	if l > 0 {
		n += 1 + l + sovUniversityInfo(uint64(l))
	}
	l = len(m.CaiKey)
	if l > 0 {
		n += 1 + l + sovUniversityInfo(uint64(l))
	}
	l = len(m.FifoHeadErasmus)
	if l > 0 {
		n += 1 + l + sovUniversityInfo(uint64(l))
	}
	l = len(m.FifoTailErasmus)
	if l > 0 {
		n += 1 + l + sovUniversityInfo(uint64(l))
	}
	l = len(m.DeadlineTaxes)
	if l > 0 {
		n += 1 + l + sovUniversityInfo(uint64(l))
	}
	l = len(m.DeadlineErasmus)
	if l > 0 {
		n += 1 + l + sovUniversityInfo(uint64(l))
	}
	return n
}

func sovUniversityInfo(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozUniversityInfo(x uint64) (n int) {
	return sovUniversityInfo(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *UniversityInfo) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowUniversityInfo
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
			return fmt.Errorf("proto: UniversityInfo: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: UniversityInfo: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field NextStudentId", wireType)
			}
			m.NextStudentId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowUniversityInfo
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.NextStudentId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SecretariatKey", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowUniversityInfo
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
				return ErrInvalidLengthUniversityInfo
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthUniversityInfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SecretariatKey = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field UniversityKey", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowUniversityInfo
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
				return ErrInvalidLengthUniversityInfo
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthUniversityInfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.UniversityKey = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CaiKey", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowUniversityInfo
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
				return ErrInvalidLengthUniversityInfo
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthUniversityInfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CaiKey = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field FifoHeadErasmus", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowUniversityInfo
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
				return ErrInvalidLengthUniversityInfo
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthUniversityInfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.FifoHeadErasmus = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field FifoTailErasmus", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowUniversityInfo
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
				return ErrInvalidLengthUniversityInfo
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthUniversityInfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.FifoTailErasmus = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DeadlineTaxes", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowUniversityInfo
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
				return ErrInvalidLengthUniversityInfo
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthUniversityInfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DeadlineTaxes = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DeadlineErasmus", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowUniversityInfo
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
				return ErrInvalidLengthUniversityInfo
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthUniversityInfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DeadlineErasmus = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipUniversityInfo(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthUniversityInfo
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
func skipUniversityInfo(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowUniversityInfo
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
					return 0, ErrIntOverflowUniversityInfo
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
					return 0, ErrIntOverflowUniversityInfo
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
				return 0, ErrInvalidLengthUniversityInfo
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupUniversityInfo
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthUniversityInfo
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthUniversityInfo        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowUniversityInfo          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupUniversityInfo = fmt.Errorf("proto: unexpected end of group")
)