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

/** Msg defines the Msg service. */
export interface Msg {
  ConfigureChain(
    request: MsgConfigureChain
  ): Promise<MsgConfigureChainResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RegisterNewStudent(
    request: MsgRegisterNewStudent
  ): Promise<MsgRegisterNewStudentResponse>;
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
