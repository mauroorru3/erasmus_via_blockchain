/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../universitychainit/params";
import { StudentInfo } from "../universitychainit/student_info";
import { TranscriptOfRecords } from "../universitychainit/transcript_of_records";
import { PersonalInfo } from "../universitychainit/personal_info";
import { ResidenceInfo } from "../universitychainit/residence_info";
import { ContactInfo } from "../universitychainit/contact_info";
import { TaxesInfo } from "../universitychainit/taxes_info";
import { ErasmusInfo } from "../universitychainit/erasmus_info";
import { ChainInfo } from "../universitychainit/chain_info";
import { ForeignUniversities } from "../universitychainit/foreign_universities";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { ProfessorsExamsUniroma1 } from "../universitychainit/professors_exams_uniroma_1";
import { StoredStudentUniroma1 } from "../universitychainit/stored_student_uniroma_1";
import { ProfessorsExamsUnipi } from "../universitychainit/professors_exams_unipi";
import { StoredStudentUnipi } from "../universitychainit/stored_student_unipi";
import { UniversityInfo } from "../universitychainit/university_info";

export const protobufPackage = "university_chain_it.universitychainit";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetProfessorsExamsRequest {
  examName: string;
}

export interface QueryGetStudentInfoRequest {}

export interface QueryGetStudentInfoResponse {
  StudentInfo: StudentInfo | undefined;
}

export interface QueryGetTranscriptOfRecordsRequest {}

export interface QueryGetTranscriptOfRecordsResponse {
  TranscriptOfRecords: TranscriptOfRecords | undefined;
}

export interface QueryGetPersonalInfoRequest {}

export interface QueryGetPersonalInfoResponse {
  PersonalInfo: PersonalInfo | undefined;
}

export interface QueryGetResidenceInfoRequest {}

export interface QueryGetResidenceInfoResponse {
  ResidenceInfo: ResidenceInfo | undefined;
}

export interface QueryGetContactInfoRequest {}

export interface QueryGetContactInfoResponse {
  ContactInfo: ContactInfo | undefined;
}

export interface QueryGetTaxesInfoRequest {}

export interface QueryGetTaxesInfoResponse {
  TaxesInfo: TaxesInfo | undefined;
}

export interface QueryGetErasmusInfoRequest {}

export interface QueryGetErasmusInfoResponse {
  ErasmusInfo: ErasmusInfo | undefined;
}

export interface QueryGetChainInfoRequest {}

export interface QueryGetChainInfoResponse {
  ChainInfo: ChainInfo | undefined;
}

export interface QueryGetForeignUniversitiesRequest {
  universityName: string;
}

export interface QueryGetForeignUniversitiesResponse {
  foreignUniversities: ForeignUniversities | undefined;
}

export interface QueryAllForeignUniversitiesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllForeignUniversitiesResponse {
  foreignUniversities: ForeignUniversities[];
  pagination: PageResponse | undefined;
}

export interface QueryGetProfessorsExamsUniroma1Request {
  examName: string;
}

export interface QueryGetProfessorsExamsUniroma1Response {
  professorsExamsUniroma1: ProfessorsExamsUniroma1 | undefined;
}

export interface QueryAllProfessorsExamsUniroma1Request {
  pagination: PageRequest | undefined;
}

export interface QueryAllProfessorsExamsUniroma1Response {
  professorsExamsUniroma1: ProfessorsExamsUniroma1[];
  pagination: PageResponse | undefined;
}

export interface QueryGetStoredStudentUniroma1Request {
  index: string;
}

export interface QueryGetStoredStudentUniroma1Response {
  storedStudentUniroma1: StoredStudentUniroma1 | undefined;
}

export interface QueryAllStoredStudentUniroma1Request {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoredStudentUniroma1Response {
  storedStudentUniroma1: StoredStudentUniroma1[];
  pagination: PageResponse | undefined;
}

export interface QueryGetProfessorsExamsUnipiRequest {
  examName: string;
}

export interface QueryGetProfessorsExamsUnipiResponse {
  professorsExamsUnipi: ProfessorsExamsUnipi | undefined;
}

export interface QueryAllProfessorsExamsUnipiRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllProfessorsExamsUnipiResponse {
  professorsExamsUnipi: ProfessorsExamsUnipi[];
  pagination: PageResponse | undefined;
}

export interface QueryGetStoredStudentUnipiRequest {
  index: string;
}

export interface QueryGetStoredStudentUnipiResponse {
  storedStudentUnipi: StoredStudentUnipi | undefined;
}

export interface QueryAllStoredStudentUnipiRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoredStudentUnipiResponse {
  storedStudentUnipi: StoredStudentUnipi[];
  pagination: PageResponse | undefined;
}

export interface QueryGetUniversityInfoRequest {
  universityName: string;
}

export interface QueryGetUniversityInfoResponse {
  universityInfo: UniversityInfo | undefined;
}

export interface QueryAllUniversityInfoRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllUniversityInfoResponse {
  universityInfo: UniversityInfo[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetProfessorsExamsRequest: object = { examName: "" };

export const QueryGetProfessorsExamsRequest = {
  encode(
    message: QueryGetProfessorsExamsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.examName !== "") {
      writer.uint32(10).string(message.examName);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProfessorsExamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfessorsExamsRequest,
    } as QueryGetProfessorsExamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.examName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfessorsExamsRequest {
    const message = {
      ...baseQueryGetProfessorsExamsRequest,
    } as QueryGetProfessorsExamsRequest;
    if (object.examName !== undefined && object.examName !== null) {
      message.examName = String(object.examName);
    } else {
      message.examName = "";
    }
    return message;
  },

  toJSON(message: QueryGetProfessorsExamsRequest): unknown {
    const obj: any = {};
    message.examName !== undefined && (obj.examName = message.examName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfessorsExamsRequest>
  ): QueryGetProfessorsExamsRequest {
    const message = {
      ...baseQueryGetProfessorsExamsRequest,
    } as QueryGetProfessorsExamsRequest;
    if (object.examName !== undefined && object.examName !== null) {
      message.examName = object.examName;
    } else {
      message.examName = "";
    }
    return message;
  },
};

const baseQueryGetStudentInfoRequest: object = {};

export const QueryGetStudentInfoRequest = {
  encode(
    _: QueryGetStudentInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetStudentInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStudentInfoRequest,
    } as QueryGetStudentInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetStudentInfoRequest {
    const message = {
      ...baseQueryGetStudentInfoRequest,
    } as QueryGetStudentInfoRequest;
    return message;
  },

  toJSON(_: QueryGetStudentInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetStudentInfoRequest>
  ): QueryGetStudentInfoRequest {
    const message = {
      ...baseQueryGetStudentInfoRequest,
    } as QueryGetStudentInfoRequest;
    return message;
  },
};

const baseQueryGetStudentInfoResponse: object = {};

export const QueryGetStudentInfoResponse = {
  encode(
    message: QueryGetStudentInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.StudentInfo !== undefined) {
      StudentInfo.encode(
        message.StudentInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetStudentInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStudentInfoResponse,
    } as QueryGetStudentInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.StudentInfo = StudentInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStudentInfoResponse {
    const message = {
      ...baseQueryGetStudentInfoResponse,
    } as QueryGetStudentInfoResponse;
    if (object.StudentInfo !== undefined && object.StudentInfo !== null) {
      message.StudentInfo = StudentInfo.fromJSON(object.StudentInfo);
    } else {
      message.StudentInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetStudentInfoResponse): unknown {
    const obj: any = {};
    message.StudentInfo !== undefined &&
      (obj.StudentInfo = message.StudentInfo
        ? StudentInfo.toJSON(message.StudentInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStudentInfoResponse>
  ): QueryGetStudentInfoResponse {
    const message = {
      ...baseQueryGetStudentInfoResponse,
    } as QueryGetStudentInfoResponse;
    if (object.StudentInfo !== undefined && object.StudentInfo !== null) {
      message.StudentInfo = StudentInfo.fromPartial(object.StudentInfo);
    } else {
      message.StudentInfo = undefined;
    }
    return message;
  },
};

const baseQueryGetTranscriptOfRecordsRequest: object = {};

export const QueryGetTranscriptOfRecordsRequest = {
  encode(
    _: QueryGetTranscriptOfRecordsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTranscriptOfRecordsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTranscriptOfRecordsRequest,
    } as QueryGetTranscriptOfRecordsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetTranscriptOfRecordsRequest {
    const message = {
      ...baseQueryGetTranscriptOfRecordsRequest,
    } as QueryGetTranscriptOfRecordsRequest;
    return message;
  },

  toJSON(_: QueryGetTranscriptOfRecordsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetTranscriptOfRecordsRequest>
  ): QueryGetTranscriptOfRecordsRequest {
    const message = {
      ...baseQueryGetTranscriptOfRecordsRequest,
    } as QueryGetTranscriptOfRecordsRequest;
    return message;
  },
};

const baseQueryGetTranscriptOfRecordsResponse: object = {};

export const QueryGetTranscriptOfRecordsResponse = {
  encode(
    message: QueryGetTranscriptOfRecordsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.TranscriptOfRecords !== undefined) {
      TranscriptOfRecords.encode(
        message.TranscriptOfRecords,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTranscriptOfRecordsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTranscriptOfRecordsResponse,
    } as QueryGetTranscriptOfRecordsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TranscriptOfRecords = TranscriptOfRecords.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTranscriptOfRecordsResponse {
    const message = {
      ...baseQueryGetTranscriptOfRecordsResponse,
    } as QueryGetTranscriptOfRecordsResponse;
    if (
      object.TranscriptOfRecords !== undefined &&
      object.TranscriptOfRecords !== null
    ) {
      message.TranscriptOfRecords = TranscriptOfRecords.fromJSON(
        object.TranscriptOfRecords
      );
    } else {
      message.TranscriptOfRecords = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTranscriptOfRecordsResponse): unknown {
    const obj: any = {};
    message.TranscriptOfRecords !== undefined &&
      (obj.TranscriptOfRecords = message.TranscriptOfRecords
        ? TranscriptOfRecords.toJSON(message.TranscriptOfRecords)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTranscriptOfRecordsResponse>
  ): QueryGetTranscriptOfRecordsResponse {
    const message = {
      ...baseQueryGetTranscriptOfRecordsResponse,
    } as QueryGetTranscriptOfRecordsResponse;
    if (
      object.TranscriptOfRecords !== undefined &&
      object.TranscriptOfRecords !== null
    ) {
      message.TranscriptOfRecords = TranscriptOfRecords.fromPartial(
        object.TranscriptOfRecords
      );
    } else {
      message.TranscriptOfRecords = undefined;
    }
    return message;
  },
};

const baseQueryGetPersonalInfoRequest: object = {};

export const QueryGetPersonalInfoRequest = {
  encode(
    _: QueryGetPersonalInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPersonalInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPersonalInfoRequest,
    } as QueryGetPersonalInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetPersonalInfoRequest {
    const message = {
      ...baseQueryGetPersonalInfoRequest,
    } as QueryGetPersonalInfoRequest;
    return message;
  },

  toJSON(_: QueryGetPersonalInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetPersonalInfoRequest>
  ): QueryGetPersonalInfoRequest {
    const message = {
      ...baseQueryGetPersonalInfoRequest,
    } as QueryGetPersonalInfoRequest;
    return message;
  },
};

const baseQueryGetPersonalInfoResponse: object = {};

export const QueryGetPersonalInfoResponse = {
  encode(
    message: QueryGetPersonalInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.PersonalInfo !== undefined) {
      PersonalInfo.encode(
        message.PersonalInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPersonalInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPersonalInfoResponse,
    } as QueryGetPersonalInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PersonalInfo = PersonalInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPersonalInfoResponse {
    const message = {
      ...baseQueryGetPersonalInfoResponse,
    } as QueryGetPersonalInfoResponse;
    if (object.PersonalInfo !== undefined && object.PersonalInfo !== null) {
      message.PersonalInfo = PersonalInfo.fromJSON(object.PersonalInfo);
    } else {
      message.PersonalInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPersonalInfoResponse): unknown {
    const obj: any = {};
    message.PersonalInfo !== undefined &&
      (obj.PersonalInfo = message.PersonalInfo
        ? PersonalInfo.toJSON(message.PersonalInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPersonalInfoResponse>
  ): QueryGetPersonalInfoResponse {
    const message = {
      ...baseQueryGetPersonalInfoResponse,
    } as QueryGetPersonalInfoResponse;
    if (object.PersonalInfo !== undefined && object.PersonalInfo !== null) {
      message.PersonalInfo = PersonalInfo.fromPartial(object.PersonalInfo);
    } else {
      message.PersonalInfo = undefined;
    }
    return message;
  },
};

const baseQueryGetResidenceInfoRequest: object = {};

export const QueryGetResidenceInfoRequest = {
  encode(
    _: QueryGetResidenceInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetResidenceInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetResidenceInfoRequest,
    } as QueryGetResidenceInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetResidenceInfoRequest {
    const message = {
      ...baseQueryGetResidenceInfoRequest,
    } as QueryGetResidenceInfoRequest;
    return message;
  },

  toJSON(_: QueryGetResidenceInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetResidenceInfoRequest>
  ): QueryGetResidenceInfoRequest {
    const message = {
      ...baseQueryGetResidenceInfoRequest,
    } as QueryGetResidenceInfoRequest;
    return message;
  },
};

const baseQueryGetResidenceInfoResponse: object = {};

export const QueryGetResidenceInfoResponse = {
  encode(
    message: QueryGetResidenceInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ResidenceInfo !== undefined) {
      ResidenceInfo.encode(
        message.ResidenceInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetResidenceInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetResidenceInfoResponse,
    } as QueryGetResidenceInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ResidenceInfo = ResidenceInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetResidenceInfoResponse {
    const message = {
      ...baseQueryGetResidenceInfoResponse,
    } as QueryGetResidenceInfoResponse;
    if (object.ResidenceInfo !== undefined && object.ResidenceInfo !== null) {
      message.ResidenceInfo = ResidenceInfo.fromJSON(object.ResidenceInfo);
    } else {
      message.ResidenceInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetResidenceInfoResponse): unknown {
    const obj: any = {};
    message.ResidenceInfo !== undefined &&
      (obj.ResidenceInfo = message.ResidenceInfo
        ? ResidenceInfo.toJSON(message.ResidenceInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetResidenceInfoResponse>
  ): QueryGetResidenceInfoResponse {
    const message = {
      ...baseQueryGetResidenceInfoResponse,
    } as QueryGetResidenceInfoResponse;
    if (object.ResidenceInfo !== undefined && object.ResidenceInfo !== null) {
      message.ResidenceInfo = ResidenceInfo.fromPartial(object.ResidenceInfo);
    } else {
      message.ResidenceInfo = undefined;
    }
    return message;
  },
};

const baseQueryGetContactInfoRequest: object = {};

export const QueryGetContactInfoRequest = {
  encode(
    _: QueryGetContactInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetContactInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetContactInfoRequest,
    } as QueryGetContactInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetContactInfoRequest {
    const message = {
      ...baseQueryGetContactInfoRequest,
    } as QueryGetContactInfoRequest;
    return message;
  },

  toJSON(_: QueryGetContactInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetContactInfoRequest>
  ): QueryGetContactInfoRequest {
    const message = {
      ...baseQueryGetContactInfoRequest,
    } as QueryGetContactInfoRequest;
    return message;
  },
};

const baseQueryGetContactInfoResponse: object = {};

export const QueryGetContactInfoResponse = {
  encode(
    message: QueryGetContactInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ContactInfo !== undefined) {
      ContactInfo.encode(
        message.ContactInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetContactInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetContactInfoResponse,
    } as QueryGetContactInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ContactInfo = ContactInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetContactInfoResponse {
    const message = {
      ...baseQueryGetContactInfoResponse,
    } as QueryGetContactInfoResponse;
    if (object.ContactInfo !== undefined && object.ContactInfo !== null) {
      message.ContactInfo = ContactInfo.fromJSON(object.ContactInfo);
    } else {
      message.ContactInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetContactInfoResponse): unknown {
    const obj: any = {};
    message.ContactInfo !== undefined &&
      (obj.ContactInfo = message.ContactInfo
        ? ContactInfo.toJSON(message.ContactInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetContactInfoResponse>
  ): QueryGetContactInfoResponse {
    const message = {
      ...baseQueryGetContactInfoResponse,
    } as QueryGetContactInfoResponse;
    if (object.ContactInfo !== undefined && object.ContactInfo !== null) {
      message.ContactInfo = ContactInfo.fromPartial(object.ContactInfo);
    } else {
      message.ContactInfo = undefined;
    }
    return message;
  },
};

const baseQueryGetTaxesInfoRequest: object = {};

export const QueryGetTaxesInfoRequest = {
  encode(
    _: QueryGetTaxesInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTaxesInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTaxesInfoRequest,
    } as QueryGetTaxesInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetTaxesInfoRequest {
    const message = {
      ...baseQueryGetTaxesInfoRequest,
    } as QueryGetTaxesInfoRequest;
    return message;
  },

  toJSON(_: QueryGetTaxesInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetTaxesInfoRequest>
  ): QueryGetTaxesInfoRequest {
    const message = {
      ...baseQueryGetTaxesInfoRequest,
    } as QueryGetTaxesInfoRequest;
    return message;
  },
};

const baseQueryGetTaxesInfoResponse: object = {};

export const QueryGetTaxesInfoResponse = {
  encode(
    message: QueryGetTaxesInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.TaxesInfo !== undefined) {
      TaxesInfo.encode(message.TaxesInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTaxesInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTaxesInfoResponse,
    } as QueryGetTaxesInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TaxesInfo = TaxesInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTaxesInfoResponse {
    const message = {
      ...baseQueryGetTaxesInfoResponse,
    } as QueryGetTaxesInfoResponse;
    if (object.TaxesInfo !== undefined && object.TaxesInfo !== null) {
      message.TaxesInfo = TaxesInfo.fromJSON(object.TaxesInfo);
    } else {
      message.TaxesInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTaxesInfoResponse): unknown {
    const obj: any = {};
    message.TaxesInfo !== undefined &&
      (obj.TaxesInfo = message.TaxesInfo
        ? TaxesInfo.toJSON(message.TaxesInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTaxesInfoResponse>
  ): QueryGetTaxesInfoResponse {
    const message = {
      ...baseQueryGetTaxesInfoResponse,
    } as QueryGetTaxesInfoResponse;
    if (object.TaxesInfo !== undefined && object.TaxesInfo !== null) {
      message.TaxesInfo = TaxesInfo.fromPartial(object.TaxesInfo);
    } else {
      message.TaxesInfo = undefined;
    }
    return message;
  },
};

const baseQueryGetErasmusInfoRequest: object = {};

export const QueryGetErasmusInfoRequest = {
  encode(
    _: QueryGetErasmusInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetErasmusInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetErasmusInfoRequest,
    } as QueryGetErasmusInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetErasmusInfoRequest {
    const message = {
      ...baseQueryGetErasmusInfoRequest,
    } as QueryGetErasmusInfoRequest;
    return message;
  },

  toJSON(_: QueryGetErasmusInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetErasmusInfoRequest>
  ): QueryGetErasmusInfoRequest {
    const message = {
      ...baseQueryGetErasmusInfoRequest,
    } as QueryGetErasmusInfoRequest;
    return message;
  },
};

const baseQueryGetErasmusInfoResponse: object = {};

export const QueryGetErasmusInfoResponse = {
  encode(
    message: QueryGetErasmusInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ErasmusInfo !== undefined) {
      ErasmusInfo.encode(
        message.ErasmusInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetErasmusInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetErasmusInfoResponse,
    } as QueryGetErasmusInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ErasmusInfo = ErasmusInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetErasmusInfoResponse {
    const message = {
      ...baseQueryGetErasmusInfoResponse,
    } as QueryGetErasmusInfoResponse;
    if (object.ErasmusInfo !== undefined && object.ErasmusInfo !== null) {
      message.ErasmusInfo = ErasmusInfo.fromJSON(object.ErasmusInfo);
    } else {
      message.ErasmusInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetErasmusInfoResponse): unknown {
    const obj: any = {};
    message.ErasmusInfo !== undefined &&
      (obj.ErasmusInfo = message.ErasmusInfo
        ? ErasmusInfo.toJSON(message.ErasmusInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetErasmusInfoResponse>
  ): QueryGetErasmusInfoResponse {
    const message = {
      ...baseQueryGetErasmusInfoResponse,
    } as QueryGetErasmusInfoResponse;
    if (object.ErasmusInfo !== undefined && object.ErasmusInfo !== null) {
      message.ErasmusInfo = ErasmusInfo.fromPartial(object.ErasmusInfo);
    } else {
      message.ErasmusInfo = undefined;
    }
    return message;
  },
};

const baseQueryGetChainInfoRequest: object = {};

export const QueryGetChainInfoRequest = {
  encode(
    _: QueryGetChainInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetChainInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetChainInfoRequest,
    } as QueryGetChainInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetChainInfoRequest {
    const message = {
      ...baseQueryGetChainInfoRequest,
    } as QueryGetChainInfoRequest;
    return message;
  },

  toJSON(_: QueryGetChainInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetChainInfoRequest>
  ): QueryGetChainInfoRequest {
    const message = {
      ...baseQueryGetChainInfoRequest,
    } as QueryGetChainInfoRequest;
    return message;
  },
};

const baseQueryGetChainInfoResponse: object = {};

export const QueryGetChainInfoResponse = {
  encode(
    message: QueryGetChainInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ChainInfo !== undefined) {
      ChainInfo.encode(message.ChainInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetChainInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetChainInfoResponse,
    } as QueryGetChainInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ChainInfo = ChainInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetChainInfoResponse {
    const message = {
      ...baseQueryGetChainInfoResponse,
    } as QueryGetChainInfoResponse;
    if (object.ChainInfo !== undefined && object.ChainInfo !== null) {
      message.ChainInfo = ChainInfo.fromJSON(object.ChainInfo);
    } else {
      message.ChainInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetChainInfoResponse): unknown {
    const obj: any = {};
    message.ChainInfo !== undefined &&
      (obj.ChainInfo = message.ChainInfo
        ? ChainInfo.toJSON(message.ChainInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetChainInfoResponse>
  ): QueryGetChainInfoResponse {
    const message = {
      ...baseQueryGetChainInfoResponse,
    } as QueryGetChainInfoResponse;
    if (object.ChainInfo !== undefined && object.ChainInfo !== null) {
      message.ChainInfo = ChainInfo.fromPartial(object.ChainInfo);
    } else {
      message.ChainInfo = undefined;
    }
    return message;
  },
};

const baseQueryGetForeignUniversitiesRequest: object = { universityName: "" };

export const QueryGetForeignUniversitiesRequest = {
  encode(
    message: QueryGetForeignUniversitiesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.universityName !== "") {
      writer.uint32(10).string(message.universityName);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetForeignUniversitiesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetForeignUniversitiesRequest,
    } as QueryGetForeignUniversitiesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.universityName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetForeignUniversitiesRequest {
    const message = {
      ...baseQueryGetForeignUniversitiesRequest,
    } as QueryGetForeignUniversitiesRequest;
    if (object.universityName !== undefined && object.universityName !== null) {
      message.universityName = String(object.universityName);
    } else {
      message.universityName = "";
    }
    return message;
  },

  toJSON(message: QueryGetForeignUniversitiesRequest): unknown {
    const obj: any = {};
    message.universityName !== undefined &&
      (obj.universityName = message.universityName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetForeignUniversitiesRequest>
  ): QueryGetForeignUniversitiesRequest {
    const message = {
      ...baseQueryGetForeignUniversitiesRequest,
    } as QueryGetForeignUniversitiesRequest;
    if (object.universityName !== undefined && object.universityName !== null) {
      message.universityName = object.universityName;
    } else {
      message.universityName = "";
    }
    return message;
  },
};

const baseQueryGetForeignUniversitiesResponse: object = {};

export const QueryGetForeignUniversitiesResponse = {
  encode(
    message: QueryGetForeignUniversitiesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.foreignUniversities !== undefined) {
      ForeignUniversities.encode(
        message.foreignUniversities,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetForeignUniversitiesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetForeignUniversitiesResponse,
    } as QueryGetForeignUniversitiesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.foreignUniversities = ForeignUniversities.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetForeignUniversitiesResponse {
    const message = {
      ...baseQueryGetForeignUniversitiesResponse,
    } as QueryGetForeignUniversitiesResponse;
    if (
      object.foreignUniversities !== undefined &&
      object.foreignUniversities !== null
    ) {
      message.foreignUniversities = ForeignUniversities.fromJSON(
        object.foreignUniversities
      );
    } else {
      message.foreignUniversities = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetForeignUniversitiesResponse): unknown {
    const obj: any = {};
    message.foreignUniversities !== undefined &&
      (obj.foreignUniversities = message.foreignUniversities
        ? ForeignUniversities.toJSON(message.foreignUniversities)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetForeignUniversitiesResponse>
  ): QueryGetForeignUniversitiesResponse {
    const message = {
      ...baseQueryGetForeignUniversitiesResponse,
    } as QueryGetForeignUniversitiesResponse;
    if (
      object.foreignUniversities !== undefined &&
      object.foreignUniversities !== null
    ) {
      message.foreignUniversities = ForeignUniversities.fromPartial(
        object.foreignUniversities
      );
    } else {
      message.foreignUniversities = undefined;
    }
    return message;
  },
};

const baseQueryAllForeignUniversitiesRequest: object = {};

export const QueryAllForeignUniversitiesRequest = {
  encode(
    message: QueryAllForeignUniversitiesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllForeignUniversitiesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllForeignUniversitiesRequest,
    } as QueryAllForeignUniversitiesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllForeignUniversitiesRequest {
    const message = {
      ...baseQueryAllForeignUniversitiesRequest,
    } as QueryAllForeignUniversitiesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllForeignUniversitiesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllForeignUniversitiesRequest>
  ): QueryAllForeignUniversitiesRequest {
    const message = {
      ...baseQueryAllForeignUniversitiesRequest,
    } as QueryAllForeignUniversitiesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllForeignUniversitiesResponse: object = {};

export const QueryAllForeignUniversitiesResponse = {
  encode(
    message: QueryAllForeignUniversitiesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.foreignUniversities) {
      ForeignUniversities.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllForeignUniversitiesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllForeignUniversitiesResponse,
    } as QueryAllForeignUniversitiesResponse;
    message.foreignUniversities = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.foreignUniversities.push(
            ForeignUniversities.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllForeignUniversitiesResponse {
    const message = {
      ...baseQueryAllForeignUniversitiesResponse,
    } as QueryAllForeignUniversitiesResponse;
    message.foreignUniversities = [];
    if (
      object.foreignUniversities !== undefined &&
      object.foreignUniversities !== null
    ) {
      for (const e of object.foreignUniversities) {
        message.foreignUniversities.push(ForeignUniversities.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllForeignUniversitiesResponse): unknown {
    const obj: any = {};
    if (message.foreignUniversities) {
      obj.foreignUniversities = message.foreignUniversities.map((e) =>
        e ? ForeignUniversities.toJSON(e) : undefined
      );
    } else {
      obj.foreignUniversities = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllForeignUniversitiesResponse>
  ): QueryAllForeignUniversitiesResponse {
    const message = {
      ...baseQueryAllForeignUniversitiesResponse,
    } as QueryAllForeignUniversitiesResponse;
    message.foreignUniversities = [];
    if (
      object.foreignUniversities !== undefined &&
      object.foreignUniversities !== null
    ) {
      for (const e of object.foreignUniversities) {
        message.foreignUniversities.push(ForeignUniversities.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetProfessorsExamsUniroma1Request: object = { examName: "" };

export const QueryGetProfessorsExamsUniroma1Request = {
  encode(
    message: QueryGetProfessorsExamsUniroma1Request,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.examName !== "") {
      writer.uint32(10).string(message.examName);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProfessorsExamsUniroma1Request {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfessorsExamsUniroma1Request,
    } as QueryGetProfessorsExamsUniroma1Request;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.examName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfessorsExamsUniroma1Request {
    const message = {
      ...baseQueryGetProfessorsExamsUniroma1Request,
    } as QueryGetProfessorsExamsUniroma1Request;
    if (object.examName !== undefined && object.examName !== null) {
      message.examName = String(object.examName);
    } else {
      message.examName = "";
    }
    return message;
  },

  toJSON(message: QueryGetProfessorsExamsUniroma1Request): unknown {
    const obj: any = {};
    message.examName !== undefined && (obj.examName = message.examName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfessorsExamsUniroma1Request>
  ): QueryGetProfessorsExamsUniroma1Request {
    const message = {
      ...baseQueryGetProfessorsExamsUniroma1Request,
    } as QueryGetProfessorsExamsUniroma1Request;
    if (object.examName !== undefined && object.examName !== null) {
      message.examName = object.examName;
    } else {
      message.examName = "";
    }
    return message;
  },
};

const baseQueryGetProfessorsExamsUniroma1Response: object = {};

export const QueryGetProfessorsExamsUniroma1Response = {
  encode(
    message: QueryGetProfessorsExamsUniroma1Response,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.professorsExamsUniroma1 !== undefined) {
      ProfessorsExamsUniroma1.encode(
        message.professorsExamsUniroma1,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProfessorsExamsUniroma1Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfessorsExamsUniroma1Response,
    } as QueryGetProfessorsExamsUniroma1Response;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.professorsExamsUniroma1 = ProfessorsExamsUniroma1.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfessorsExamsUniroma1Response {
    const message = {
      ...baseQueryGetProfessorsExamsUniroma1Response,
    } as QueryGetProfessorsExamsUniroma1Response;
    if (
      object.professorsExamsUniroma1 !== undefined &&
      object.professorsExamsUniroma1 !== null
    ) {
      message.professorsExamsUniroma1 = ProfessorsExamsUniroma1.fromJSON(
        object.professorsExamsUniroma1
      );
    } else {
      message.professorsExamsUniroma1 = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProfessorsExamsUniroma1Response): unknown {
    const obj: any = {};
    message.professorsExamsUniroma1 !== undefined &&
      (obj.professorsExamsUniroma1 = message.professorsExamsUniroma1
        ? ProfessorsExamsUniroma1.toJSON(message.professorsExamsUniroma1)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfessorsExamsUniroma1Response>
  ): QueryGetProfessorsExamsUniroma1Response {
    const message = {
      ...baseQueryGetProfessorsExamsUniroma1Response,
    } as QueryGetProfessorsExamsUniroma1Response;
    if (
      object.professorsExamsUniroma1 !== undefined &&
      object.professorsExamsUniroma1 !== null
    ) {
      message.professorsExamsUniroma1 = ProfessorsExamsUniroma1.fromPartial(
        object.professorsExamsUniroma1
      );
    } else {
      message.professorsExamsUniroma1 = undefined;
    }
    return message;
  },
};

const baseQueryAllProfessorsExamsUniroma1Request: object = {};

export const QueryAllProfessorsExamsUniroma1Request = {
  encode(
    message: QueryAllProfessorsExamsUniroma1Request,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllProfessorsExamsUniroma1Request {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProfessorsExamsUniroma1Request,
    } as QueryAllProfessorsExamsUniroma1Request;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProfessorsExamsUniroma1Request {
    const message = {
      ...baseQueryAllProfessorsExamsUniroma1Request,
    } as QueryAllProfessorsExamsUniroma1Request;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProfessorsExamsUniroma1Request): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProfessorsExamsUniroma1Request>
  ): QueryAllProfessorsExamsUniroma1Request {
    const message = {
      ...baseQueryAllProfessorsExamsUniroma1Request,
    } as QueryAllProfessorsExamsUniroma1Request;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllProfessorsExamsUniroma1Response: object = {};

export const QueryAllProfessorsExamsUniroma1Response = {
  encode(
    message: QueryAllProfessorsExamsUniroma1Response,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.professorsExamsUniroma1) {
      ProfessorsExamsUniroma1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllProfessorsExamsUniroma1Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProfessorsExamsUniroma1Response,
    } as QueryAllProfessorsExamsUniroma1Response;
    message.professorsExamsUniroma1 = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.professorsExamsUniroma1.push(
            ProfessorsExamsUniroma1.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProfessorsExamsUniroma1Response {
    const message = {
      ...baseQueryAllProfessorsExamsUniroma1Response,
    } as QueryAllProfessorsExamsUniroma1Response;
    message.professorsExamsUniroma1 = [];
    if (
      object.professorsExamsUniroma1 !== undefined &&
      object.professorsExamsUniroma1 !== null
    ) {
      for (const e of object.professorsExamsUniroma1) {
        message.professorsExamsUniroma1.push(
          ProfessorsExamsUniroma1.fromJSON(e)
        );
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProfessorsExamsUniroma1Response): unknown {
    const obj: any = {};
    if (message.professorsExamsUniroma1) {
      obj.professorsExamsUniroma1 = message.professorsExamsUniroma1.map((e) =>
        e ? ProfessorsExamsUniroma1.toJSON(e) : undefined
      );
    } else {
      obj.professorsExamsUniroma1 = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProfessorsExamsUniroma1Response>
  ): QueryAllProfessorsExamsUniroma1Response {
    const message = {
      ...baseQueryAllProfessorsExamsUniroma1Response,
    } as QueryAllProfessorsExamsUniroma1Response;
    message.professorsExamsUniroma1 = [];
    if (
      object.professorsExamsUniroma1 !== undefined &&
      object.professorsExamsUniroma1 !== null
    ) {
      for (const e of object.professorsExamsUniroma1) {
        message.professorsExamsUniroma1.push(
          ProfessorsExamsUniroma1.fromPartial(e)
        );
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetStoredStudentUniroma1Request: object = { index: "" };

export const QueryGetStoredStudentUniroma1Request = {
  encode(
    message: QueryGetStoredStudentUniroma1Request,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetStoredStudentUniroma1Request {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStoredStudentUniroma1Request,
    } as QueryGetStoredStudentUniroma1Request;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredStudentUniroma1Request {
    const message = {
      ...baseQueryGetStoredStudentUniroma1Request,
    } as QueryGetStoredStudentUniroma1Request;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetStoredStudentUniroma1Request): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStoredStudentUniroma1Request>
  ): QueryGetStoredStudentUniroma1Request {
    const message = {
      ...baseQueryGetStoredStudentUniroma1Request,
    } as QueryGetStoredStudentUniroma1Request;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetStoredStudentUniroma1Response: object = {};

export const QueryGetStoredStudentUniroma1Response = {
  encode(
    message: QueryGetStoredStudentUniroma1Response,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.storedStudentUniroma1 !== undefined) {
      StoredStudentUniroma1.encode(
        message.storedStudentUniroma1,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetStoredStudentUniroma1Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStoredStudentUniroma1Response,
    } as QueryGetStoredStudentUniroma1Response;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedStudentUniroma1 = StoredStudentUniroma1.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredStudentUniroma1Response {
    const message = {
      ...baseQueryGetStoredStudentUniroma1Response,
    } as QueryGetStoredStudentUniroma1Response;
    if (
      object.storedStudentUniroma1 !== undefined &&
      object.storedStudentUniroma1 !== null
    ) {
      message.storedStudentUniroma1 = StoredStudentUniroma1.fromJSON(
        object.storedStudentUniroma1
      );
    } else {
      message.storedStudentUniroma1 = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetStoredStudentUniroma1Response): unknown {
    const obj: any = {};
    message.storedStudentUniroma1 !== undefined &&
      (obj.storedStudentUniroma1 = message.storedStudentUniroma1
        ? StoredStudentUniroma1.toJSON(message.storedStudentUniroma1)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStoredStudentUniroma1Response>
  ): QueryGetStoredStudentUniroma1Response {
    const message = {
      ...baseQueryGetStoredStudentUniroma1Response,
    } as QueryGetStoredStudentUniroma1Response;
    if (
      object.storedStudentUniroma1 !== undefined &&
      object.storedStudentUniroma1 !== null
    ) {
      message.storedStudentUniroma1 = StoredStudentUniroma1.fromPartial(
        object.storedStudentUniroma1
      );
    } else {
      message.storedStudentUniroma1 = undefined;
    }
    return message;
  },
};

const baseQueryAllStoredStudentUniroma1Request: object = {};

export const QueryAllStoredStudentUniroma1Request = {
  encode(
    message: QueryAllStoredStudentUniroma1Request,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllStoredStudentUniroma1Request {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStoredStudentUniroma1Request,
    } as QueryAllStoredStudentUniroma1Request;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredStudentUniroma1Request {
    const message = {
      ...baseQueryAllStoredStudentUniroma1Request,
    } as QueryAllStoredStudentUniroma1Request;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStoredStudentUniroma1Request): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStoredStudentUniroma1Request>
  ): QueryAllStoredStudentUniroma1Request {
    const message = {
      ...baseQueryAllStoredStudentUniroma1Request,
    } as QueryAllStoredStudentUniroma1Request;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllStoredStudentUniroma1Response: object = {};

export const QueryAllStoredStudentUniroma1Response = {
  encode(
    message: QueryAllStoredStudentUniroma1Response,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.storedStudentUniroma1) {
      StoredStudentUniroma1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllStoredStudentUniroma1Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStoredStudentUniroma1Response,
    } as QueryAllStoredStudentUniroma1Response;
    message.storedStudentUniroma1 = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedStudentUniroma1.push(
            StoredStudentUniroma1.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredStudentUniroma1Response {
    const message = {
      ...baseQueryAllStoredStudentUniroma1Response,
    } as QueryAllStoredStudentUniroma1Response;
    message.storedStudentUniroma1 = [];
    if (
      object.storedStudentUniroma1 !== undefined &&
      object.storedStudentUniroma1 !== null
    ) {
      for (const e of object.storedStudentUniroma1) {
        message.storedStudentUniroma1.push(StoredStudentUniroma1.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStoredStudentUniroma1Response): unknown {
    const obj: any = {};
    if (message.storedStudentUniroma1) {
      obj.storedStudentUniroma1 = message.storedStudentUniroma1.map((e) =>
        e ? StoredStudentUniroma1.toJSON(e) : undefined
      );
    } else {
      obj.storedStudentUniroma1 = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStoredStudentUniroma1Response>
  ): QueryAllStoredStudentUniroma1Response {
    const message = {
      ...baseQueryAllStoredStudentUniroma1Response,
    } as QueryAllStoredStudentUniroma1Response;
    message.storedStudentUniroma1 = [];
    if (
      object.storedStudentUniroma1 !== undefined &&
      object.storedStudentUniroma1 !== null
    ) {
      for (const e of object.storedStudentUniroma1) {
        message.storedStudentUniroma1.push(
          StoredStudentUniroma1.fromPartial(e)
        );
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetProfessorsExamsUnipiRequest: object = { examName: "" };

export const QueryGetProfessorsExamsUnipiRequest = {
  encode(
    message: QueryGetProfessorsExamsUnipiRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.examName !== "") {
      writer.uint32(10).string(message.examName);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProfessorsExamsUnipiRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfessorsExamsUnipiRequest,
    } as QueryGetProfessorsExamsUnipiRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.examName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfessorsExamsUnipiRequest {
    const message = {
      ...baseQueryGetProfessorsExamsUnipiRequest,
    } as QueryGetProfessorsExamsUnipiRequest;
    if (object.examName !== undefined && object.examName !== null) {
      message.examName = String(object.examName);
    } else {
      message.examName = "";
    }
    return message;
  },

  toJSON(message: QueryGetProfessorsExamsUnipiRequest): unknown {
    const obj: any = {};
    message.examName !== undefined && (obj.examName = message.examName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfessorsExamsUnipiRequest>
  ): QueryGetProfessorsExamsUnipiRequest {
    const message = {
      ...baseQueryGetProfessorsExamsUnipiRequest,
    } as QueryGetProfessorsExamsUnipiRequest;
    if (object.examName !== undefined && object.examName !== null) {
      message.examName = object.examName;
    } else {
      message.examName = "";
    }
    return message;
  },
};

const baseQueryGetProfessorsExamsUnipiResponse: object = {};

export const QueryGetProfessorsExamsUnipiResponse = {
  encode(
    message: QueryGetProfessorsExamsUnipiResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.professorsExamsUnipi !== undefined) {
      ProfessorsExamsUnipi.encode(
        message.professorsExamsUnipi,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProfessorsExamsUnipiResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfessorsExamsUnipiResponse,
    } as QueryGetProfessorsExamsUnipiResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.professorsExamsUnipi = ProfessorsExamsUnipi.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfessorsExamsUnipiResponse {
    const message = {
      ...baseQueryGetProfessorsExamsUnipiResponse,
    } as QueryGetProfessorsExamsUnipiResponse;
    if (
      object.professorsExamsUnipi !== undefined &&
      object.professorsExamsUnipi !== null
    ) {
      message.professorsExamsUnipi = ProfessorsExamsUnipi.fromJSON(
        object.professorsExamsUnipi
      );
    } else {
      message.professorsExamsUnipi = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProfessorsExamsUnipiResponse): unknown {
    const obj: any = {};
    message.professorsExamsUnipi !== undefined &&
      (obj.professorsExamsUnipi = message.professorsExamsUnipi
        ? ProfessorsExamsUnipi.toJSON(message.professorsExamsUnipi)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfessorsExamsUnipiResponse>
  ): QueryGetProfessorsExamsUnipiResponse {
    const message = {
      ...baseQueryGetProfessorsExamsUnipiResponse,
    } as QueryGetProfessorsExamsUnipiResponse;
    if (
      object.professorsExamsUnipi !== undefined &&
      object.professorsExamsUnipi !== null
    ) {
      message.professorsExamsUnipi = ProfessorsExamsUnipi.fromPartial(
        object.professorsExamsUnipi
      );
    } else {
      message.professorsExamsUnipi = undefined;
    }
    return message;
  },
};

const baseQueryAllProfessorsExamsUnipiRequest: object = {};

export const QueryAllProfessorsExamsUnipiRequest = {
  encode(
    message: QueryAllProfessorsExamsUnipiRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllProfessorsExamsUnipiRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProfessorsExamsUnipiRequest,
    } as QueryAllProfessorsExamsUnipiRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProfessorsExamsUnipiRequest {
    const message = {
      ...baseQueryAllProfessorsExamsUnipiRequest,
    } as QueryAllProfessorsExamsUnipiRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProfessorsExamsUnipiRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProfessorsExamsUnipiRequest>
  ): QueryAllProfessorsExamsUnipiRequest {
    const message = {
      ...baseQueryAllProfessorsExamsUnipiRequest,
    } as QueryAllProfessorsExamsUnipiRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllProfessorsExamsUnipiResponse: object = {};

export const QueryAllProfessorsExamsUnipiResponse = {
  encode(
    message: QueryAllProfessorsExamsUnipiResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.professorsExamsUnipi) {
      ProfessorsExamsUnipi.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllProfessorsExamsUnipiResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProfessorsExamsUnipiResponse,
    } as QueryAllProfessorsExamsUnipiResponse;
    message.professorsExamsUnipi = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.professorsExamsUnipi.push(
            ProfessorsExamsUnipi.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProfessorsExamsUnipiResponse {
    const message = {
      ...baseQueryAllProfessorsExamsUnipiResponse,
    } as QueryAllProfessorsExamsUnipiResponse;
    message.professorsExamsUnipi = [];
    if (
      object.professorsExamsUnipi !== undefined &&
      object.professorsExamsUnipi !== null
    ) {
      for (const e of object.professorsExamsUnipi) {
        message.professorsExamsUnipi.push(ProfessorsExamsUnipi.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProfessorsExamsUnipiResponse): unknown {
    const obj: any = {};
    if (message.professorsExamsUnipi) {
      obj.professorsExamsUnipi = message.professorsExamsUnipi.map((e) =>
        e ? ProfessorsExamsUnipi.toJSON(e) : undefined
      );
    } else {
      obj.professorsExamsUnipi = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProfessorsExamsUnipiResponse>
  ): QueryAllProfessorsExamsUnipiResponse {
    const message = {
      ...baseQueryAllProfessorsExamsUnipiResponse,
    } as QueryAllProfessorsExamsUnipiResponse;
    message.professorsExamsUnipi = [];
    if (
      object.professorsExamsUnipi !== undefined &&
      object.professorsExamsUnipi !== null
    ) {
      for (const e of object.professorsExamsUnipi) {
        message.professorsExamsUnipi.push(ProfessorsExamsUnipi.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetStoredStudentUnipiRequest: object = { index: "" };

export const QueryGetStoredStudentUnipiRequest = {
  encode(
    message: QueryGetStoredStudentUnipiRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetStoredStudentUnipiRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStoredStudentUnipiRequest,
    } as QueryGetStoredStudentUnipiRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredStudentUnipiRequest {
    const message = {
      ...baseQueryGetStoredStudentUnipiRequest,
    } as QueryGetStoredStudentUnipiRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetStoredStudentUnipiRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStoredStudentUnipiRequest>
  ): QueryGetStoredStudentUnipiRequest {
    const message = {
      ...baseQueryGetStoredStudentUnipiRequest,
    } as QueryGetStoredStudentUnipiRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetStoredStudentUnipiResponse: object = {};

export const QueryGetStoredStudentUnipiResponse = {
  encode(
    message: QueryGetStoredStudentUnipiResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.storedStudentUnipi !== undefined) {
      StoredStudentUnipi.encode(
        message.storedStudentUnipi,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetStoredStudentUnipiResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStoredStudentUnipiResponse,
    } as QueryGetStoredStudentUnipiResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedStudentUnipi = StoredStudentUnipi.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredStudentUnipiResponse {
    const message = {
      ...baseQueryGetStoredStudentUnipiResponse,
    } as QueryGetStoredStudentUnipiResponse;
    if (
      object.storedStudentUnipi !== undefined &&
      object.storedStudentUnipi !== null
    ) {
      message.storedStudentUnipi = StoredStudentUnipi.fromJSON(
        object.storedStudentUnipi
      );
    } else {
      message.storedStudentUnipi = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetStoredStudentUnipiResponse): unknown {
    const obj: any = {};
    message.storedStudentUnipi !== undefined &&
      (obj.storedStudentUnipi = message.storedStudentUnipi
        ? StoredStudentUnipi.toJSON(message.storedStudentUnipi)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStoredStudentUnipiResponse>
  ): QueryGetStoredStudentUnipiResponse {
    const message = {
      ...baseQueryGetStoredStudentUnipiResponse,
    } as QueryGetStoredStudentUnipiResponse;
    if (
      object.storedStudentUnipi !== undefined &&
      object.storedStudentUnipi !== null
    ) {
      message.storedStudentUnipi = StoredStudentUnipi.fromPartial(
        object.storedStudentUnipi
      );
    } else {
      message.storedStudentUnipi = undefined;
    }
    return message;
  },
};

const baseQueryAllStoredStudentUnipiRequest: object = {};

export const QueryAllStoredStudentUnipiRequest = {
  encode(
    message: QueryAllStoredStudentUnipiRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllStoredStudentUnipiRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStoredStudentUnipiRequest,
    } as QueryAllStoredStudentUnipiRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredStudentUnipiRequest {
    const message = {
      ...baseQueryAllStoredStudentUnipiRequest,
    } as QueryAllStoredStudentUnipiRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStoredStudentUnipiRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStoredStudentUnipiRequest>
  ): QueryAllStoredStudentUnipiRequest {
    const message = {
      ...baseQueryAllStoredStudentUnipiRequest,
    } as QueryAllStoredStudentUnipiRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllStoredStudentUnipiResponse: object = {};

export const QueryAllStoredStudentUnipiResponse = {
  encode(
    message: QueryAllStoredStudentUnipiResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.storedStudentUnipi) {
      StoredStudentUnipi.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllStoredStudentUnipiResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStoredStudentUnipiResponse,
    } as QueryAllStoredStudentUnipiResponse;
    message.storedStudentUnipi = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedStudentUnipi.push(
            StoredStudentUnipi.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredStudentUnipiResponse {
    const message = {
      ...baseQueryAllStoredStudentUnipiResponse,
    } as QueryAllStoredStudentUnipiResponse;
    message.storedStudentUnipi = [];
    if (
      object.storedStudentUnipi !== undefined &&
      object.storedStudentUnipi !== null
    ) {
      for (const e of object.storedStudentUnipi) {
        message.storedStudentUnipi.push(StoredStudentUnipi.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStoredStudentUnipiResponse): unknown {
    const obj: any = {};
    if (message.storedStudentUnipi) {
      obj.storedStudentUnipi = message.storedStudentUnipi.map((e) =>
        e ? StoredStudentUnipi.toJSON(e) : undefined
      );
    } else {
      obj.storedStudentUnipi = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStoredStudentUnipiResponse>
  ): QueryAllStoredStudentUnipiResponse {
    const message = {
      ...baseQueryAllStoredStudentUnipiResponse,
    } as QueryAllStoredStudentUnipiResponse;
    message.storedStudentUnipi = [];
    if (
      object.storedStudentUnipi !== undefined &&
      object.storedStudentUnipi !== null
    ) {
      for (const e of object.storedStudentUnipi) {
        message.storedStudentUnipi.push(StoredStudentUnipi.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetUniversityInfoRequest: object = { universityName: "" };

export const QueryGetUniversityInfoRequest = {
  encode(
    message: QueryGetUniversityInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.universityName !== "") {
      writer.uint32(10).string(message.universityName);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetUniversityInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetUniversityInfoRequest,
    } as QueryGetUniversityInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.universityName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUniversityInfoRequest {
    const message = {
      ...baseQueryGetUniversityInfoRequest,
    } as QueryGetUniversityInfoRequest;
    if (object.universityName !== undefined && object.universityName !== null) {
      message.universityName = String(object.universityName);
    } else {
      message.universityName = "";
    }
    return message;
  },

  toJSON(message: QueryGetUniversityInfoRequest): unknown {
    const obj: any = {};
    message.universityName !== undefined &&
      (obj.universityName = message.universityName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetUniversityInfoRequest>
  ): QueryGetUniversityInfoRequest {
    const message = {
      ...baseQueryGetUniversityInfoRequest,
    } as QueryGetUniversityInfoRequest;
    if (object.universityName !== undefined && object.universityName !== null) {
      message.universityName = object.universityName;
    } else {
      message.universityName = "";
    }
    return message;
  },
};

const baseQueryGetUniversityInfoResponse: object = {};

export const QueryGetUniversityInfoResponse = {
  encode(
    message: QueryGetUniversityInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.universityInfo !== undefined) {
      UniversityInfo.encode(
        message.universityInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetUniversityInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetUniversityInfoResponse,
    } as QueryGetUniversityInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.universityInfo = UniversityInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUniversityInfoResponse {
    const message = {
      ...baseQueryGetUniversityInfoResponse,
    } as QueryGetUniversityInfoResponse;
    if (object.universityInfo !== undefined && object.universityInfo !== null) {
      message.universityInfo = UniversityInfo.fromJSON(object.universityInfo);
    } else {
      message.universityInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetUniversityInfoResponse): unknown {
    const obj: any = {};
    message.universityInfo !== undefined &&
      (obj.universityInfo = message.universityInfo
        ? UniversityInfo.toJSON(message.universityInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetUniversityInfoResponse>
  ): QueryGetUniversityInfoResponse {
    const message = {
      ...baseQueryGetUniversityInfoResponse,
    } as QueryGetUniversityInfoResponse;
    if (object.universityInfo !== undefined && object.universityInfo !== null) {
      message.universityInfo = UniversityInfo.fromPartial(
        object.universityInfo
      );
    } else {
      message.universityInfo = undefined;
    }
    return message;
  },
};

const baseQueryAllUniversityInfoRequest: object = {};

export const QueryAllUniversityInfoRequest = {
  encode(
    message: QueryAllUniversityInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllUniversityInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllUniversityInfoRequest,
    } as QueryAllUniversityInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUniversityInfoRequest {
    const message = {
      ...baseQueryAllUniversityInfoRequest,
    } as QueryAllUniversityInfoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUniversityInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllUniversityInfoRequest>
  ): QueryAllUniversityInfoRequest {
    const message = {
      ...baseQueryAllUniversityInfoRequest,
    } as QueryAllUniversityInfoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllUniversityInfoResponse: object = {};

export const QueryAllUniversityInfoResponse = {
  encode(
    message: QueryAllUniversityInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.universityInfo) {
      UniversityInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllUniversityInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllUniversityInfoResponse,
    } as QueryAllUniversityInfoResponse;
    message.universityInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.universityInfo.push(
            UniversityInfo.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUniversityInfoResponse {
    const message = {
      ...baseQueryAllUniversityInfoResponse,
    } as QueryAllUniversityInfoResponse;
    message.universityInfo = [];
    if (object.universityInfo !== undefined && object.universityInfo !== null) {
      for (const e of object.universityInfo) {
        message.universityInfo.push(UniversityInfo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUniversityInfoResponse): unknown {
    const obj: any = {};
    if (message.universityInfo) {
      obj.universityInfo = message.universityInfo.map((e) =>
        e ? UniversityInfo.toJSON(e) : undefined
      );
    } else {
      obj.universityInfo = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllUniversityInfoResponse>
  ): QueryAllUniversityInfoResponse {
    const message = {
      ...baseQueryAllUniversityInfoResponse,
    } as QueryAllUniversityInfoResponse;
    message.universityInfo = [];
    if (object.universityInfo !== undefined && object.universityInfo !== null) {
      for (const e of object.universityInfo) {
        message.universityInfo.push(UniversityInfo.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a StudentInfo by index. */
  StudentInfo(
    request: QueryGetStudentInfoRequest
  ): Promise<QueryGetStudentInfoResponse>;
  /** Queries a TranscriptOfRecords by index. */
  TranscriptOfRecords(
    request: QueryGetTranscriptOfRecordsRequest
  ): Promise<QueryGetTranscriptOfRecordsResponse>;
  /** Queries a PersonalInfo by index. */
  PersonalInfo(
    request: QueryGetPersonalInfoRequest
  ): Promise<QueryGetPersonalInfoResponse>;
  /** Queries a ResidenceInfo by index. */
  ResidenceInfo(
    request: QueryGetResidenceInfoRequest
  ): Promise<QueryGetResidenceInfoResponse>;
  /** Queries a ContactInfo by index. */
  ContactInfo(
    request: QueryGetContactInfoRequest
  ): Promise<QueryGetContactInfoResponse>;
  /** Queries a TaxesInfo by index. */
  TaxesInfo(
    request: QueryGetTaxesInfoRequest
  ): Promise<QueryGetTaxesInfoResponse>;
  /** Queries a ErasmusInfo by index. */
  ErasmusInfo(
    request: QueryGetErasmusInfoRequest
  ): Promise<QueryGetErasmusInfoResponse>;
  /** Queries a ChainInfo by index. */
  ChainInfo(
    request: QueryGetChainInfoRequest
  ): Promise<QueryGetChainInfoResponse>;
  /** Queries a ForeignUniversities by index. */
  ForeignUniversities(
    request: QueryGetForeignUniversitiesRequest
  ): Promise<QueryGetForeignUniversitiesResponse>;
  /** Queries a list of ForeignUniversities items. */
  ForeignUniversitiesAll(
    request: QueryAllForeignUniversitiesRequest
  ): Promise<QueryAllForeignUniversitiesResponse>;
  /** Queries a ProfessorsExamsUniroma1 by index. */
  ProfessorsExamsUniroma1(
    request: QueryGetProfessorsExamsUniroma1Request
  ): Promise<QueryGetProfessorsExamsUniroma1Response>;
  /** Queries a list of ProfessorsExamsUniroma1 items. */
  ProfessorsExamsUniroma1All(
    request: QueryAllProfessorsExamsUniroma1Request
  ): Promise<QueryAllProfessorsExamsUniroma1Response>;
  /** Queries a StoredStudentUniroma1 by index. */
  StoredStudentUniroma1(
    request: QueryGetStoredStudentUniroma1Request
  ): Promise<QueryGetStoredStudentUniroma1Response>;
  /** Queries a list of StoredStudentUniroma1 items. */
  StoredStudentUniroma1All(
    request: QueryAllStoredStudentUniroma1Request
  ): Promise<QueryAllStoredStudentUniroma1Response>;
  /** Queries a ProfessorsExamsUnipi by index. */
  ProfessorsExamsUnipi(
    request: QueryGetProfessorsExamsUnipiRequest
  ): Promise<QueryGetProfessorsExamsUnipiResponse>;
  /** Queries a list of ProfessorsExamsUnipi items. */
  ProfessorsExamsUnipiAll(
    request: QueryAllProfessorsExamsUnipiRequest
  ): Promise<QueryAllProfessorsExamsUnipiResponse>;
  /** Queries a StoredStudentUnipi by index. */
  StoredStudentUnipi(
    request: QueryGetStoredStudentUnipiRequest
  ): Promise<QueryGetStoredStudentUnipiResponse>;
  /** Queries a list of StoredStudentUnipi items. */
  StoredStudentUnipiAll(
    request: QueryAllStoredStudentUnipiRequest
  ): Promise<QueryAllStoredStudentUnipiResponse>;
  /** Queries a UniversityInfo by index. */
  UniversityInfo(
    request: QueryGetUniversityInfoRequest
  ): Promise<QueryGetUniversityInfoResponse>;
  /** Queries a list of UniversityInfo items. */
  UniversityInfoAll(
    request: QueryAllUniversityInfoRequest
  ): Promise<QueryAllUniversityInfoResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  StudentInfo(
    request: QueryGetStudentInfoRequest
  ): Promise<QueryGetStudentInfoResponse> {
    const data = QueryGetStudentInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "StudentInfo",
      data
    );
    return promise.then((data) =>
      QueryGetStudentInfoResponse.decode(new Reader(data))
    );
  }

  TranscriptOfRecords(
    request: QueryGetTranscriptOfRecordsRequest
  ): Promise<QueryGetTranscriptOfRecordsResponse> {
    const data = QueryGetTranscriptOfRecordsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "TranscriptOfRecords",
      data
    );
    return promise.then((data) =>
      QueryGetTranscriptOfRecordsResponse.decode(new Reader(data))
    );
  }

  PersonalInfo(
    request: QueryGetPersonalInfoRequest
  ): Promise<QueryGetPersonalInfoResponse> {
    const data = QueryGetPersonalInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "PersonalInfo",
      data
    );
    return promise.then((data) =>
      QueryGetPersonalInfoResponse.decode(new Reader(data))
    );
  }

  ResidenceInfo(
    request: QueryGetResidenceInfoRequest
  ): Promise<QueryGetResidenceInfoResponse> {
    const data = QueryGetResidenceInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ResidenceInfo",
      data
    );
    return promise.then((data) =>
      QueryGetResidenceInfoResponse.decode(new Reader(data))
    );
  }

  ContactInfo(
    request: QueryGetContactInfoRequest
  ): Promise<QueryGetContactInfoResponse> {
    const data = QueryGetContactInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ContactInfo",
      data
    );
    return promise.then((data) =>
      QueryGetContactInfoResponse.decode(new Reader(data))
    );
  }

  TaxesInfo(
    request: QueryGetTaxesInfoRequest
  ): Promise<QueryGetTaxesInfoResponse> {
    const data = QueryGetTaxesInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "TaxesInfo",
      data
    );
    return promise.then((data) =>
      QueryGetTaxesInfoResponse.decode(new Reader(data))
    );
  }

  ErasmusInfo(
    request: QueryGetErasmusInfoRequest
  ): Promise<QueryGetErasmusInfoResponse> {
    const data = QueryGetErasmusInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ErasmusInfo",
      data
    );
    return promise.then((data) =>
      QueryGetErasmusInfoResponse.decode(new Reader(data))
    );
  }

  ChainInfo(
    request: QueryGetChainInfoRequest
  ): Promise<QueryGetChainInfoResponse> {
    const data = QueryGetChainInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ChainInfo",
      data
    );
    return promise.then((data) =>
      QueryGetChainInfoResponse.decode(new Reader(data))
    );
  }

  ForeignUniversities(
    request: QueryGetForeignUniversitiesRequest
  ): Promise<QueryGetForeignUniversitiesResponse> {
    const data = QueryGetForeignUniversitiesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ForeignUniversities",
      data
    );
    return promise.then((data) =>
      QueryGetForeignUniversitiesResponse.decode(new Reader(data))
    );
  }

  ForeignUniversitiesAll(
    request: QueryAllForeignUniversitiesRequest
  ): Promise<QueryAllForeignUniversitiesResponse> {
    const data = QueryAllForeignUniversitiesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ForeignUniversitiesAll",
      data
    );
    return promise.then((data) =>
      QueryAllForeignUniversitiesResponse.decode(new Reader(data))
    );
  }

  ProfessorsExamsUniroma1(
    request: QueryGetProfessorsExamsUniroma1Request
  ): Promise<QueryGetProfessorsExamsUniroma1Response> {
    const data = QueryGetProfessorsExamsUniroma1Request.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ProfessorsExamsUniroma1",
      data
    );
    return promise.then((data) =>
      QueryGetProfessorsExamsUniroma1Response.decode(new Reader(data))
    );
  }

  ProfessorsExamsUniroma1All(
    request: QueryAllProfessorsExamsUniroma1Request
  ): Promise<QueryAllProfessorsExamsUniroma1Response> {
    const data = QueryAllProfessorsExamsUniroma1Request.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ProfessorsExamsUniroma1All",
      data
    );
    return promise.then((data) =>
      QueryAllProfessorsExamsUniroma1Response.decode(new Reader(data))
    );
  }

  StoredStudentUniroma1(
    request: QueryGetStoredStudentUniroma1Request
  ): Promise<QueryGetStoredStudentUniroma1Response> {
    const data = QueryGetStoredStudentUniroma1Request.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "StoredStudentUniroma1",
      data
    );
    return promise.then((data) =>
      QueryGetStoredStudentUniroma1Response.decode(new Reader(data))
    );
  }

  StoredStudentUniroma1All(
    request: QueryAllStoredStudentUniroma1Request
  ): Promise<QueryAllStoredStudentUniroma1Response> {
    const data = QueryAllStoredStudentUniroma1Request.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "StoredStudentUniroma1All",
      data
    );
    return promise.then((data) =>
      QueryAllStoredStudentUniroma1Response.decode(new Reader(data))
    );
  }

  ProfessorsExamsUnipi(
    request: QueryGetProfessorsExamsUnipiRequest
  ): Promise<QueryGetProfessorsExamsUnipiResponse> {
    const data = QueryGetProfessorsExamsUnipiRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ProfessorsExamsUnipi",
      data
    );
    return promise.then((data) =>
      QueryGetProfessorsExamsUnipiResponse.decode(new Reader(data))
    );
  }

  ProfessorsExamsUnipiAll(
    request: QueryAllProfessorsExamsUnipiRequest
  ): Promise<QueryAllProfessorsExamsUnipiResponse> {
    const data = QueryAllProfessorsExamsUnipiRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ProfessorsExamsUnipiAll",
      data
    );
    return promise.then((data) =>
      QueryAllProfessorsExamsUnipiResponse.decode(new Reader(data))
    );
  }

  StoredStudentUnipi(
    request: QueryGetStoredStudentUnipiRequest
  ): Promise<QueryGetStoredStudentUnipiResponse> {
    const data = QueryGetStoredStudentUnipiRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "StoredStudentUnipi",
      data
    );
    return promise.then((data) =>
      QueryGetStoredStudentUnipiResponse.decode(new Reader(data))
    );
  }

  StoredStudentUnipiAll(
    request: QueryAllStoredStudentUnipiRequest
  ): Promise<QueryAllStoredStudentUnipiResponse> {
    const data = QueryAllStoredStudentUnipiRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "StoredStudentUnipiAll",
      data
    );
    return promise.then((data) =>
      QueryAllStoredStudentUnipiResponse.decode(new Reader(data))
    );
  }

  UniversityInfo(
    request: QueryGetUniversityInfoRequest
  ): Promise<QueryGetUniversityInfoResponse> {
    const data = QueryGetUniversityInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "UniversityInfo",
      data
    );
    return promise.then((data) =>
      QueryGetUniversityInfoResponse.decode(new Reader(data))
    );
  }

  UniversityInfoAll(
    request: QueryAllUniversityInfoRequest
  ): Promise<QueryAllUniversityInfoResponse> {
    const data = QueryAllUniversityInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "UniversityInfoAll",
      data
    );
    return promise.then((data) =>
      QueryAllUniversityInfoResponse.decode(new Reader(data))
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
