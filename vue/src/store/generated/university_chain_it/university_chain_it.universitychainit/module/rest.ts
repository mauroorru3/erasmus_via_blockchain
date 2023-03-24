/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface UniversitychainitAnnualTaxes {
  /** @format uint64 */
  id?: string;

  /** @format uint64 */
  year?: string;

  /** @format uint64 */
  amount?: string;

  /** @format uint64 */
  incomeBracket?: string;
  paymentMade?: boolean;
  dateOfPayment?: string;
}

export interface UniversitychainitContactInfo {
  contactAddress?: string;
  email?: string;
  mobilePhone?: string;
}

export interface UniversitychainitErasmusCareer {
  /** @format uint64 */
  id?: string;

  /** @format uint64 */
  durationInMonths?: string;
  startDate?: string;
  endDate?: string;

  /** @format uint64 */
  erasmusType?: string;

  /** @format uint64 */
  totalCredits?: string;

  /** @format uint64 */
  achievedCredits?: string;

  /** @format uint64 */
  totalExams?: string;

  /** @format uint64 */
  examsPassed?: string;
  foreignUniversityName?: string;
  foreignUniversityCountry?: string;
  foreignUniversityStudentId?: string;
  status?: string;
  contribution?: UniversitychainitErasmusContribution;
  examsData?: UniversitychainitErasmusExams;
}

export interface UniversitychainitErasmusContribution {
  /** @format uint64 */
  amount?: string;

  /** @format uint64 */
  incomeBracket?: string;
  paymentMade?: boolean;
  dateOfPayment?: string;
}

export interface UniversitychainitErasmusExams {
  examName?: string;
  examLabel?: string;
  examDate?: string;

  /** @format uint64 */
  credits?: string;

  /** @format uint64 */
  marks?: string;

  /** @format uint64 */
  courseYear?: string;
  status?: boolean;

  /** @format uint64 */
  attendanceYear?: string;

  /** @format uint64 */
  examType?: string;
  courseOfStudy?: string;
  homeUniversityId?: string;
}

export interface UniversitychainitErasmusInfo {
  erasmusStudent?: string;

  /** @format uint64 */
  numberTimes?: string;

  /** @format uint64 */
  numberMonths?: string;

  /** @format uint64 */
  totalExams?: string;

  /** @format uint64 */
  examsPassed?: string;

  /** @format uint64 */
  totalCredits?: string;

  /** @format uint64 */
  achievedCredits?: string;
  career?: UniversitychainitErasmusCareer;
  previousStudentFifo?: string;
  nextStudentFifo?: string;
}

export interface UniversitychainitExamsInfo {
  examName?: string;
  examLabel?: string;
  examDate?: string;

  /** @format uint64 */
  credits?: string;

  /** @format uint64 */
  marks?: string;

  /** @format uint64 */
  courseYear?: string;
  status?: boolean;

  /** @format uint64 */
  attendanceYear?: string;

  /** @format uint64 */
  examType?: string;
  courseOfStudy?: string;
}

/**
 * Params defines the parameters for the module.
 */
export type UniversitychainitParams = object;

export interface UniversitychainitPersonalInfo {
  /** @format uint64 */
  gender?: string;
  dateOfBirth?: string;
  primaryNationality?: string;
  countryOfBirth?: string;
  provinceOfBirth?: string;
  townOfBirth?: string;
  taxCode?: string;
}

export interface UniversitychainitProfessorsExams {
  examName?: string;
  professorName?: string;
  professorId?: string;
  professorKey?: string;
}

export interface UniversitychainitQueryAllAnnualTaxesResponse {
  AnnualTaxes?: UniversitychainitAnnualTaxes[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface UniversitychainitQueryAllErasmusCareerResponse {
  ErasmusCareer?: UniversitychainitErasmusCareer[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface UniversitychainitQueryAllErasmusExamsResponse {
  erasmusExams?: UniversitychainitErasmusExams[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface UniversitychainitQueryAllExamsInfoResponse {
  examsInfo?: UniversitychainitExamsInfo[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface UniversitychainitQueryAllProfessorsExamsResponse {
  professorsExams?: UniversitychainitProfessorsExams[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface UniversitychainitQueryAllStoredStudentResponse {
  storedStudent?: UniversitychainitStoredStudent[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface UniversitychainitQueryGetAnnualTaxesResponse {
  AnnualTaxes?: UniversitychainitAnnualTaxes;
}

export interface UniversitychainitQueryGetContactInfoResponse {
  ContactInfo?: UniversitychainitContactInfo;
}

export interface UniversitychainitQueryGetErasmusCareerResponse {
  ErasmusCareer?: UniversitychainitErasmusCareer;
}

export interface UniversitychainitQueryGetErasmusContributionResponse {
  ErasmusContribution?: UniversitychainitErasmusContribution;
}

export interface UniversitychainitQueryGetErasmusExamsResponse {
  erasmusExams?: UniversitychainitErasmusExams;
}

export interface UniversitychainitQueryGetErasmusInfoResponse {
  ErasmusInfo?: UniversitychainitErasmusInfo;
}

export interface UniversitychainitQueryGetExamsInfoResponse {
  examsInfo?: UniversitychainitExamsInfo;
}

export interface UniversitychainitQueryGetPersonalInfoResponse {
  PersonalInfo?: UniversitychainitPersonalInfo;
}

export interface UniversitychainitQueryGetProfessorsExamsResponse {
  professorsExams?: UniversitychainitProfessorsExams;
}

export interface UniversitychainitQueryGetResidenceInfoResponse {
  ResidenceInfo?: UniversitychainitResidenceInfo;
}

export interface UniversitychainitQueryGetStoredStudentResponse {
  storedStudent?: UniversitychainitStoredStudent;
}

export interface UniversitychainitQueryGetStudentInfoResponse {
  StudentInfo?: UniversitychainitStudentInfo;
}

export interface UniversitychainitQueryGetTaxesInfoResponse {
  TaxesInfo?: UniversitychainitTaxesInfo;
}

export interface UniversitychainitQueryGetTranscriptOfRecordsResponse {
  TranscriptOfRecords?: UniversitychainitTranscriptOfRecords;
}

export interface UniversitychainitQueryGetUniversityInfoResponse {
  UniversityInfo?: UniversitychainitUniversityInfo;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface UniversitychainitQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: UniversitychainitParams;
}

export interface UniversitychainitResidenceInfo {
  country?: string;
  province?: string;
  town?: string;
  postCode?: string;
  address?: string;
  houseNumber?: string;
  homePhone?: string;
}

export interface UniversitychainitStoredStudent {
  index?: string;
  studentData?: UniversitychainitStudentInfo;
  transcriptData?: UniversitychainitTranscriptOfRecords;
  personalData?: UniversitychainitPersonalInfo;
  residenceData?: UniversitychainitResidenceInfo;
  contactData?: UniversitychainitContactInfo;
  taxesData?: UniversitychainitTaxesInfo;
  erasmusData?: UniversitychainitErasmusInfo;
}

export interface UniversitychainitStudentInfo {
  name?: string;
  surname?: string;

  /** @format uint64 */
  courseType?: string;
  courseOfStudy?: string;

  /** @format uint64 */
  status?: string;

  /** @format uint64 */
  currentYearOfStudy?: string;
  outOfCourse?: boolean;

  /** @format uint64 */
  numberOfYearsOutOfCourse?: string;
  studentKey?: string;
}

export interface UniversitychainitTaxesInfo {
  status?: boolean;

  /** @format uint64 */
  totalAmount?: string;
  taxesHistory?: UniversitychainitAnnualTaxes;
}

export interface UniversitychainitTranscriptOfRecords {
  examsData?: UniversitychainitExamsInfo;

  /** @format uint64 */
  totalExams?: string;

  /** @format uint64 */
  examsPassed?: string;

  /** @format uint64 */
  totalCredits?: string;

  /** @format uint64 */
  achievedCredits?: string;
}

export interface UniversitychainitUniversityInfo {
  /** @format uint64 */
  nextStudentId?: string;
  secretariatKey?: string;
  universityKey?: string;
  caiKey?: string;
  fifoHeadErasmus?: string;
  fifoTailErasmus?: string;
  deadlineTaxes?: string;
  deadlineErasmus?: string;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title universitychainit/annual_taxes.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAnnualTaxesAll
   * @summary Queries a list of AnnualTaxes items.
   * @request GET:/university_chain_it/universitychainit/annual_taxes
   */
  queryAnnualTaxesAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<UniversitychainitQueryAllAnnualTaxesResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/annual_taxes`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAnnualTaxes
   * @summary Queries a AnnualTaxes by id.
   * @request GET:/university_chain_it/universitychainit/annual_taxes/{id}
   */
  queryAnnualTaxes = (id: string, params: RequestParams = {}) =>
    this.request<UniversitychainitQueryGetAnnualTaxesResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/annual_taxes/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryContactInfo
   * @summary Queries a ContactInfo by index.
   * @request GET:/university_chain_it/universitychainit/contact_info
   */
  queryContactInfo = (params: RequestParams = {}) =>
    this.request<UniversitychainitQueryGetContactInfoResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/contact_info`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryErasmusCareerAll
   * @summary Queries a list of ErasmusCareer items.
   * @request GET:/university_chain_it/universitychainit/erasmus_career
   */
  queryErasmusCareerAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<UniversitychainitQueryAllErasmusCareerResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/erasmus_career`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryErasmusCareer
   * @summary Queries a ErasmusCareer by id.
   * @request GET:/university_chain_it/universitychainit/erasmus_career/{id}
   */
  queryErasmusCareer = (id: string, params: RequestParams = {}) =>
    this.request<UniversitychainitQueryGetErasmusCareerResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/erasmus_career/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryErasmusContribution
   * @summary Queries a ErasmusContribution by index.
   * @request GET:/university_chain_it/universitychainit/erasmus_contribution
   */
  queryErasmusContribution = (params: RequestParams = {}) =>
    this.request<UniversitychainitQueryGetErasmusContributionResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/erasmus_contribution`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryErasmusExamsAll
   * @summary Queries a list of ErasmusExams items.
   * @request GET:/university_chain_it/universitychainit/erasmus_exams
   */
  queryErasmusExamsAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<UniversitychainitQueryAllErasmusExamsResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/erasmus_exams`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryErasmusExams
   * @summary Queries a ErasmusExams by index.
   * @request GET:/university_chain_it/universitychainit/erasmus_exams/{examName}
   */
  queryErasmusExams = (examName: string, params: RequestParams = {}) =>
    this.request<UniversitychainitQueryGetErasmusExamsResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/erasmus_exams/${examName}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryErasmusInfo
   * @summary Queries a ErasmusInfo by index.
   * @request GET:/university_chain_it/universitychainit/erasmus_info
   */
  queryErasmusInfo = (params: RequestParams = {}) =>
    this.request<UniversitychainitQueryGetErasmusInfoResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/erasmus_info`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExamsInfoAll
   * @summary Queries a list of ExamsInfo items.
   * @request GET:/university_chain_it/universitychainit/exams_info
   */
  queryExamsInfoAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<UniversitychainitQueryAllExamsInfoResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/exams_info`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryExamsInfo
   * @summary Queries a ExamsInfo by index.
   * @request GET:/university_chain_it/universitychainit/exams_info/{examName}
   */
  queryExamsInfo = (examName: string, params: RequestParams = {}) =>
    this.request<UniversitychainitQueryGetExamsInfoResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/exams_info/${examName}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/university_chain_it/universitychainit/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<UniversitychainitQueryParamsResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPersonalInfo
   * @summary Queries a PersonalInfo by index.
   * @request GET:/university_chain_it/universitychainit/personal_info
   */
  queryPersonalInfo = (params: RequestParams = {}) =>
    this.request<UniversitychainitQueryGetPersonalInfoResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/personal_info`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryProfessorsExamsAll
   * @summary Queries a list of ProfessorsExams items.
   * @request GET:/university_chain_it/universitychainit/professors_exams
   */
  queryProfessorsExamsAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<UniversitychainitQueryAllProfessorsExamsResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/professors_exams`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryProfessorsExams
   * @summary Queries a ProfessorsExams by index.
   * @request GET:/university_chain_it/universitychainit/professors_exams/{examName}
   */
  queryProfessorsExams = (examName: string, params: RequestParams = {}) =>
    this.request<UniversitychainitQueryGetProfessorsExamsResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/professors_exams/${examName}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryResidenceInfo
   * @summary Queries a ResidenceInfo by index.
   * @request GET:/university_chain_it/universitychainit/residence_info
   */
  queryResidenceInfo = (params: RequestParams = {}) =>
    this.request<UniversitychainitQueryGetResidenceInfoResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/residence_info`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryStoredStudentAll
   * @summary Queries a list of StoredStudent items.
   * @request GET:/university_chain_it/universitychainit/stored_student
   */
  queryStoredStudentAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<UniversitychainitQueryAllStoredStudentResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/stored_student`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryStoredStudent
   * @summary Queries a StoredStudent by index.
   * @request GET:/university_chain_it/universitychainit/stored_student/{index}
   */
  queryStoredStudent = (index: string, params: RequestParams = {}) =>
    this.request<UniversitychainitQueryGetStoredStudentResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/stored_student/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryStudentInfo
   * @summary Queries a StudentInfo by index.
   * @request GET:/university_chain_it/universitychainit/student_info
   */
  queryStudentInfo = (params: RequestParams = {}) =>
    this.request<UniversitychainitQueryGetStudentInfoResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/student_info`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTaxesInfo
   * @summary Queries a TaxesInfo by index.
   * @request GET:/university_chain_it/universitychainit/taxes_info
   */
  queryTaxesInfo = (params: RequestParams = {}) =>
    this.request<UniversitychainitQueryGetTaxesInfoResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/taxes_info`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTranscriptOfRecords
   * @summary Queries a TranscriptOfRecords by index.
   * @request GET:/university_chain_it/universitychainit/transcript_of_records
   */
  queryTranscriptOfRecords = (params: RequestParams = {}) =>
    this.request<UniversitychainitQueryGetTranscriptOfRecordsResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/transcript_of_records`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUniversityInfo
   * @summary Queries a UniversityInfo by index.
   * @request GET:/university_chain_it/universitychainit/university_info
   */
  queryUniversityInfo = (params: RequestParams = {}) =>
    this.request<UniversitychainitQueryGetUniversityInfoResponse, RpcStatus>({
      path: `/university_chain_it/universitychainit/university_info`,
      method: "GET",
      format: "json",
      ...params,
    });
}
