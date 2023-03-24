/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../universitychainit/params";
import { ProfessorsExams } from "../universitychainit/professors_exams";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { StudentInfo } from "../universitychainit/student_info";
import { ExamsInfo } from "../universitychainit/exams_info";
import { TranscriptOfRecords } from "../universitychainit/transcript_of_records";
import { PersonalInfo } from "../universitychainit/personal_info";
import { ResidenceInfo } from "../universitychainit/residence_info";
import { ContactInfo } from "../universitychainit/contact_info";
import { AnnualTaxes } from "../universitychainit/annual_taxes";
import { TaxesInfo } from "../universitychainit/taxes_info";
import { ErasmusContribution } from "../universitychainit/erasmus_contribution";
import { ErasmusExams } from "../universitychainit/erasmus_exams";
import { ErasmusCareer } from "../universitychainit/erasmus_career";
import { ErasmusInfo } from "../universitychainit/erasmus_info";
import { StoredStudent } from "../universitychainit/stored_student";
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

export interface QueryGetProfessorsExamsResponse {
  professorsExams: ProfessorsExams | undefined;
}

export interface QueryAllProfessorsExamsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllProfessorsExamsResponse {
  professorsExams: ProfessorsExams[];
  pagination: PageResponse | undefined;
}

export interface QueryGetStudentInfoRequest {}

export interface QueryGetStudentInfoResponse {
  StudentInfo: StudentInfo | undefined;
}

export interface QueryGetExamsInfoRequest {
  examName: string;
}

export interface QueryGetExamsInfoResponse {
  examsInfo: ExamsInfo | undefined;
}

export interface QueryAllExamsInfoRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllExamsInfoResponse {
  examsInfo: ExamsInfo[];
  pagination: PageResponse | undefined;
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

export interface QueryGetAnnualTaxesRequest {
  id: number;
}

export interface QueryGetAnnualTaxesResponse {
  AnnualTaxes: AnnualTaxes | undefined;
}

export interface QueryAllAnnualTaxesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAnnualTaxesResponse {
  AnnualTaxes: AnnualTaxes[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTaxesInfoRequest {}

export interface QueryGetTaxesInfoResponse {
  TaxesInfo: TaxesInfo | undefined;
}

export interface QueryGetErasmusContributionRequest {}

export interface QueryGetErasmusContributionResponse {
  ErasmusContribution: ErasmusContribution | undefined;
}

export interface QueryGetErasmusExamsRequest {
  examName: string;
}

export interface QueryGetErasmusExamsResponse {
  erasmusExams: ErasmusExams | undefined;
}

export interface QueryAllErasmusExamsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllErasmusExamsResponse {
  erasmusExams: ErasmusExams[];
  pagination: PageResponse | undefined;
}

export interface QueryGetErasmusCareerRequest {
  id: number;
}

export interface QueryGetErasmusCareerResponse {
  ErasmusCareer: ErasmusCareer | undefined;
}

export interface QueryAllErasmusCareerRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllErasmusCareerResponse {
  ErasmusCareer: ErasmusCareer[];
  pagination: PageResponse | undefined;
}

export interface QueryGetErasmusInfoRequest {}

export interface QueryGetErasmusInfoResponse {
  ErasmusInfo: ErasmusInfo | undefined;
}

export interface QueryGetStoredStudentRequest {
  index: string;
}

export interface QueryGetStoredStudentResponse {
  storedStudent: StoredStudent | undefined;
}

export interface QueryAllStoredStudentRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoredStudentResponse {
  storedStudent: StoredStudent[];
  pagination: PageResponse | undefined;
}

export interface QueryGetUniversityInfoRequest {}

export interface QueryGetUniversityInfoResponse {
  UniversityInfo: UniversityInfo | undefined;
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

const baseQueryGetProfessorsExamsResponse: object = {};

export const QueryGetProfessorsExamsResponse = {
  encode(
    message: QueryGetProfessorsExamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.professorsExams !== undefined) {
      ProfessorsExams.encode(
        message.professorsExams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProfessorsExamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfessorsExamsResponse,
    } as QueryGetProfessorsExamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.professorsExams = ProfessorsExams.decode(
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

  fromJSON(object: any): QueryGetProfessorsExamsResponse {
    const message = {
      ...baseQueryGetProfessorsExamsResponse,
    } as QueryGetProfessorsExamsResponse;
    if (
      object.professorsExams !== undefined &&
      object.professorsExams !== null
    ) {
      message.professorsExams = ProfessorsExams.fromJSON(
        object.professorsExams
      );
    } else {
      message.professorsExams = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProfessorsExamsResponse): unknown {
    const obj: any = {};
    message.professorsExams !== undefined &&
      (obj.professorsExams = message.professorsExams
        ? ProfessorsExams.toJSON(message.professorsExams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfessorsExamsResponse>
  ): QueryGetProfessorsExamsResponse {
    const message = {
      ...baseQueryGetProfessorsExamsResponse,
    } as QueryGetProfessorsExamsResponse;
    if (
      object.professorsExams !== undefined &&
      object.professorsExams !== null
    ) {
      message.professorsExams = ProfessorsExams.fromPartial(
        object.professorsExams
      );
    } else {
      message.professorsExams = undefined;
    }
    return message;
  },
};

const baseQueryAllProfessorsExamsRequest: object = {};

export const QueryAllProfessorsExamsRequest = {
  encode(
    message: QueryAllProfessorsExamsRequest,
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
  ): QueryAllProfessorsExamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProfessorsExamsRequest,
    } as QueryAllProfessorsExamsRequest;
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

  fromJSON(object: any): QueryAllProfessorsExamsRequest {
    const message = {
      ...baseQueryAllProfessorsExamsRequest,
    } as QueryAllProfessorsExamsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProfessorsExamsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProfessorsExamsRequest>
  ): QueryAllProfessorsExamsRequest {
    const message = {
      ...baseQueryAllProfessorsExamsRequest,
    } as QueryAllProfessorsExamsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllProfessorsExamsResponse: object = {};

export const QueryAllProfessorsExamsResponse = {
  encode(
    message: QueryAllProfessorsExamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.professorsExams) {
      ProfessorsExams.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllProfessorsExamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProfessorsExamsResponse,
    } as QueryAllProfessorsExamsResponse;
    message.professorsExams = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.professorsExams.push(
            ProfessorsExams.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllProfessorsExamsResponse {
    const message = {
      ...baseQueryAllProfessorsExamsResponse,
    } as QueryAllProfessorsExamsResponse;
    message.professorsExams = [];
    if (
      object.professorsExams !== undefined &&
      object.professorsExams !== null
    ) {
      for (const e of object.professorsExams) {
        message.professorsExams.push(ProfessorsExams.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProfessorsExamsResponse): unknown {
    const obj: any = {};
    if (message.professorsExams) {
      obj.professorsExams = message.professorsExams.map((e) =>
        e ? ProfessorsExams.toJSON(e) : undefined
      );
    } else {
      obj.professorsExams = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProfessorsExamsResponse>
  ): QueryAllProfessorsExamsResponse {
    const message = {
      ...baseQueryAllProfessorsExamsResponse,
    } as QueryAllProfessorsExamsResponse;
    message.professorsExams = [];
    if (
      object.professorsExams !== undefined &&
      object.professorsExams !== null
    ) {
      for (const e of object.professorsExams) {
        message.professorsExams.push(ProfessorsExams.fromPartial(e));
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

const baseQueryGetExamsInfoRequest: object = { examName: "" };

export const QueryGetExamsInfoRequest = {
  encode(
    message: QueryGetExamsInfoRequest,
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
  ): QueryGetExamsInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetExamsInfoRequest,
    } as QueryGetExamsInfoRequest;
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

  fromJSON(object: any): QueryGetExamsInfoRequest {
    const message = {
      ...baseQueryGetExamsInfoRequest,
    } as QueryGetExamsInfoRequest;
    if (object.examName !== undefined && object.examName !== null) {
      message.examName = String(object.examName);
    } else {
      message.examName = "";
    }
    return message;
  },

  toJSON(message: QueryGetExamsInfoRequest): unknown {
    const obj: any = {};
    message.examName !== undefined && (obj.examName = message.examName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetExamsInfoRequest>
  ): QueryGetExamsInfoRequest {
    const message = {
      ...baseQueryGetExamsInfoRequest,
    } as QueryGetExamsInfoRequest;
    if (object.examName !== undefined && object.examName !== null) {
      message.examName = object.examName;
    } else {
      message.examName = "";
    }
    return message;
  },
};

const baseQueryGetExamsInfoResponse: object = {};

export const QueryGetExamsInfoResponse = {
  encode(
    message: QueryGetExamsInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.examsInfo !== undefined) {
      ExamsInfo.encode(message.examsInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetExamsInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetExamsInfoResponse,
    } as QueryGetExamsInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.examsInfo = ExamsInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExamsInfoResponse {
    const message = {
      ...baseQueryGetExamsInfoResponse,
    } as QueryGetExamsInfoResponse;
    if (object.examsInfo !== undefined && object.examsInfo !== null) {
      message.examsInfo = ExamsInfo.fromJSON(object.examsInfo);
    } else {
      message.examsInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetExamsInfoResponse): unknown {
    const obj: any = {};
    message.examsInfo !== undefined &&
      (obj.examsInfo = message.examsInfo
        ? ExamsInfo.toJSON(message.examsInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetExamsInfoResponse>
  ): QueryGetExamsInfoResponse {
    const message = {
      ...baseQueryGetExamsInfoResponse,
    } as QueryGetExamsInfoResponse;
    if (object.examsInfo !== undefined && object.examsInfo !== null) {
      message.examsInfo = ExamsInfo.fromPartial(object.examsInfo);
    } else {
      message.examsInfo = undefined;
    }
    return message;
  },
};

const baseQueryAllExamsInfoRequest: object = {};

export const QueryAllExamsInfoRequest = {
  encode(
    message: QueryAllExamsInfoRequest,
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
  ): QueryAllExamsInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllExamsInfoRequest,
    } as QueryAllExamsInfoRequest;
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

  fromJSON(object: any): QueryAllExamsInfoRequest {
    const message = {
      ...baseQueryAllExamsInfoRequest,
    } as QueryAllExamsInfoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllExamsInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExamsInfoRequest>
  ): QueryAllExamsInfoRequest {
    const message = {
      ...baseQueryAllExamsInfoRequest,
    } as QueryAllExamsInfoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllExamsInfoResponse: object = {};

export const QueryAllExamsInfoResponse = {
  encode(
    message: QueryAllExamsInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.examsInfo) {
      ExamsInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllExamsInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllExamsInfoResponse,
    } as QueryAllExamsInfoResponse;
    message.examsInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.examsInfo.push(ExamsInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllExamsInfoResponse {
    const message = {
      ...baseQueryAllExamsInfoResponse,
    } as QueryAllExamsInfoResponse;
    message.examsInfo = [];
    if (object.examsInfo !== undefined && object.examsInfo !== null) {
      for (const e of object.examsInfo) {
        message.examsInfo.push(ExamsInfo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllExamsInfoResponse): unknown {
    const obj: any = {};
    if (message.examsInfo) {
      obj.examsInfo = message.examsInfo.map((e) =>
        e ? ExamsInfo.toJSON(e) : undefined
      );
    } else {
      obj.examsInfo = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExamsInfoResponse>
  ): QueryAllExamsInfoResponse {
    const message = {
      ...baseQueryAllExamsInfoResponse,
    } as QueryAllExamsInfoResponse;
    message.examsInfo = [];
    if (object.examsInfo !== undefined && object.examsInfo !== null) {
      for (const e of object.examsInfo) {
        message.examsInfo.push(ExamsInfo.fromPartial(e));
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

const baseQueryGetAnnualTaxesRequest: object = { id: 0 };

export const QueryGetAnnualTaxesRequest = {
  encode(
    message: QueryGetAnnualTaxesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAnnualTaxesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAnnualTaxesRequest,
    } as QueryGetAnnualTaxesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAnnualTaxesRequest {
    const message = {
      ...baseQueryGetAnnualTaxesRequest,
    } as QueryGetAnnualTaxesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetAnnualTaxesRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAnnualTaxesRequest>
  ): QueryGetAnnualTaxesRequest {
    const message = {
      ...baseQueryGetAnnualTaxesRequest,
    } as QueryGetAnnualTaxesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetAnnualTaxesResponse: object = {};

export const QueryGetAnnualTaxesResponse = {
  encode(
    message: QueryGetAnnualTaxesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.AnnualTaxes !== undefined) {
      AnnualTaxes.encode(
        message.AnnualTaxes,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAnnualTaxesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAnnualTaxesResponse,
    } as QueryGetAnnualTaxesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AnnualTaxes = AnnualTaxes.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAnnualTaxesResponse {
    const message = {
      ...baseQueryGetAnnualTaxesResponse,
    } as QueryGetAnnualTaxesResponse;
    if (object.AnnualTaxes !== undefined && object.AnnualTaxes !== null) {
      message.AnnualTaxes = AnnualTaxes.fromJSON(object.AnnualTaxes);
    } else {
      message.AnnualTaxes = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAnnualTaxesResponse): unknown {
    const obj: any = {};
    message.AnnualTaxes !== undefined &&
      (obj.AnnualTaxes = message.AnnualTaxes
        ? AnnualTaxes.toJSON(message.AnnualTaxes)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAnnualTaxesResponse>
  ): QueryGetAnnualTaxesResponse {
    const message = {
      ...baseQueryGetAnnualTaxesResponse,
    } as QueryGetAnnualTaxesResponse;
    if (object.AnnualTaxes !== undefined && object.AnnualTaxes !== null) {
      message.AnnualTaxes = AnnualTaxes.fromPartial(object.AnnualTaxes);
    } else {
      message.AnnualTaxes = undefined;
    }
    return message;
  },
};

const baseQueryAllAnnualTaxesRequest: object = {};

export const QueryAllAnnualTaxesRequest = {
  encode(
    message: QueryAllAnnualTaxesRequest,
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
  ): QueryAllAnnualTaxesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAnnualTaxesRequest,
    } as QueryAllAnnualTaxesRequest;
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

  fromJSON(object: any): QueryAllAnnualTaxesRequest {
    const message = {
      ...baseQueryAllAnnualTaxesRequest,
    } as QueryAllAnnualTaxesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAnnualTaxesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAnnualTaxesRequest>
  ): QueryAllAnnualTaxesRequest {
    const message = {
      ...baseQueryAllAnnualTaxesRequest,
    } as QueryAllAnnualTaxesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAnnualTaxesResponse: object = {};

export const QueryAllAnnualTaxesResponse = {
  encode(
    message: QueryAllAnnualTaxesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.AnnualTaxes) {
      AnnualTaxes.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllAnnualTaxesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAnnualTaxesResponse,
    } as QueryAllAnnualTaxesResponse;
    message.AnnualTaxes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AnnualTaxes.push(AnnualTaxes.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllAnnualTaxesResponse {
    const message = {
      ...baseQueryAllAnnualTaxesResponse,
    } as QueryAllAnnualTaxesResponse;
    message.AnnualTaxes = [];
    if (object.AnnualTaxes !== undefined && object.AnnualTaxes !== null) {
      for (const e of object.AnnualTaxes) {
        message.AnnualTaxes.push(AnnualTaxes.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAnnualTaxesResponse): unknown {
    const obj: any = {};
    if (message.AnnualTaxes) {
      obj.AnnualTaxes = message.AnnualTaxes.map((e) =>
        e ? AnnualTaxes.toJSON(e) : undefined
      );
    } else {
      obj.AnnualTaxes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAnnualTaxesResponse>
  ): QueryAllAnnualTaxesResponse {
    const message = {
      ...baseQueryAllAnnualTaxesResponse,
    } as QueryAllAnnualTaxesResponse;
    message.AnnualTaxes = [];
    if (object.AnnualTaxes !== undefined && object.AnnualTaxes !== null) {
      for (const e of object.AnnualTaxes) {
        message.AnnualTaxes.push(AnnualTaxes.fromPartial(e));
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

const baseQueryGetErasmusContributionRequest: object = {};

export const QueryGetErasmusContributionRequest = {
  encode(
    _: QueryGetErasmusContributionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetErasmusContributionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetErasmusContributionRequest,
    } as QueryGetErasmusContributionRequest;
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

  fromJSON(_: any): QueryGetErasmusContributionRequest {
    const message = {
      ...baseQueryGetErasmusContributionRequest,
    } as QueryGetErasmusContributionRequest;
    return message;
  },

  toJSON(_: QueryGetErasmusContributionRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetErasmusContributionRequest>
  ): QueryGetErasmusContributionRequest {
    const message = {
      ...baseQueryGetErasmusContributionRequest,
    } as QueryGetErasmusContributionRequest;
    return message;
  },
};

const baseQueryGetErasmusContributionResponse: object = {};

export const QueryGetErasmusContributionResponse = {
  encode(
    message: QueryGetErasmusContributionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ErasmusContribution !== undefined) {
      ErasmusContribution.encode(
        message.ErasmusContribution,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetErasmusContributionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetErasmusContributionResponse,
    } as QueryGetErasmusContributionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ErasmusContribution = ErasmusContribution.decode(
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

  fromJSON(object: any): QueryGetErasmusContributionResponse {
    const message = {
      ...baseQueryGetErasmusContributionResponse,
    } as QueryGetErasmusContributionResponse;
    if (
      object.ErasmusContribution !== undefined &&
      object.ErasmusContribution !== null
    ) {
      message.ErasmusContribution = ErasmusContribution.fromJSON(
        object.ErasmusContribution
      );
    } else {
      message.ErasmusContribution = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetErasmusContributionResponse): unknown {
    const obj: any = {};
    message.ErasmusContribution !== undefined &&
      (obj.ErasmusContribution = message.ErasmusContribution
        ? ErasmusContribution.toJSON(message.ErasmusContribution)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetErasmusContributionResponse>
  ): QueryGetErasmusContributionResponse {
    const message = {
      ...baseQueryGetErasmusContributionResponse,
    } as QueryGetErasmusContributionResponse;
    if (
      object.ErasmusContribution !== undefined &&
      object.ErasmusContribution !== null
    ) {
      message.ErasmusContribution = ErasmusContribution.fromPartial(
        object.ErasmusContribution
      );
    } else {
      message.ErasmusContribution = undefined;
    }
    return message;
  },
};

const baseQueryGetErasmusExamsRequest: object = { examName: "" };

export const QueryGetErasmusExamsRequest = {
  encode(
    message: QueryGetErasmusExamsRequest,
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
  ): QueryGetErasmusExamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetErasmusExamsRequest,
    } as QueryGetErasmusExamsRequest;
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

  fromJSON(object: any): QueryGetErasmusExamsRequest {
    const message = {
      ...baseQueryGetErasmusExamsRequest,
    } as QueryGetErasmusExamsRequest;
    if (object.examName !== undefined && object.examName !== null) {
      message.examName = String(object.examName);
    } else {
      message.examName = "";
    }
    return message;
  },

  toJSON(message: QueryGetErasmusExamsRequest): unknown {
    const obj: any = {};
    message.examName !== undefined && (obj.examName = message.examName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetErasmusExamsRequest>
  ): QueryGetErasmusExamsRequest {
    const message = {
      ...baseQueryGetErasmusExamsRequest,
    } as QueryGetErasmusExamsRequest;
    if (object.examName !== undefined && object.examName !== null) {
      message.examName = object.examName;
    } else {
      message.examName = "";
    }
    return message;
  },
};

const baseQueryGetErasmusExamsResponse: object = {};

export const QueryGetErasmusExamsResponse = {
  encode(
    message: QueryGetErasmusExamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.erasmusExams !== undefined) {
      ErasmusExams.encode(
        message.erasmusExams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetErasmusExamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetErasmusExamsResponse,
    } as QueryGetErasmusExamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erasmusExams = ErasmusExams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetErasmusExamsResponse {
    const message = {
      ...baseQueryGetErasmusExamsResponse,
    } as QueryGetErasmusExamsResponse;
    if (object.erasmusExams !== undefined && object.erasmusExams !== null) {
      message.erasmusExams = ErasmusExams.fromJSON(object.erasmusExams);
    } else {
      message.erasmusExams = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetErasmusExamsResponse): unknown {
    const obj: any = {};
    message.erasmusExams !== undefined &&
      (obj.erasmusExams = message.erasmusExams
        ? ErasmusExams.toJSON(message.erasmusExams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetErasmusExamsResponse>
  ): QueryGetErasmusExamsResponse {
    const message = {
      ...baseQueryGetErasmusExamsResponse,
    } as QueryGetErasmusExamsResponse;
    if (object.erasmusExams !== undefined && object.erasmusExams !== null) {
      message.erasmusExams = ErasmusExams.fromPartial(object.erasmusExams);
    } else {
      message.erasmusExams = undefined;
    }
    return message;
  },
};

const baseQueryAllErasmusExamsRequest: object = {};

export const QueryAllErasmusExamsRequest = {
  encode(
    message: QueryAllErasmusExamsRequest,
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
  ): QueryAllErasmusExamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllErasmusExamsRequest,
    } as QueryAllErasmusExamsRequest;
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

  fromJSON(object: any): QueryAllErasmusExamsRequest {
    const message = {
      ...baseQueryAllErasmusExamsRequest,
    } as QueryAllErasmusExamsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllErasmusExamsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllErasmusExamsRequest>
  ): QueryAllErasmusExamsRequest {
    const message = {
      ...baseQueryAllErasmusExamsRequest,
    } as QueryAllErasmusExamsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllErasmusExamsResponse: object = {};

export const QueryAllErasmusExamsResponse = {
  encode(
    message: QueryAllErasmusExamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.erasmusExams) {
      ErasmusExams.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllErasmusExamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllErasmusExamsResponse,
    } as QueryAllErasmusExamsResponse;
    message.erasmusExams = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erasmusExams.push(
            ErasmusExams.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllErasmusExamsResponse {
    const message = {
      ...baseQueryAllErasmusExamsResponse,
    } as QueryAllErasmusExamsResponse;
    message.erasmusExams = [];
    if (object.erasmusExams !== undefined && object.erasmusExams !== null) {
      for (const e of object.erasmusExams) {
        message.erasmusExams.push(ErasmusExams.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllErasmusExamsResponse): unknown {
    const obj: any = {};
    if (message.erasmusExams) {
      obj.erasmusExams = message.erasmusExams.map((e) =>
        e ? ErasmusExams.toJSON(e) : undefined
      );
    } else {
      obj.erasmusExams = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllErasmusExamsResponse>
  ): QueryAllErasmusExamsResponse {
    const message = {
      ...baseQueryAllErasmusExamsResponse,
    } as QueryAllErasmusExamsResponse;
    message.erasmusExams = [];
    if (object.erasmusExams !== undefined && object.erasmusExams !== null) {
      for (const e of object.erasmusExams) {
        message.erasmusExams.push(ErasmusExams.fromPartial(e));
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

const baseQueryGetErasmusCareerRequest: object = { id: 0 };

export const QueryGetErasmusCareerRequest = {
  encode(
    message: QueryGetErasmusCareerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetErasmusCareerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetErasmusCareerRequest,
    } as QueryGetErasmusCareerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetErasmusCareerRequest {
    const message = {
      ...baseQueryGetErasmusCareerRequest,
    } as QueryGetErasmusCareerRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetErasmusCareerRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetErasmusCareerRequest>
  ): QueryGetErasmusCareerRequest {
    const message = {
      ...baseQueryGetErasmusCareerRequest,
    } as QueryGetErasmusCareerRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetErasmusCareerResponse: object = {};

export const QueryGetErasmusCareerResponse = {
  encode(
    message: QueryGetErasmusCareerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ErasmusCareer !== undefined) {
      ErasmusCareer.encode(
        message.ErasmusCareer,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetErasmusCareerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetErasmusCareerResponse,
    } as QueryGetErasmusCareerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ErasmusCareer = ErasmusCareer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetErasmusCareerResponse {
    const message = {
      ...baseQueryGetErasmusCareerResponse,
    } as QueryGetErasmusCareerResponse;
    if (object.ErasmusCareer !== undefined && object.ErasmusCareer !== null) {
      message.ErasmusCareer = ErasmusCareer.fromJSON(object.ErasmusCareer);
    } else {
      message.ErasmusCareer = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetErasmusCareerResponse): unknown {
    const obj: any = {};
    message.ErasmusCareer !== undefined &&
      (obj.ErasmusCareer = message.ErasmusCareer
        ? ErasmusCareer.toJSON(message.ErasmusCareer)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetErasmusCareerResponse>
  ): QueryGetErasmusCareerResponse {
    const message = {
      ...baseQueryGetErasmusCareerResponse,
    } as QueryGetErasmusCareerResponse;
    if (object.ErasmusCareer !== undefined && object.ErasmusCareer !== null) {
      message.ErasmusCareer = ErasmusCareer.fromPartial(object.ErasmusCareer);
    } else {
      message.ErasmusCareer = undefined;
    }
    return message;
  },
};

const baseQueryAllErasmusCareerRequest: object = {};

export const QueryAllErasmusCareerRequest = {
  encode(
    message: QueryAllErasmusCareerRequest,
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
  ): QueryAllErasmusCareerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllErasmusCareerRequest,
    } as QueryAllErasmusCareerRequest;
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

  fromJSON(object: any): QueryAllErasmusCareerRequest {
    const message = {
      ...baseQueryAllErasmusCareerRequest,
    } as QueryAllErasmusCareerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllErasmusCareerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllErasmusCareerRequest>
  ): QueryAllErasmusCareerRequest {
    const message = {
      ...baseQueryAllErasmusCareerRequest,
    } as QueryAllErasmusCareerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllErasmusCareerResponse: object = {};

export const QueryAllErasmusCareerResponse = {
  encode(
    message: QueryAllErasmusCareerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.ErasmusCareer) {
      ErasmusCareer.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllErasmusCareerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllErasmusCareerResponse,
    } as QueryAllErasmusCareerResponse;
    message.ErasmusCareer = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ErasmusCareer.push(
            ErasmusCareer.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllErasmusCareerResponse {
    const message = {
      ...baseQueryAllErasmusCareerResponse,
    } as QueryAllErasmusCareerResponse;
    message.ErasmusCareer = [];
    if (object.ErasmusCareer !== undefined && object.ErasmusCareer !== null) {
      for (const e of object.ErasmusCareer) {
        message.ErasmusCareer.push(ErasmusCareer.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllErasmusCareerResponse): unknown {
    const obj: any = {};
    if (message.ErasmusCareer) {
      obj.ErasmusCareer = message.ErasmusCareer.map((e) =>
        e ? ErasmusCareer.toJSON(e) : undefined
      );
    } else {
      obj.ErasmusCareer = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllErasmusCareerResponse>
  ): QueryAllErasmusCareerResponse {
    const message = {
      ...baseQueryAllErasmusCareerResponse,
    } as QueryAllErasmusCareerResponse;
    message.ErasmusCareer = [];
    if (object.ErasmusCareer !== undefined && object.ErasmusCareer !== null) {
      for (const e of object.ErasmusCareer) {
        message.ErasmusCareer.push(ErasmusCareer.fromPartial(e));
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

const baseQueryGetStoredStudentRequest: object = { index: "" };

export const QueryGetStoredStudentRequest = {
  encode(
    message: QueryGetStoredStudentRequest,
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
  ): QueryGetStoredStudentRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStoredStudentRequest,
    } as QueryGetStoredStudentRequest;
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

  fromJSON(object: any): QueryGetStoredStudentRequest {
    const message = {
      ...baseQueryGetStoredStudentRequest,
    } as QueryGetStoredStudentRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetStoredStudentRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStoredStudentRequest>
  ): QueryGetStoredStudentRequest {
    const message = {
      ...baseQueryGetStoredStudentRequest,
    } as QueryGetStoredStudentRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetStoredStudentResponse: object = {};

export const QueryGetStoredStudentResponse = {
  encode(
    message: QueryGetStoredStudentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.storedStudent !== undefined) {
      StoredStudent.encode(
        message.storedStudent,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetStoredStudentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStoredStudentResponse,
    } as QueryGetStoredStudentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedStudent = StoredStudent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredStudentResponse {
    const message = {
      ...baseQueryGetStoredStudentResponse,
    } as QueryGetStoredStudentResponse;
    if (object.storedStudent !== undefined && object.storedStudent !== null) {
      message.storedStudent = StoredStudent.fromJSON(object.storedStudent);
    } else {
      message.storedStudent = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetStoredStudentResponse): unknown {
    const obj: any = {};
    message.storedStudent !== undefined &&
      (obj.storedStudent = message.storedStudent
        ? StoredStudent.toJSON(message.storedStudent)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStoredStudentResponse>
  ): QueryGetStoredStudentResponse {
    const message = {
      ...baseQueryGetStoredStudentResponse,
    } as QueryGetStoredStudentResponse;
    if (object.storedStudent !== undefined && object.storedStudent !== null) {
      message.storedStudent = StoredStudent.fromPartial(object.storedStudent);
    } else {
      message.storedStudent = undefined;
    }
    return message;
  },
};

const baseQueryAllStoredStudentRequest: object = {};

export const QueryAllStoredStudentRequest = {
  encode(
    message: QueryAllStoredStudentRequest,
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
  ): QueryAllStoredStudentRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStoredStudentRequest,
    } as QueryAllStoredStudentRequest;
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

  fromJSON(object: any): QueryAllStoredStudentRequest {
    const message = {
      ...baseQueryAllStoredStudentRequest,
    } as QueryAllStoredStudentRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStoredStudentRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStoredStudentRequest>
  ): QueryAllStoredStudentRequest {
    const message = {
      ...baseQueryAllStoredStudentRequest,
    } as QueryAllStoredStudentRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllStoredStudentResponse: object = {};

export const QueryAllStoredStudentResponse = {
  encode(
    message: QueryAllStoredStudentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.storedStudent) {
      StoredStudent.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllStoredStudentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStoredStudentResponse,
    } as QueryAllStoredStudentResponse;
    message.storedStudent = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedStudent.push(
            StoredStudent.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllStoredStudentResponse {
    const message = {
      ...baseQueryAllStoredStudentResponse,
    } as QueryAllStoredStudentResponse;
    message.storedStudent = [];
    if (object.storedStudent !== undefined && object.storedStudent !== null) {
      for (const e of object.storedStudent) {
        message.storedStudent.push(StoredStudent.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStoredStudentResponse): unknown {
    const obj: any = {};
    if (message.storedStudent) {
      obj.storedStudent = message.storedStudent.map((e) =>
        e ? StoredStudent.toJSON(e) : undefined
      );
    } else {
      obj.storedStudent = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStoredStudentResponse>
  ): QueryAllStoredStudentResponse {
    const message = {
      ...baseQueryAllStoredStudentResponse,
    } as QueryAllStoredStudentResponse;
    message.storedStudent = [];
    if (object.storedStudent !== undefined && object.storedStudent !== null) {
      for (const e of object.storedStudent) {
        message.storedStudent.push(StoredStudent.fromPartial(e));
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

const baseQueryGetUniversityInfoRequest: object = {};

export const QueryGetUniversityInfoRequest = {
  encode(
    _: QueryGetUniversityInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetUniversityInfoRequest {
    const message = {
      ...baseQueryGetUniversityInfoRequest,
    } as QueryGetUniversityInfoRequest;
    return message;
  },

  toJSON(_: QueryGetUniversityInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetUniversityInfoRequest>
  ): QueryGetUniversityInfoRequest {
    const message = {
      ...baseQueryGetUniversityInfoRequest,
    } as QueryGetUniversityInfoRequest;
    return message;
  },
};

const baseQueryGetUniversityInfoResponse: object = {};

export const QueryGetUniversityInfoResponse = {
  encode(
    message: QueryGetUniversityInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.UniversityInfo !== undefined) {
      UniversityInfo.encode(
        message.UniversityInfo,
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
          message.UniversityInfo = UniversityInfo.decode(
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
    if (object.UniversityInfo !== undefined && object.UniversityInfo !== null) {
      message.UniversityInfo = UniversityInfo.fromJSON(object.UniversityInfo);
    } else {
      message.UniversityInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetUniversityInfoResponse): unknown {
    const obj: any = {};
    message.UniversityInfo !== undefined &&
      (obj.UniversityInfo = message.UniversityInfo
        ? UniversityInfo.toJSON(message.UniversityInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetUniversityInfoResponse>
  ): QueryGetUniversityInfoResponse {
    const message = {
      ...baseQueryGetUniversityInfoResponse,
    } as QueryGetUniversityInfoResponse;
    if (object.UniversityInfo !== undefined && object.UniversityInfo !== null) {
      message.UniversityInfo = UniversityInfo.fromPartial(
        object.UniversityInfo
      );
    } else {
      message.UniversityInfo = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a ProfessorsExams by index. */
  ProfessorsExams(
    request: QueryGetProfessorsExamsRequest
  ): Promise<QueryGetProfessorsExamsResponse>;
  /** Queries a list of ProfessorsExams items. */
  ProfessorsExamsAll(
    request: QueryAllProfessorsExamsRequest
  ): Promise<QueryAllProfessorsExamsResponse>;
  /** Queries a StudentInfo by index. */
  StudentInfo(
    request: QueryGetStudentInfoRequest
  ): Promise<QueryGetStudentInfoResponse>;
  /** Queries a ExamsInfo by index. */
  ExamsInfo(
    request: QueryGetExamsInfoRequest
  ): Promise<QueryGetExamsInfoResponse>;
  /** Queries a list of ExamsInfo items. */
  ExamsInfoAll(
    request: QueryAllExamsInfoRequest
  ): Promise<QueryAllExamsInfoResponse>;
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
  /** Queries a AnnualTaxes by id. */
  AnnualTaxes(
    request: QueryGetAnnualTaxesRequest
  ): Promise<QueryGetAnnualTaxesResponse>;
  /** Queries a list of AnnualTaxes items. */
  AnnualTaxesAll(
    request: QueryAllAnnualTaxesRequest
  ): Promise<QueryAllAnnualTaxesResponse>;
  /** Queries a TaxesInfo by index. */
  TaxesInfo(
    request: QueryGetTaxesInfoRequest
  ): Promise<QueryGetTaxesInfoResponse>;
  /** Queries a ErasmusContribution by index. */
  ErasmusContribution(
    request: QueryGetErasmusContributionRequest
  ): Promise<QueryGetErasmusContributionResponse>;
  /** Queries a ErasmusExams by index. */
  ErasmusExams(
    request: QueryGetErasmusExamsRequest
  ): Promise<QueryGetErasmusExamsResponse>;
  /** Queries a list of ErasmusExams items. */
  ErasmusExamsAll(
    request: QueryAllErasmusExamsRequest
  ): Promise<QueryAllErasmusExamsResponse>;
  /** Queries a ErasmusCareer by id. */
  ErasmusCareer(
    request: QueryGetErasmusCareerRequest
  ): Promise<QueryGetErasmusCareerResponse>;
  /** Queries a list of ErasmusCareer items. */
  ErasmusCareerAll(
    request: QueryAllErasmusCareerRequest
  ): Promise<QueryAllErasmusCareerResponse>;
  /** Queries a ErasmusInfo by index. */
  ErasmusInfo(
    request: QueryGetErasmusInfoRequest
  ): Promise<QueryGetErasmusInfoResponse>;
  /** Queries a StoredStudent by index. */
  StoredStudent(
    request: QueryGetStoredStudentRequest
  ): Promise<QueryGetStoredStudentResponse>;
  /** Queries a list of StoredStudent items. */
  StoredStudentAll(
    request: QueryAllStoredStudentRequest
  ): Promise<QueryAllStoredStudentResponse>;
  /** Queries a UniversityInfo by index. */
  UniversityInfo(
    request: QueryGetUniversityInfoRequest
  ): Promise<QueryGetUniversityInfoResponse>;
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

  ProfessorsExams(
    request: QueryGetProfessorsExamsRequest
  ): Promise<QueryGetProfessorsExamsResponse> {
    const data = QueryGetProfessorsExamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ProfessorsExams",
      data
    );
    return promise.then((data) =>
      QueryGetProfessorsExamsResponse.decode(new Reader(data))
    );
  }

  ProfessorsExamsAll(
    request: QueryAllProfessorsExamsRequest
  ): Promise<QueryAllProfessorsExamsResponse> {
    const data = QueryAllProfessorsExamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ProfessorsExamsAll",
      data
    );
    return promise.then((data) =>
      QueryAllProfessorsExamsResponse.decode(new Reader(data))
    );
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

  ExamsInfo(
    request: QueryGetExamsInfoRequest
  ): Promise<QueryGetExamsInfoResponse> {
    const data = QueryGetExamsInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ExamsInfo",
      data
    );
    return promise.then((data) =>
      QueryGetExamsInfoResponse.decode(new Reader(data))
    );
  }

  ExamsInfoAll(
    request: QueryAllExamsInfoRequest
  ): Promise<QueryAllExamsInfoResponse> {
    const data = QueryAllExamsInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ExamsInfoAll",
      data
    );
    return promise.then((data) =>
      QueryAllExamsInfoResponse.decode(new Reader(data))
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

  AnnualTaxes(
    request: QueryGetAnnualTaxesRequest
  ): Promise<QueryGetAnnualTaxesResponse> {
    const data = QueryGetAnnualTaxesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "AnnualTaxes",
      data
    );
    return promise.then((data) =>
      QueryGetAnnualTaxesResponse.decode(new Reader(data))
    );
  }

  AnnualTaxesAll(
    request: QueryAllAnnualTaxesRequest
  ): Promise<QueryAllAnnualTaxesResponse> {
    const data = QueryAllAnnualTaxesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "AnnualTaxesAll",
      data
    );
    return promise.then((data) =>
      QueryAllAnnualTaxesResponse.decode(new Reader(data))
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

  ErasmusContribution(
    request: QueryGetErasmusContributionRequest
  ): Promise<QueryGetErasmusContributionResponse> {
    const data = QueryGetErasmusContributionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ErasmusContribution",
      data
    );
    return promise.then((data) =>
      QueryGetErasmusContributionResponse.decode(new Reader(data))
    );
  }

  ErasmusExams(
    request: QueryGetErasmusExamsRequest
  ): Promise<QueryGetErasmusExamsResponse> {
    const data = QueryGetErasmusExamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ErasmusExams",
      data
    );
    return promise.then((data) =>
      QueryGetErasmusExamsResponse.decode(new Reader(data))
    );
  }

  ErasmusExamsAll(
    request: QueryAllErasmusExamsRequest
  ): Promise<QueryAllErasmusExamsResponse> {
    const data = QueryAllErasmusExamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ErasmusExamsAll",
      data
    );
    return promise.then((data) =>
      QueryAllErasmusExamsResponse.decode(new Reader(data))
    );
  }

  ErasmusCareer(
    request: QueryGetErasmusCareerRequest
  ): Promise<QueryGetErasmusCareerResponse> {
    const data = QueryGetErasmusCareerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ErasmusCareer",
      data
    );
    return promise.then((data) =>
      QueryGetErasmusCareerResponse.decode(new Reader(data))
    );
  }

  ErasmusCareerAll(
    request: QueryAllErasmusCareerRequest
  ): Promise<QueryAllErasmusCareerResponse> {
    const data = QueryAllErasmusCareerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "ErasmusCareerAll",
      data
    );
    return promise.then((data) =>
      QueryAllErasmusCareerResponse.decode(new Reader(data))
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

  StoredStudent(
    request: QueryGetStoredStudentRequest
  ): Promise<QueryGetStoredStudentResponse> {
    const data = QueryGetStoredStudentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "StoredStudent",
      data
    );
    return promise.then((data) =>
      QueryGetStoredStudentResponse.decode(new Reader(data))
    );
  }

  StoredStudentAll(
    request: QueryAllStoredStudentRequest
  ): Promise<QueryAllStoredStudentResponse> {
    const data = QueryAllStoredStudentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "university_chain_it.universitychainit.Query",
      "StoredStudentAll",
      data
    );
    return promise.then((data) =>
      QueryAllStoredStudentResponse.decode(new Reader(data))
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
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
