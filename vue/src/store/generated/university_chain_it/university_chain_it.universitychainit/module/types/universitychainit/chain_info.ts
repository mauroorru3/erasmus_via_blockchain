/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "university_chain_it.universitychainit";

export interface ChainInfo {
  hubKey: string;
  chainKey: string;
  country: string;
  initStatus: boolean;
}

const baseChainInfo: object = {
  hubKey: "",
  chainKey: "",
  country: "",
  initStatus: false,
};

export const ChainInfo = {
  encode(message: ChainInfo, writer: Writer = Writer.create()): Writer {
    if (message.hubKey !== "") {
      writer.uint32(10).string(message.hubKey);
    }
    if (message.chainKey !== "") {
      writer.uint32(18).string(message.chainKey);
    }
    if (message.country !== "") {
      writer.uint32(26).string(message.country);
    }
    if (message.initStatus === true) {
      writer.uint32(32).bool(message.initStatus);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ChainInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChainInfo } as ChainInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hubKey = reader.string();
          break;
        case 2:
          message.chainKey = reader.string();
          break;
        case 3:
          message.country = reader.string();
          break;
        case 4:
          message.initStatus = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChainInfo {
    const message = { ...baseChainInfo } as ChainInfo;
    if (object.hubKey !== undefined && object.hubKey !== null) {
      message.hubKey = String(object.hubKey);
    } else {
      message.hubKey = "";
    }
    if (object.chainKey !== undefined && object.chainKey !== null) {
      message.chainKey = String(object.chainKey);
    } else {
      message.chainKey = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = String(object.country);
    } else {
      message.country = "";
    }
    if (object.initStatus !== undefined && object.initStatus !== null) {
      message.initStatus = Boolean(object.initStatus);
    } else {
      message.initStatus = false;
    }
    return message;
  },

  toJSON(message: ChainInfo): unknown {
    const obj: any = {};
    message.hubKey !== undefined && (obj.hubKey = message.hubKey);
    message.chainKey !== undefined && (obj.chainKey = message.chainKey);
    message.country !== undefined && (obj.country = message.country);
    message.initStatus !== undefined && (obj.initStatus = message.initStatus);
    return obj;
  },

  fromPartial(object: DeepPartial<ChainInfo>): ChainInfo {
    const message = { ...baseChainInfo } as ChainInfo;
    if (object.hubKey !== undefined && object.hubKey !== null) {
      message.hubKey = object.hubKey;
    } else {
      message.hubKey = "";
    }
    if (object.chainKey !== undefined && object.chainKey !== null) {
      message.chainKey = object.chainKey;
    } else {
      message.chainKey = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = "";
    }
    if (object.initStatus !== undefined && object.initStatus !== null) {
      message.initStatus = object.initStatus;
    } else {
      message.initStatus = false;
    }
    return message;
  },
};

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
