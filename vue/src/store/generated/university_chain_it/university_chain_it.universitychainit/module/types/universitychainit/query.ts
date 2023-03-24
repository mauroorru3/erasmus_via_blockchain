/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../universitychainit/params";
import { ProfessorsExams } from "../universitychainit/professors_exams";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { StudentInfo } from "../universitychainit/student_info";
import { ExamsInfo } from "../universitychainit/exams_info";
import { TranscriptOfRecords } from "../universitychainit/transcript_of_records";

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
