/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../universitychainit/params";
import { ProfessorsExams } from "../universitychainit/professors_exams";
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

/** GenesisState defines the universitychainit module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  port_id: string;
  professorsExamsList: ProfessorsExams[];
  studentInfo: StudentInfo | undefined;
  examsInfoList: ExamsInfo[];
  transcriptOfRecords: TranscriptOfRecords | undefined;
  personalInfo: PersonalInfo | undefined;
  residenceInfo: ResidenceInfo | undefined;
  contactInfo: ContactInfo | undefined;
  annualTaxesList: AnnualTaxes[];
  annualTaxesCount: number;
  taxesInfo: TaxesInfo | undefined;
  erasmusContribution: ErasmusContribution | undefined;
  erasmusExamsList: ErasmusExams[];
  erasmusCareerList: ErasmusCareer[];
  erasmusCareerCount: number;
  erasmusInfo: ErasmusInfo | undefined;
  storedStudentList: StoredStudent[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  universityInfo: UniversityInfo | undefined;
}

const baseGenesisState: object = {
  port_id: "",
  annualTaxesCount: 0,
  erasmusCareerCount: 0,
};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.port_id !== "") {
      writer.uint32(18).string(message.port_id);
    }
    for (const v of message.professorsExamsList) {
      ProfessorsExams.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.studentInfo !== undefined) {
      StudentInfo.encode(
        message.studentInfo,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.examsInfoList) {
      ExamsInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.transcriptOfRecords !== undefined) {
      TranscriptOfRecords.encode(
        message.transcriptOfRecords,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.personalInfo !== undefined) {
      PersonalInfo.encode(
        message.personalInfo,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.residenceInfo !== undefined) {
      ResidenceInfo.encode(
        message.residenceInfo,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.contactInfo !== undefined) {
      ContactInfo.encode(
        message.contactInfo,
        writer.uint32(74).fork()
      ).ldelim();
    }
    for (const v of message.annualTaxesList) {
      AnnualTaxes.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.annualTaxesCount !== 0) {
      writer.uint32(88).uint64(message.annualTaxesCount);
    }
    if (message.taxesInfo !== undefined) {
      TaxesInfo.encode(message.taxesInfo, writer.uint32(98).fork()).ldelim();
    }
    if (message.erasmusContribution !== undefined) {
      ErasmusContribution.encode(
        message.erasmusContribution,
        writer.uint32(106).fork()
      ).ldelim();
    }
    for (const v of message.erasmusExamsList) {
      ErasmusExams.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.erasmusCareerList) {
      ErasmusCareer.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.erasmusCareerCount !== 0) {
      writer.uint32(128).uint64(message.erasmusCareerCount);
    }
    if (message.erasmusInfo !== undefined) {
      ErasmusInfo.encode(
        message.erasmusInfo,
        writer.uint32(138).fork()
      ).ldelim();
    }
    for (const v of message.storedStudentList) {
      StoredStudent.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.universityInfo !== undefined) {
      UniversityInfo.encode(
        message.universityInfo,
        writer.uint32(154).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.professorsExamsList = [];
    message.examsInfoList = [];
    message.annualTaxesList = [];
    message.erasmusExamsList = [];
    message.erasmusCareerList = [];
    message.storedStudentList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.port_id = reader.string();
          break;
        case 3:
          message.professorsExamsList.push(
            ProfessorsExams.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.studentInfo = StudentInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.examsInfoList.push(ExamsInfo.decode(reader, reader.uint32()));
          break;
        case 6:
          message.transcriptOfRecords = TranscriptOfRecords.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.personalInfo = PersonalInfo.decode(reader, reader.uint32());
          break;
        case 8:
          message.residenceInfo = ResidenceInfo.decode(reader, reader.uint32());
          break;
        case 9:
          message.contactInfo = ContactInfo.decode(reader, reader.uint32());
          break;
        case 10:
          message.annualTaxesList.push(
            AnnualTaxes.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.annualTaxesCount = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.taxesInfo = TaxesInfo.decode(reader, reader.uint32());
          break;
        case 13:
          message.erasmusContribution = ErasmusContribution.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.erasmusExamsList.push(
            ErasmusExams.decode(reader, reader.uint32())
          );
          break;
        case 15:
          message.erasmusCareerList.push(
            ErasmusCareer.decode(reader, reader.uint32())
          );
          break;
        case 16:
          message.erasmusCareerCount = longToNumber(reader.uint64() as Long);
          break;
        case 17:
          message.erasmusInfo = ErasmusInfo.decode(reader, reader.uint32());
          break;
        case 18:
          message.storedStudentList.push(
            StoredStudent.decode(reader, reader.uint32())
          );
          break;
        case 19:
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

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.professorsExamsList = [];
    message.examsInfoList = [];
    message.annualTaxesList = [];
    message.erasmusExamsList = [];
    message.erasmusCareerList = [];
    message.storedStudentList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = String(object.port_id);
    } else {
      message.port_id = "";
    }
    if (
      object.professorsExamsList !== undefined &&
      object.professorsExamsList !== null
    ) {
      for (const e of object.professorsExamsList) {
        message.professorsExamsList.push(ProfessorsExams.fromJSON(e));
      }
    }
    if (object.studentInfo !== undefined && object.studentInfo !== null) {
      message.studentInfo = StudentInfo.fromJSON(object.studentInfo);
    } else {
      message.studentInfo = undefined;
    }
    if (object.examsInfoList !== undefined && object.examsInfoList !== null) {
      for (const e of object.examsInfoList) {
        message.examsInfoList.push(ExamsInfo.fromJSON(e));
      }
    }
    if (
      object.transcriptOfRecords !== undefined &&
      object.transcriptOfRecords !== null
    ) {
      message.transcriptOfRecords = TranscriptOfRecords.fromJSON(
        object.transcriptOfRecords
      );
    } else {
      message.transcriptOfRecords = undefined;
    }
    if (object.personalInfo !== undefined && object.personalInfo !== null) {
      message.personalInfo = PersonalInfo.fromJSON(object.personalInfo);
    } else {
      message.personalInfo = undefined;
    }
    if (object.residenceInfo !== undefined && object.residenceInfo !== null) {
      message.residenceInfo = ResidenceInfo.fromJSON(object.residenceInfo);
    } else {
      message.residenceInfo = undefined;
    }
    if (object.contactInfo !== undefined && object.contactInfo !== null) {
      message.contactInfo = ContactInfo.fromJSON(object.contactInfo);
    } else {
      message.contactInfo = undefined;
    }
    if (
      object.annualTaxesList !== undefined &&
      object.annualTaxesList !== null
    ) {
      for (const e of object.annualTaxesList) {
        message.annualTaxesList.push(AnnualTaxes.fromJSON(e));
      }
    }
    if (
      object.annualTaxesCount !== undefined &&
      object.annualTaxesCount !== null
    ) {
      message.annualTaxesCount = Number(object.annualTaxesCount);
    } else {
      message.annualTaxesCount = 0;
    }
    if (object.taxesInfo !== undefined && object.taxesInfo !== null) {
      message.taxesInfo = TaxesInfo.fromJSON(object.taxesInfo);
    } else {
      message.taxesInfo = undefined;
    }
    if (
      object.erasmusContribution !== undefined &&
      object.erasmusContribution !== null
    ) {
      message.erasmusContribution = ErasmusContribution.fromJSON(
        object.erasmusContribution
      );
    } else {
      message.erasmusContribution = undefined;
    }
    if (
      object.erasmusExamsList !== undefined &&
      object.erasmusExamsList !== null
    ) {
      for (const e of object.erasmusExamsList) {
        message.erasmusExamsList.push(ErasmusExams.fromJSON(e));
      }
    }
    if (
      object.erasmusCareerList !== undefined &&
      object.erasmusCareerList !== null
    ) {
      for (const e of object.erasmusCareerList) {
        message.erasmusCareerList.push(ErasmusCareer.fromJSON(e));
      }
    }
    if (
      object.erasmusCareerCount !== undefined &&
      object.erasmusCareerCount !== null
    ) {
      message.erasmusCareerCount = Number(object.erasmusCareerCount);
    } else {
      message.erasmusCareerCount = 0;
    }
    if (object.erasmusInfo !== undefined && object.erasmusInfo !== null) {
      message.erasmusInfo = ErasmusInfo.fromJSON(object.erasmusInfo);
    } else {
      message.erasmusInfo = undefined;
    }
    if (
      object.storedStudentList !== undefined &&
      object.storedStudentList !== null
    ) {
      for (const e of object.storedStudentList) {
        message.storedStudentList.push(StoredStudent.fromJSON(e));
      }
    }
    if (object.universityInfo !== undefined && object.universityInfo !== null) {
      message.universityInfo = UniversityInfo.fromJSON(object.universityInfo);
    } else {
      message.universityInfo = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    if (message.professorsExamsList) {
      obj.professorsExamsList = message.professorsExamsList.map((e) =>
        e ? ProfessorsExams.toJSON(e) : undefined
      );
    } else {
      obj.professorsExamsList = [];
    }
    message.studentInfo !== undefined &&
      (obj.studentInfo = message.studentInfo
        ? StudentInfo.toJSON(message.studentInfo)
        : undefined);
    if (message.examsInfoList) {
      obj.examsInfoList = message.examsInfoList.map((e) =>
        e ? ExamsInfo.toJSON(e) : undefined
      );
    } else {
      obj.examsInfoList = [];
    }
    message.transcriptOfRecords !== undefined &&
      (obj.transcriptOfRecords = message.transcriptOfRecords
        ? TranscriptOfRecords.toJSON(message.transcriptOfRecords)
        : undefined);
    message.personalInfo !== undefined &&
      (obj.personalInfo = message.personalInfo
        ? PersonalInfo.toJSON(message.personalInfo)
        : undefined);
    message.residenceInfo !== undefined &&
      (obj.residenceInfo = message.residenceInfo
        ? ResidenceInfo.toJSON(message.residenceInfo)
        : undefined);
    message.contactInfo !== undefined &&
      (obj.contactInfo = message.contactInfo
        ? ContactInfo.toJSON(message.contactInfo)
        : undefined);
    if (message.annualTaxesList) {
      obj.annualTaxesList = message.annualTaxesList.map((e) =>
        e ? AnnualTaxes.toJSON(e) : undefined
      );
    } else {
      obj.annualTaxesList = [];
    }
    message.annualTaxesCount !== undefined &&
      (obj.annualTaxesCount = message.annualTaxesCount);
    message.taxesInfo !== undefined &&
      (obj.taxesInfo = message.taxesInfo
        ? TaxesInfo.toJSON(message.taxesInfo)
        : undefined);
    message.erasmusContribution !== undefined &&
      (obj.erasmusContribution = message.erasmusContribution
        ? ErasmusContribution.toJSON(message.erasmusContribution)
        : undefined);
    if (message.erasmusExamsList) {
      obj.erasmusExamsList = message.erasmusExamsList.map((e) =>
        e ? ErasmusExams.toJSON(e) : undefined
      );
    } else {
      obj.erasmusExamsList = [];
    }
    if (message.erasmusCareerList) {
      obj.erasmusCareerList = message.erasmusCareerList.map((e) =>
        e ? ErasmusCareer.toJSON(e) : undefined
      );
    } else {
      obj.erasmusCareerList = [];
    }
    message.erasmusCareerCount !== undefined &&
      (obj.erasmusCareerCount = message.erasmusCareerCount);
    message.erasmusInfo !== undefined &&
      (obj.erasmusInfo = message.erasmusInfo
        ? ErasmusInfo.toJSON(message.erasmusInfo)
        : undefined);
    if (message.storedStudentList) {
      obj.storedStudentList = message.storedStudentList.map((e) =>
        e ? StoredStudent.toJSON(e) : undefined
      );
    } else {
      obj.storedStudentList = [];
    }
    message.universityInfo !== undefined &&
      (obj.universityInfo = message.universityInfo
        ? UniversityInfo.toJSON(message.universityInfo)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.professorsExamsList = [];
    message.examsInfoList = [];
    message.annualTaxesList = [];
    message.erasmusExamsList = [];
    message.erasmusCareerList = [];
    message.storedStudentList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    } else {
      message.port_id = "";
    }
    if (
      object.professorsExamsList !== undefined &&
      object.professorsExamsList !== null
    ) {
      for (const e of object.professorsExamsList) {
        message.professorsExamsList.push(ProfessorsExams.fromPartial(e));
      }
    }
    if (object.studentInfo !== undefined && object.studentInfo !== null) {
      message.studentInfo = StudentInfo.fromPartial(object.studentInfo);
    } else {
      message.studentInfo = undefined;
    }
    if (object.examsInfoList !== undefined && object.examsInfoList !== null) {
      for (const e of object.examsInfoList) {
        message.examsInfoList.push(ExamsInfo.fromPartial(e));
      }
    }
    if (
      object.transcriptOfRecords !== undefined &&
      object.transcriptOfRecords !== null
    ) {
      message.transcriptOfRecords = TranscriptOfRecords.fromPartial(
        object.transcriptOfRecords
      );
    } else {
      message.transcriptOfRecords = undefined;
    }
    if (object.personalInfo !== undefined && object.personalInfo !== null) {
      message.personalInfo = PersonalInfo.fromPartial(object.personalInfo);
    } else {
      message.personalInfo = undefined;
    }
    if (object.residenceInfo !== undefined && object.residenceInfo !== null) {
      message.residenceInfo = ResidenceInfo.fromPartial(object.residenceInfo);
    } else {
      message.residenceInfo = undefined;
    }
    if (object.contactInfo !== undefined && object.contactInfo !== null) {
      message.contactInfo = ContactInfo.fromPartial(object.contactInfo);
    } else {
      message.contactInfo = undefined;
    }
    if (
      object.annualTaxesList !== undefined &&
      object.annualTaxesList !== null
    ) {
      for (const e of object.annualTaxesList) {
        message.annualTaxesList.push(AnnualTaxes.fromPartial(e));
      }
    }
    if (
      object.annualTaxesCount !== undefined &&
      object.annualTaxesCount !== null
    ) {
      message.annualTaxesCount = object.annualTaxesCount;
    } else {
      message.annualTaxesCount = 0;
    }
    if (object.taxesInfo !== undefined && object.taxesInfo !== null) {
      message.taxesInfo = TaxesInfo.fromPartial(object.taxesInfo);
    } else {
      message.taxesInfo = undefined;
    }
    if (
      object.erasmusContribution !== undefined &&
      object.erasmusContribution !== null
    ) {
      message.erasmusContribution = ErasmusContribution.fromPartial(
        object.erasmusContribution
      );
    } else {
      message.erasmusContribution = undefined;
    }
    if (
      object.erasmusExamsList !== undefined &&
      object.erasmusExamsList !== null
    ) {
      for (const e of object.erasmusExamsList) {
        message.erasmusExamsList.push(ErasmusExams.fromPartial(e));
      }
    }
    if (
      object.erasmusCareerList !== undefined &&
      object.erasmusCareerList !== null
    ) {
      for (const e of object.erasmusCareerList) {
        message.erasmusCareerList.push(ErasmusCareer.fromPartial(e));
      }
    }
    if (
      object.erasmusCareerCount !== undefined &&
      object.erasmusCareerCount !== null
    ) {
      message.erasmusCareerCount = object.erasmusCareerCount;
    } else {
      message.erasmusCareerCount = 0;
    }
    if (object.erasmusInfo !== undefined && object.erasmusInfo !== null) {
      message.erasmusInfo = ErasmusInfo.fromPartial(object.erasmusInfo);
    } else {
      message.erasmusInfo = undefined;
    }
    if (
      object.storedStudentList !== undefined &&
      object.storedStudentList !== null
    ) {
      for (const e of object.storedStudentList) {
        message.storedStudentList.push(StoredStudent.fromPartial(e));
      }
    }
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
