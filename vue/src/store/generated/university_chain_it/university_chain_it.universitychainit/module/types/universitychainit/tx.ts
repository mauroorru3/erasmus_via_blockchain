/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "university_chain_it.universitychainit";

export interface MsgConfigureChain {
  creator: string;
}

export interface MsgConfigureChainResponse {
  status: number;
}

export interface MsgRegisterNewStudent {
  creator: string;
  university: string;
  name: string;
  surname: string;
  courseType: string;
  courseOfStudy: string;
  departmentName: string;
}

export interface MsgRegisterNewStudentResponse {
  studentIndex: string;
}

export interface MsgInsertStudentPersonalInfo {
  creator: string;
  university: string;
  studentIndex: string;
  gender: string;
  dateOfBirth: string;
  primaryNationality: string;
  countryOfBirth: string;
  provinceOfBirth: string;
  townOfBirth: string;
  taxCode: string;
  incomeBracket: number;
}

export interface MsgInsertStudentPersonalInfoResponse {
  status: number;
}

export interface MsgInsertStudentContactInfo {
  creator: string;
  university: string;
  studentIndex: string;
  contactAddress: string;
  email: string;
  mobilePhone: string;
}

export interface MsgInsertStudentContactInfoResponse {
  status: number;
}

export interface MsgInsertStudentResidenceInfo {
  creator: string;
  university: string;
  studentIndex: string;
  country: string;
  province: string;
  town: string;
  postCode: string;
  address: string;
  houseNumber: string;
  homePhone: string;
}

export interface MsgInsertStudentResidenceInfoResponse {
  status: number;
}

const baseMsgConfigureChain: object = { creator: "" };

export const MsgConfigureChain = {
  encode(message: MsgConfigureChain, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConfigureChain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConfigureChain } as MsgConfigureChain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConfigureChain {
    const message = { ...baseMsgConfigureChain } as MsgConfigureChain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgConfigureChain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgConfigureChain>): MsgConfigureChain {
    const message = { ...baseMsgConfigureChain } as MsgConfigureChain;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgConfigureChainResponse: object = { status: 0 };

export const MsgConfigureChainResponse = {
  encode(
    message: MsgConfigureChainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgConfigureChainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConfigureChainResponse,
    } as MsgConfigureChainResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConfigureChainResponse {
    const message = {
      ...baseMsgConfigureChainResponse,
    } as MsgConfigureChainResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = Number(object.status);
    } else {
      message.status = 0;
    }
    return message;
  },

  toJSON(message: MsgConfigureChainResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgConfigureChainResponse>
  ): MsgConfigureChainResponse {
    const message = {
      ...baseMsgConfigureChainResponse,
    } as MsgConfigureChainResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    return message;
  },
};

const baseMsgRegisterNewStudent: object = {
  creator: "",
  university: "",
  name: "",
  surname: "",
  courseType: "",
  courseOfStudy: "",
  departmentName: "",
};

export const MsgRegisterNewStudent = {
  encode(
    message: MsgRegisterNewStudent,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.university !== "") {
      writer.uint32(18).string(message.university);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.surname !== "") {
      writer.uint32(34).string(message.surname);
    }
    if (message.courseType !== "") {
      writer.uint32(42).string(message.courseType);
    }
    if (message.courseOfStudy !== "") {
      writer.uint32(50).string(message.courseOfStudy);
    }
    if (message.departmentName !== "") {
      writer.uint32(58).string(message.departmentName);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterNewStudent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterNewStudent } as MsgRegisterNewStudent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.university = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.surname = reader.string();
          break;
        case 5:
          message.courseType = reader.string();
          break;
        case 6:
          message.courseOfStudy = reader.string();
          break;
        case 7:
          message.departmentName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterNewStudent {
    const message = { ...baseMsgRegisterNewStudent } as MsgRegisterNewStudent;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.university !== undefined && object.university !== null) {
      message.university = String(object.university);
    } else {
      message.university = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.surname !== undefined && object.surname !== null) {
      message.surname = String(object.surname);
    } else {
      message.surname = "";
    }
    if (object.courseType !== undefined && object.courseType !== null) {
      message.courseType = String(object.courseType);
    } else {
      message.courseType = "";
    }
    if (object.courseOfStudy !== undefined && object.courseOfStudy !== null) {
      message.courseOfStudy = String(object.courseOfStudy);
    } else {
      message.courseOfStudy = "";
    }
    if (object.departmentName !== undefined && object.departmentName !== null) {
      message.departmentName = String(object.departmentName);
    } else {
      message.departmentName = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterNewStudent): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.university !== undefined && (obj.university = message.university);
    message.name !== undefined && (obj.name = message.name);
    message.surname !== undefined && (obj.surname = message.surname);
    message.courseType !== undefined && (obj.courseType = message.courseType);
    message.courseOfStudy !== undefined &&
      (obj.courseOfStudy = message.courseOfStudy);
    message.departmentName !== undefined &&
      (obj.departmentName = message.departmentName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterNewStudent>
  ): MsgRegisterNewStudent {
    const message = { ...baseMsgRegisterNewStudent } as MsgRegisterNewStudent;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.university !== undefined && object.university !== null) {
      message.university = object.university;
    } else {
      message.university = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.surname !== undefined && object.surname !== null) {
      message.surname = object.surname;
    } else {
      message.surname = "";
    }
    if (object.courseType !== undefined && object.courseType !== null) {
      message.courseType = object.courseType;
    } else {
      message.courseType = "";
    }
    if (object.courseOfStudy !== undefined && object.courseOfStudy !== null) {
      message.courseOfStudy = object.courseOfStudy;
    } else {
      message.courseOfStudy = "";
    }
    if (object.departmentName !== undefined && object.departmentName !== null) {
      message.departmentName = object.departmentName;
    } else {
      message.departmentName = "";
    }
    return message;
  },
};

const baseMsgRegisterNewStudentResponse: object = { studentIndex: "" };

export const MsgRegisterNewStudentResponse = {
  encode(
    message: MsgRegisterNewStudentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.studentIndex !== "") {
      writer.uint32(10).string(message.studentIndex);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRegisterNewStudentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterNewStudentResponse,
    } as MsgRegisterNewStudentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.studentIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterNewStudentResponse {
    const message = {
      ...baseMsgRegisterNewStudentResponse,
    } as MsgRegisterNewStudentResponse;
    if (object.studentIndex !== undefined && object.studentIndex !== null) {
      message.studentIndex = String(object.studentIndex);
    } else {
      message.studentIndex = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterNewStudentResponse): unknown {
    const obj: any = {};
    message.studentIndex !== undefined &&
      (obj.studentIndex = message.studentIndex);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterNewStudentResponse>
  ): MsgRegisterNewStudentResponse {
    const message = {
      ...baseMsgRegisterNewStudentResponse,
    } as MsgRegisterNewStudentResponse;
    if (object.studentIndex !== undefined && object.studentIndex !== null) {
      message.studentIndex = object.studentIndex;
    } else {
      message.studentIndex = "";
    }
    return message;
  },
};

const baseMsgInsertStudentPersonalInfo: object = {
  creator: "",
  university: "",
  studentIndex: "",
  gender: "",
  dateOfBirth: "",
  primaryNationality: "",
  countryOfBirth: "",
  provinceOfBirth: "",
  townOfBirth: "",
  taxCode: "",
  incomeBracket: 0,
};

export const MsgInsertStudentPersonalInfo = {
  encode(
    message: MsgInsertStudentPersonalInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.university !== "") {
      writer.uint32(18).string(message.university);
    }
    if (message.studentIndex !== "") {
      writer.uint32(26).string(message.studentIndex);
    }
    if (message.gender !== "") {
      writer.uint32(34).string(message.gender);
    }
    if (message.dateOfBirth !== "") {
      writer.uint32(42).string(message.dateOfBirth);
    }
    if (message.primaryNationality !== "") {
      writer.uint32(50).string(message.primaryNationality);
    }
    if (message.countryOfBirth !== "") {
      writer.uint32(58).string(message.countryOfBirth);
    }
    if (message.provinceOfBirth !== "") {
      writer.uint32(66).string(message.provinceOfBirth);
    }
    if (message.townOfBirth !== "") {
      writer.uint32(74).string(message.townOfBirth);
    }
    if (message.taxCode !== "") {
      writer.uint32(82).string(message.taxCode);
    }
    if (message.incomeBracket !== 0) {
      writer.uint32(88).uint32(message.incomeBracket);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInsertStudentPersonalInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInsertStudentPersonalInfo,
    } as MsgInsertStudentPersonalInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.university = reader.string();
          break;
        case 3:
          message.studentIndex = reader.string();
          break;
        case 4:
          message.gender = reader.string();
          break;
        case 5:
          message.dateOfBirth = reader.string();
          break;
        case 6:
          message.primaryNationality = reader.string();
          break;
        case 7:
          message.countryOfBirth = reader.string();
          break;
        case 8:
          message.provinceOfBirth = reader.string();
          break;
        case 9:
          message.townOfBirth = reader.string();
          break;
        case 10:
          message.taxCode = reader.string();
          break;
        case 11:
          message.incomeBracket = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInsertStudentPersonalInfo {
    const message = {
      ...baseMsgInsertStudentPersonalInfo,
    } as MsgInsertStudentPersonalInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.university !== undefined && object.university !== null) {
      message.university = String(object.university);
    } else {
      message.university = "";
    }
    if (object.studentIndex !== undefined && object.studentIndex !== null) {
      message.studentIndex = String(object.studentIndex);
    } else {
      message.studentIndex = "";
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = String(object.gender);
    } else {
      message.gender = "";
    }
    if (object.dateOfBirth !== undefined && object.dateOfBirth !== null) {
      message.dateOfBirth = String(object.dateOfBirth);
    } else {
      message.dateOfBirth = "";
    }
    if (
      object.primaryNationality !== undefined &&
      object.primaryNationality !== null
    ) {
      message.primaryNationality = String(object.primaryNationality);
    } else {
      message.primaryNationality = "";
    }
    if (object.countryOfBirth !== undefined && object.countryOfBirth !== null) {
      message.countryOfBirth = String(object.countryOfBirth);
    } else {
      message.countryOfBirth = "";
    }
    if (
      object.provinceOfBirth !== undefined &&
      object.provinceOfBirth !== null
    ) {
      message.provinceOfBirth = String(object.provinceOfBirth);
    } else {
      message.provinceOfBirth = "";
    }
    if (object.townOfBirth !== undefined && object.townOfBirth !== null) {
      message.townOfBirth = String(object.townOfBirth);
    } else {
      message.townOfBirth = "";
    }
    if (object.taxCode !== undefined && object.taxCode !== null) {
      message.taxCode = String(object.taxCode);
    } else {
      message.taxCode = "";
    }
    if (object.incomeBracket !== undefined && object.incomeBracket !== null) {
      message.incomeBracket = Number(object.incomeBracket);
    } else {
      message.incomeBracket = 0;
    }
    return message;
  },

  toJSON(message: MsgInsertStudentPersonalInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.university !== undefined && (obj.university = message.university);
    message.studentIndex !== undefined &&
      (obj.studentIndex = message.studentIndex);
    message.gender !== undefined && (obj.gender = message.gender);
    message.dateOfBirth !== undefined &&
      (obj.dateOfBirth = message.dateOfBirth);
    message.primaryNationality !== undefined &&
      (obj.primaryNationality = message.primaryNationality);
    message.countryOfBirth !== undefined &&
      (obj.countryOfBirth = message.countryOfBirth);
    message.provinceOfBirth !== undefined &&
      (obj.provinceOfBirth = message.provinceOfBirth);
    message.townOfBirth !== undefined &&
      (obj.townOfBirth = message.townOfBirth);
    message.taxCode !== undefined && (obj.taxCode = message.taxCode);
    message.incomeBracket !== undefined &&
      (obj.incomeBracket = message.incomeBracket);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInsertStudentPersonalInfo>
  ): MsgInsertStudentPersonalInfo {
    const message = {
      ...baseMsgInsertStudentPersonalInfo,
    } as MsgInsertStudentPersonalInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.university !== undefined && object.university !== null) {
      message.university = object.university;
    } else {
      message.university = "";
    }
    if (object.studentIndex !== undefined && object.studentIndex !== null) {
      message.studentIndex = object.studentIndex;
    } else {
      message.studentIndex = "";
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = object.gender;
    } else {
      message.gender = "";
    }
    if (object.dateOfBirth !== undefined && object.dateOfBirth !== null) {
      message.dateOfBirth = object.dateOfBirth;
    } else {
      message.dateOfBirth = "";
    }
    if (
      object.primaryNationality !== undefined &&
      object.primaryNationality !== null
    ) {
      message.primaryNationality = object.primaryNationality;
    } else {
      message.primaryNationality = "";
    }
    if (object.countryOfBirth !== undefined && object.countryOfBirth !== null) {
      message.countryOfBirth = object.countryOfBirth;
    } else {
      message.countryOfBirth = "";
    }
    if (
      object.provinceOfBirth !== undefined &&
      object.provinceOfBirth !== null
    ) {
      message.provinceOfBirth = object.provinceOfBirth;
    } else {
      message.provinceOfBirth = "";
    }
    if (object.townOfBirth !== undefined && object.townOfBirth !== null) {
      message.townOfBirth = object.townOfBirth;
    } else {
      message.townOfBirth = "";
    }
    if (object.taxCode !== undefined && object.taxCode !== null) {
      message.taxCode = object.taxCode;
    } else {
      message.taxCode = "";
    }
    if (object.incomeBracket !== undefined && object.incomeBracket !== null) {
      message.incomeBracket = object.incomeBracket;
    } else {
      message.incomeBracket = 0;
    }
    return message;
  },
};

const baseMsgInsertStudentPersonalInfoResponse: object = { status: 0 };

export const MsgInsertStudentPersonalInfoResponse = {
  encode(
    message: MsgInsertStudentPersonalInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInsertStudentPersonalInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInsertStudentPersonalInfoResponse,
    } as MsgInsertStudentPersonalInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInsertStudentPersonalInfoResponse {
    const message = {
      ...baseMsgInsertStudentPersonalInfoResponse,
    } as MsgInsertStudentPersonalInfoResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = Number(object.status);
    } else {
      message.status = 0;
    }
    return message;
  },

  toJSON(message: MsgInsertStudentPersonalInfoResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInsertStudentPersonalInfoResponse>
  ): MsgInsertStudentPersonalInfoResponse {
    const message = {
      ...baseMsgInsertStudentPersonalInfoResponse,
    } as MsgInsertStudentPersonalInfoResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    return message;
  },
};

const baseMsgInsertStudentContactInfo: object = {
  creator: "",
  university: "",
  studentIndex: "",
  contactAddress: "",
  email: "",
  mobilePhone: "",
};

export const MsgInsertStudentContactInfo = {
  encode(
    message: MsgInsertStudentContactInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.university !== "") {
      writer.uint32(18).string(message.university);
    }
    if (message.studentIndex !== "") {
      writer.uint32(26).string(message.studentIndex);
    }
    if (message.contactAddress !== "") {
      writer.uint32(34).string(message.contactAddress);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.mobilePhone !== "") {
      writer.uint32(50).string(message.mobilePhone);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInsertStudentContactInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInsertStudentContactInfo,
    } as MsgInsertStudentContactInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.university = reader.string();
          break;
        case 3:
          message.studentIndex = reader.string();
          break;
        case 4:
          message.contactAddress = reader.string();
          break;
        case 5:
          message.email = reader.string();
          break;
        case 6:
          message.mobilePhone = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInsertStudentContactInfo {
    const message = {
      ...baseMsgInsertStudentContactInfo,
    } as MsgInsertStudentContactInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.university !== undefined && object.university !== null) {
      message.university = String(object.university);
    } else {
      message.university = "";
    }
    if (object.studentIndex !== undefined && object.studentIndex !== null) {
      message.studentIndex = String(object.studentIndex);
    } else {
      message.studentIndex = "";
    }
    if (object.contactAddress !== undefined && object.contactAddress !== null) {
      message.contactAddress = String(object.contactAddress);
    } else {
      message.contactAddress = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.mobilePhone !== undefined && object.mobilePhone !== null) {
      message.mobilePhone = String(object.mobilePhone);
    } else {
      message.mobilePhone = "";
    }
    return message;
  },

  toJSON(message: MsgInsertStudentContactInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.university !== undefined && (obj.university = message.university);
    message.studentIndex !== undefined &&
      (obj.studentIndex = message.studentIndex);
    message.contactAddress !== undefined &&
      (obj.contactAddress = message.contactAddress);
    message.email !== undefined && (obj.email = message.email);
    message.mobilePhone !== undefined &&
      (obj.mobilePhone = message.mobilePhone);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInsertStudentContactInfo>
  ): MsgInsertStudentContactInfo {
    const message = {
      ...baseMsgInsertStudentContactInfo,
    } as MsgInsertStudentContactInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.university !== undefined && object.university !== null) {
      message.university = object.university;
    } else {
      message.university = "";
    }
    if (object.studentIndex !== undefined && object.studentIndex !== null) {
      message.studentIndex = object.studentIndex;
    } else {
      message.studentIndex = "";
    }
    if (object.contactAddress !== undefined && object.contactAddress !== null) {
      message.contactAddress = object.contactAddress;
    } else {
      message.contactAddress = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.mobilePhone !== undefined && object.mobilePhone !== null) {
      message.mobilePhone = object.mobilePhone;
    } else {
      message.mobilePhone = "";
    }
    return message;
  },
};

const baseMsgInsertStudentContactInfoResponse: object = { status: 0 };

export const MsgInsertStudentContactInfoResponse = {
  encode(
    message: MsgInsertStudentContactInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInsertStudentContactInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInsertStudentContactInfoResponse,
    } as MsgInsertStudentContactInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInsertStudentContactInfoResponse {
    const message = {
      ...baseMsgInsertStudentContactInfoResponse,
    } as MsgInsertStudentContactInfoResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = Number(object.status);
    } else {
      message.status = 0;
    }
    return message;
  },

  toJSON(message: MsgInsertStudentContactInfoResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInsertStudentContactInfoResponse>
  ): MsgInsertStudentContactInfoResponse {
    const message = {
      ...baseMsgInsertStudentContactInfoResponse,
    } as MsgInsertStudentContactInfoResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    return message;
  },
};

const baseMsgInsertStudentResidenceInfo: object = {
  creator: "",
  university: "",
  studentIndex: "",
  country: "",
  province: "",
  town: "",
  postCode: "",
  address: "",
  houseNumber: "",
  homePhone: "",
};

export const MsgInsertStudentResidenceInfo = {
  encode(
    message: MsgInsertStudentResidenceInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.university !== "") {
      writer.uint32(18).string(message.university);
    }
    if (message.studentIndex !== "") {
      writer.uint32(26).string(message.studentIndex);
    }
    if (message.country !== "") {
      writer.uint32(34).string(message.country);
    }
    if (message.province !== "") {
      writer.uint32(42).string(message.province);
    }
    if (message.town !== "") {
      writer.uint32(50).string(message.town);
    }
    if (message.postCode !== "") {
      writer.uint32(58).string(message.postCode);
    }
    if (message.address !== "") {
      writer.uint32(66).string(message.address);
    }
    if (message.houseNumber !== "") {
      writer.uint32(74).string(message.houseNumber);
    }
    if (message.homePhone !== "") {
      writer.uint32(82).string(message.homePhone);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInsertStudentResidenceInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInsertStudentResidenceInfo,
    } as MsgInsertStudentResidenceInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.university = reader.string();
          break;
        case 3:
          message.studentIndex = reader.string();
          break;
        case 4:
          message.country = reader.string();
          break;
        case 5:
          message.province = reader.string();
          break;
        case 6:
          message.town = reader.string();
          break;
        case 7:
          message.postCode = reader.string();
          break;
        case 8:
          message.address = reader.string();
          break;
        case 9:
          message.houseNumber = reader.string();
          break;
        case 10:
          message.homePhone = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInsertStudentResidenceInfo {
    const message = {
      ...baseMsgInsertStudentResidenceInfo,
    } as MsgInsertStudentResidenceInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.university !== undefined && object.university !== null) {
      message.university = String(object.university);
    } else {
      message.university = "";
    }
    if (object.studentIndex !== undefined && object.studentIndex !== null) {
      message.studentIndex = String(object.studentIndex);
    } else {
      message.studentIndex = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = String(object.country);
    } else {
      message.country = "";
    }
    if (object.province !== undefined && object.province !== null) {
      message.province = String(object.province);
    } else {
      message.province = "";
    }
    if (object.town !== undefined && object.town !== null) {
      message.town = String(object.town);
    } else {
      message.town = "";
    }
    if (object.postCode !== undefined && object.postCode !== null) {
      message.postCode = String(object.postCode);
    } else {
      message.postCode = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.houseNumber !== undefined && object.houseNumber !== null) {
      message.houseNumber = String(object.houseNumber);
    } else {
      message.houseNumber = "";
    }
    if (object.homePhone !== undefined && object.homePhone !== null) {
      message.homePhone = String(object.homePhone);
    } else {
      message.homePhone = "";
    }
    return message;
  },

  toJSON(message: MsgInsertStudentResidenceInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.university !== undefined && (obj.university = message.university);
    message.studentIndex !== undefined &&
      (obj.studentIndex = message.studentIndex);
    message.country !== undefined && (obj.country = message.country);
    message.province !== undefined && (obj.province = message.province);
    message.town !== undefined && (obj.town = message.town);
    message.postCode !== undefined && (obj.postCode = message.postCode);
    message.address !== undefined && (obj.address = message.address);
    message.houseNumber !== undefined &&
      (obj.houseNumber = message.houseNumber);
    message.homePhone !== undefined && (obj.homePhone = message.homePhone);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInsertStudentResidenceInfo>
  ): MsgInsertStudentResidenceInfo {
    const message = {
      ...baseMsgInsertStudentResidenceInfo,
    } as MsgInsertStudentResidenceInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.university !== undefined && object.university !== null) {
      message.university = object.university;
    } else {
      message.university = "";
    }
    if (object.studentIndex !== undefined && object.studentIndex !== null) {
      message.studentIndex = object.studentIndex;
    } else {
      message.studentIndex = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = "";
    }
    if (object.province !== undefined && object.province !== null) {
      message.province = object.province;
    } else {
      message.province = "";
    }
    if (object.town !== undefined && object.town !== null) {
      message.town = object.town;
    } else {
      message.town = "";
    }
    if (object.postCode !== undefined && object.postCode !== null) {
      message.postCode = object.postCode;
    } else {
      message.postCode = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.houseNumber !== undefined && object.houseNumber !== null) {
      message.houseNumber = object.houseNumber;
    } else {
      message.houseNumber = "";
    }
    if (object.homePhone !== undefined && object.homePhone !== null) {
      message.homePhone = object.homePhone;
    } else {
      message.homePhone = "";
    }
    return message;
  },
};

const baseMsgInsertStudentResidenceInfoResponse: object = { status: 0 };

export const MsgInsertStudentResidenceInfoResponse = {
  encode(
    message: MsgInsertStudentResidenceInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInsertStudentResidenceInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInsertStudentResidenceInfoResponse,
    } as MsgInsertStudentResidenceInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInsertStudentResidenceInfoResponse {
    const message = {
      ...baseMsgInsertStudentResidenceInfoResponse,
    } as MsgInsertStudentResidenceInfoResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = Number(object.status);
    } else {
      message.status = 0;
    }
    return message;
  },

  toJSON(message: MsgInsertStudentResidenceInfoResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInsertStudentResidenceInfoResponse>
  ): MsgInsertStudentResidenceInfoResponse {
    const message = {
      ...baseMsgInsertStudentResidenceInfoResponse,
    } as MsgInsertStudentResidenceInfoResponse;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  ConfigureChain(
    request: MsgConfigureChain
  ): Promise<MsgConfigureChainResponse>;
  RegisterNewStudent(
    request: MsgRegisterNewStudent
  ): Promise<MsgRegisterNewStudentResponse>;
  InsertStudentPersonalInfo(
    request: MsgInsertStudentPersonalInfo
  ): Promise<MsgInsertStudentPersonalInfoResponse>;
  InsertStudentContactInfo(
    request: MsgInsertStudentContactInfo
  ): Promise<MsgInsertStudentContactInfoResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  InsertStudentResidenceInfo(
    request: MsgInsertStudentResidenceInfo
  ): Promise<MsgInsertStudentResidenceInfoResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  ConfigureChain(
    request: MsgConfigureChain
  ): Promise<MsgConfigureChainResponse> {
    const data = MsgConfigureChain.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Msg",
      "ConfigureChain",
      data
    );
    return promise.then((data) =>
      MsgConfigureChainResponse.decode(new Reader(data))
    );
  }

  RegisterNewStudent(
    request: MsgRegisterNewStudent
  ): Promise<MsgRegisterNewStudentResponse> {
    const data = MsgRegisterNewStudent.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Msg",
      "RegisterNewStudent",
      data
    );
    return promise.then((data) =>
      MsgRegisterNewStudentResponse.decode(new Reader(data))
    );
  }

  InsertStudentPersonalInfo(
    request: MsgInsertStudentPersonalInfo
  ): Promise<MsgInsertStudentPersonalInfoResponse> {
    const data = MsgInsertStudentPersonalInfo.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Msg",
      "InsertStudentPersonalInfo",
      data
    );
    return promise.then((data) =>
      MsgInsertStudentPersonalInfoResponse.decode(new Reader(data))
    );
  }

  InsertStudentContactInfo(
    request: MsgInsertStudentContactInfo
  ): Promise<MsgInsertStudentContactInfoResponse> {
    const data = MsgInsertStudentContactInfo.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Msg",
      "InsertStudentContactInfo",
      data
    );
    return promise.then((data) =>
      MsgInsertStudentContactInfoResponse.decode(new Reader(data))
    );
  }

  InsertStudentResidenceInfo(
    request: MsgInsertStudentResidenceInfo
  ): Promise<MsgInsertStudentResidenceInfoResponse> {
    const data = MsgInsertStudentResidenceInfo.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Msg",
      "InsertStudentResidenceInfo",
      data
    );
    return promise.then((data) =>
      MsgInsertStudentResidenceInfoResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
