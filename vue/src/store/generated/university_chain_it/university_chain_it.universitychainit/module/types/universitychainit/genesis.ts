/* eslint-disable */
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
import { ProfessorsExamsUniroma1 } from "../universitychainit/professors_exams_uniroma_1";
import { StoredStudentUniroma1 } from "../universitychainit/stored_student_uniroma_1";
import { UniversityInfoUniroma1 } from "../universitychainit/university_info_uniroma_1";
import { ProfessorsExamsUnipi } from "../universitychainit/professors_exams_unipi";
import { StoredStudentUnipi } from "../universitychainit/stored_student_unipi";
import { UniversityInfoUnipi } from "../universitychainit/university_info_unipi";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "university_chain_it.universitychainit";

/** GenesisState defines the universitychainit module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  port_id: string;
  studentInfo: StudentInfo | undefined;
  transcriptOfRecords: TranscriptOfRecords | undefined;
  personalInfo: PersonalInfo | undefined;
  residenceInfo: ResidenceInfo | undefined;
  contactInfo: ContactInfo | undefined;
  taxesInfo: TaxesInfo | undefined;
  erasmusInfo: ErasmusInfo | undefined;
  chainInfo: ChainInfo | undefined;
  foreignUniversitiesList: ForeignUniversities[];
  professorsExamsUniroma1List: ProfessorsExamsUniroma1[];
  storedStudentUniroma1List: StoredStudentUniroma1[];
  universityInfoUniroma1: UniversityInfoUniroma1 | undefined;
  professorsExamsUnipiList: ProfessorsExamsUnipi[];
  storedStudentUnipiList: StoredStudentUnipi[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  universityInfoUnipi: UniversityInfoUnipi | undefined;
}

const baseGenesisState: object = { port_id: "" };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.port_id !== "") {
      writer.uint32(18).string(message.port_id);
    }
    if (message.studentInfo !== undefined) {
      StudentInfo.encode(
        message.studentInfo,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.transcriptOfRecords !== undefined) {
      TranscriptOfRecords.encode(
        message.transcriptOfRecords,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.personalInfo !== undefined) {
      PersonalInfo.encode(
        message.personalInfo,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.residenceInfo !== undefined) {
      ResidenceInfo.encode(
        message.residenceInfo,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.contactInfo !== undefined) {
      ContactInfo.encode(
        message.contactInfo,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.taxesInfo !== undefined) {
      TaxesInfo.encode(message.taxesInfo, writer.uint32(66).fork()).ldelim();
    }
    if (message.erasmusInfo !== undefined) {
      ErasmusInfo.encode(
        message.erasmusInfo,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.chainInfo !== undefined) {
      ChainInfo.encode(message.chainInfo, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.foreignUniversitiesList) {
      ForeignUniversities.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.professorsExamsUniroma1List) {
      ProfessorsExamsUniroma1.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.storedStudentUniroma1List) {
      StoredStudentUniroma1.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.universityInfoUniroma1 !== undefined) {
      UniversityInfoUniroma1.encode(
        message.universityInfoUniroma1,
        writer.uint32(114).fork()
      ).ldelim();
    }
    for (const v of message.professorsExamsUnipiList) {
      ProfessorsExamsUnipi.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.storedStudentUnipiList) {
      StoredStudentUnipi.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (message.universityInfoUnipi !== undefined) {
      UniversityInfoUnipi.encode(
        message.universityInfoUnipi,
        writer.uint32(138).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.foreignUniversitiesList = [];
    message.professorsExamsUniroma1List = [];
    message.storedStudentUniroma1List = [];
    message.professorsExamsUnipiList = [];
    message.storedStudentUnipiList = [];
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
          message.studentInfo = StudentInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.transcriptOfRecords = TranscriptOfRecords.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.personalInfo = PersonalInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.residenceInfo = ResidenceInfo.decode(reader, reader.uint32());
          break;
        case 7:
          message.contactInfo = ContactInfo.decode(reader, reader.uint32());
          break;
        case 8:
          message.taxesInfo = TaxesInfo.decode(reader, reader.uint32());
          break;
        case 9:
          message.erasmusInfo = ErasmusInfo.decode(reader, reader.uint32());
          break;
        case 10:
          message.chainInfo = ChainInfo.decode(reader, reader.uint32());
          break;
        case 11:
          message.foreignUniversitiesList.push(
            ForeignUniversities.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.professorsExamsUniroma1List.push(
            ProfessorsExamsUniroma1.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.storedStudentUniroma1List.push(
            StoredStudentUniroma1.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.universityInfoUniroma1 = UniversityInfoUniroma1.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.professorsExamsUnipiList.push(
            ProfessorsExamsUnipi.decode(reader, reader.uint32())
          );
          break;
        case 16:
          message.storedStudentUnipiList.push(
            StoredStudentUnipi.decode(reader, reader.uint32())
          );
          break;
        case 17:
          message.universityInfoUnipi = UniversityInfoUnipi.decode(
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
    message.foreignUniversitiesList = [];
    message.professorsExamsUniroma1List = [];
    message.storedStudentUniroma1List = [];
    message.professorsExamsUnipiList = [];
    message.storedStudentUnipiList = [];
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
    if (object.studentInfo !== undefined && object.studentInfo !== null) {
      message.studentInfo = StudentInfo.fromJSON(object.studentInfo);
    } else {
      message.studentInfo = undefined;
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
    if (object.taxesInfo !== undefined && object.taxesInfo !== null) {
      message.taxesInfo = TaxesInfo.fromJSON(object.taxesInfo);
    } else {
      message.taxesInfo = undefined;
    }
    if (object.erasmusInfo !== undefined && object.erasmusInfo !== null) {
      message.erasmusInfo = ErasmusInfo.fromJSON(object.erasmusInfo);
    } else {
      message.erasmusInfo = undefined;
    }
    if (object.chainInfo !== undefined && object.chainInfo !== null) {
      message.chainInfo = ChainInfo.fromJSON(object.chainInfo);
    } else {
      message.chainInfo = undefined;
    }
    if (
      object.foreignUniversitiesList !== undefined &&
      object.foreignUniversitiesList !== null
    ) {
      for (const e of object.foreignUniversitiesList) {
        message.foreignUniversitiesList.push(ForeignUniversities.fromJSON(e));
      }
    }
    if (
      object.professorsExamsUniroma1List !== undefined &&
      object.professorsExamsUniroma1List !== null
    ) {
      for (const e of object.professorsExamsUniroma1List) {
        message.professorsExamsUniroma1List.push(
          ProfessorsExamsUniroma1.fromJSON(e)
        );
      }
    }
    if (
      object.storedStudentUniroma1List !== undefined &&
      object.storedStudentUniroma1List !== null
    ) {
      for (const e of object.storedStudentUniroma1List) {
        message.storedStudentUniroma1List.push(
          StoredStudentUniroma1.fromJSON(e)
        );
      }
    }
    if (
      object.universityInfoUniroma1 !== undefined &&
      object.universityInfoUniroma1 !== null
    ) {
      message.universityInfoUniroma1 = UniversityInfoUniroma1.fromJSON(
        object.universityInfoUniroma1
      );
    } else {
      message.universityInfoUniroma1 = undefined;
    }
    if (
      object.professorsExamsUnipiList !== undefined &&
      object.professorsExamsUnipiList !== null
    ) {
      for (const e of object.professorsExamsUnipiList) {
        message.professorsExamsUnipiList.push(ProfessorsExamsUnipi.fromJSON(e));
      }
    }
    if (
      object.storedStudentUnipiList !== undefined &&
      object.storedStudentUnipiList !== null
    ) {
      for (const e of object.storedStudentUnipiList) {
        message.storedStudentUnipiList.push(StoredStudentUnipi.fromJSON(e));
      }
    }
    if (
      object.universityInfoUnipi !== undefined &&
      object.universityInfoUnipi !== null
    ) {
      message.universityInfoUnipi = UniversityInfoUnipi.fromJSON(
        object.universityInfoUnipi
      );
    } else {
      message.universityInfoUnipi = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.studentInfo !== undefined &&
      (obj.studentInfo = message.studentInfo
        ? StudentInfo.toJSON(message.studentInfo)
        : undefined);
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
    message.taxesInfo !== undefined &&
      (obj.taxesInfo = message.taxesInfo
        ? TaxesInfo.toJSON(message.taxesInfo)
        : undefined);
    message.erasmusInfo !== undefined &&
      (obj.erasmusInfo = message.erasmusInfo
        ? ErasmusInfo.toJSON(message.erasmusInfo)
        : undefined);
    message.chainInfo !== undefined &&
      (obj.chainInfo = message.chainInfo
        ? ChainInfo.toJSON(message.chainInfo)
        : undefined);
    if (message.foreignUniversitiesList) {
      obj.foreignUniversitiesList = message.foreignUniversitiesList.map((e) =>
        e ? ForeignUniversities.toJSON(e) : undefined
      );
    } else {
      obj.foreignUniversitiesList = [];
    }
    if (message.professorsExamsUniroma1List) {
      obj.professorsExamsUniroma1List = message.professorsExamsUniroma1List.map(
        (e) => (e ? ProfessorsExamsUniroma1.toJSON(e) : undefined)
      );
    } else {
      obj.professorsExamsUniroma1List = [];
    }
    if (message.storedStudentUniroma1List) {
      obj.storedStudentUniroma1List = message.storedStudentUniroma1List.map(
        (e) => (e ? StoredStudentUniroma1.toJSON(e) : undefined)
      );
    } else {
      obj.storedStudentUniroma1List = [];
    }
    message.universityInfoUniroma1 !== undefined &&
      (obj.universityInfoUniroma1 = message.universityInfoUniroma1
        ? UniversityInfoUniroma1.toJSON(message.universityInfoUniroma1)
        : undefined);
    if (message.professorsExamsUnipiList) {
      obj.professorsExamsUnipiList = message.professorsExamsUnipiList.map((e) =>
        e ? ProfessorsExamsUnipi.toJSON(e) : undefined
      );
    } else {
      obj.professorsExamsUnipiList = [];
    }
    if (message.storedStudentUnipiList) {
      obj.storedStudentUnipiList = message.storedStudentUnipiList.map((e) =>
        e ? StoredStudentUnipi.toJSON(e) : undefined
      );
    } else {
      obj.storedStudentUnipiList = [];
    }
    message.universityInfoUnipi !== undefined &&
      (obj.universityInfoUnipi = message.universityInfoUnipi
        ? UniversityInfoUnipi.toJSON(message.universityInfoUnipi)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.foreignUniversitiesList = [];
    message.professorsExamsUniroma1List = [];
    message.storedStudentUniroma1List = [];
    message.professorsExamsUnipiList = [];
    message.storedStudentUnipiList = [];
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
    if (object.studentInfo !== undefined && object.studentInfo !== null) {
      message.studentInfo = StudentInfo.fromPartial(object.studentInfo);
    } else {
      message.studentInfo = undefined;
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
    if (object.taxesInfo !== undefined && object.taxesInfo !== null) {
      message.taxesInfo = TaxesInfo.fromPartial(object.taxesInfo);
    } else {
      message.taxesInfo = undefined;
    }
    if (object.erasmusInfo !== undefined && object.erasmusInfo !== null) {
      message.erasmusInfo = ErasmusInfo.fromPartial(object.erasmusInfo);
    } else {
      message.erasmusInfo = undefined;
    }
    if (object.chainInfo !== undefined && object.chainInfo !== null) {
      message.chainInfo = ChainInfo.fromPartial(object.chainInfo);
    } else {
      message.chainInfo = undefined;
    }
    if (
      object.foreignUniversitiesList !== undefined &&
      object.foreignUniversitiesList !== null
    ) {
      for (const e of object.foreignUniversitiesList) {
        message.foreignUniversitiesList.push(
          ForeignUniversities.fromPartial(e)
        );
      }
    }
    if (
      object.professorsExamsUniroma1List !== undefined &&
      object.professorsExamsUniroma1List !== null
    ) {
      for (const e of object.professorsExamsUniroma1List) {
        message.professorsExamsUniroma1List.push(
          ProfessorsExamsUniroma1.fromPartial(e)
        );
      }
    }
    if (
      object.storedStudentUniroma1List !== undefined &&
      object.storedStudentUniroma1List !== null
    ) {
      for (const e of object.storedStudentUniroma1List) {
        message.storedStudentUniroma1List.push(
          StoredStudentUniroma1.fromPartial(e)
        );
      }
    }
    if (
      object.universityInfoUniroma1 !== undefined &&
      object.universityInfoUniroma1 !== null
    ) {
      message.universityInfoUniroma1 = UniversityInfoUniroma1.fromPartial(
        object.universityInfoUniroma1
      );
    } else {
      message.universityInfoUniroma1 = undefined;
    }
    if (
      object.professorsExamsUnipiList !== undefined &&
      object.professorsExamsUnipiList !== null
    ) {
      for (const e of object.professorsExamsUnipiList) {
        message.professorsExamsUnipiList.push(
          ProfessorsExamsUnipi.fromPartial(e)
        );
      }
    }
    if (
      object.storedStudentUnipiList !== undefined &&
      object.storedStudentUnipiList !== null
    ) {
      for (const e of object.storedStudentUnipiList) {
        message.storedStudentUnipiList.push(StoredStudentUnipi.fromPartial(e));
      }
    }
    if (
      object.universityInfoUnipi !== undefined &&
      object.universityInfoUnipi !== null
    ) {
      message.universityInfoUnipi = UniversityInfoUnipi.fromPartial(
        object.universityInfoUnipi
      );
    } else {
      message.universityInfoUnipi = undefined;
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
