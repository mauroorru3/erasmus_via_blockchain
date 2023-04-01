import { txClient, queryClient, MissingWalletError , registry} from './module'

import { ChainInfo } from "./module/types/universitychainit/chain_info"
import { ContactInfo } from "./module/types/universitychainit/contact_info"
import { ErasmusInfo } from "./module/types/universitychainit/erasmus_info"
import { ForeignUniversities } from "./module/types/universitychainit/foreign_universities"
import { UniversitychainitPacketData } from "./module/types/universitychainit/packet"
import { NoData } from "./module/types/universitychainit/packet"
import { Params } from "./module/types/universitychainit/params"
import { PersonalInfo } from "./module/types/universitychainit/personal_info"
import { ProfessorsExamsUnipi } from "./module/types/universitychainit/professors_exams_unipi"
import { ProfessorsExamsUniroma1 } from "./module/types/universitychainit/professors_exams_uniroma_1"
import { QueryGetProfessorsExamsRequest } from "./module/types/universitychainit/query"
import { ResidenceInfo } from "./module/types/universitychainit/residence_info"
import { StoredStudentUnipi } from "./module/types/universitychainit/stored_student_unipi"
import { StoredStudentUniroma1 } from "./module/types/universitychainit/stored_student_uniroma_1"
import { StudentInfo } from "./module/types/universitychainit/student_info"
import { TaxesInfo } from "./module/types/universitychainit/taxes_info"
import { TranscriptOfRecords } from "./module/types/universitychainit/transcript_of_records"
import { UniversityInfoUnipi } from "./module/types/universitychainit/university_info_unipi"
import { UniversityInfoUniroma1 } from "./module/types/universitychainit/university_info_uniroma_1"


export { ChainInfo, ContactInfo, ErasmusInfo, ForeignUniversities, UniversitychainitPacketData, NoData, Params, PersonalInfo, ProfessorsExamsUnipi, ProfessorsExamsUniroma1, QueryGetProfessorsExamsRequest, ResidenceInfo, StoredStudentUnipi, StoredStudentUniroma1, StudentInfo, TaxesInfo, TranscriptOfRecords, UniversityInfoUnipi, UniversityInfoUniroma1 };

async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
				Params: {},
				StudentInfo: {},
				TranscriptOfRecords: {},
				PersonalInfo: {},
				ResidenceInfo: {},
				ContactInfo: {},
				TaxesInfo: {},
				ErasmusInfo: {},
				ChainInfo: {},
				ForeignUniversities: {},
				ForeignUniversitiesAll: {},
				ProfessorsExamsUniroma1: {},
				ProfessorsExamsUniroma1All: {},
				StoredStudentUniroma1: {},
				StoredStudentUniroma1All: {},
				UniversityInfoUniroma1: {},
				ProfessorsExamsUnipi: {},
				ProfessorsExamsUnipiAll: {},
				StoredStudentUnipi: {},
				StoredStudentUnipiAll: {},
				UniversityInfoUnipi: {},
				
				_Structure: {
						ChainInfo: getStructure(ChainInfo.fromPartial({})),
						ContactInfo: getStructure(ContactInfo.fromPartial({})),
						ErasmusInfo: getStructure(ErasmusInfo.fromPartial({})),
						ForeignUniversities: getStructure(ForeignUniversities.fromPartial({})),
						UniversitychainitPacketData: getStructure(UniversitychainitPacketData.fromPartial({})),
						NoData: getStructure(NoData.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						PersonalInfo: getStructure(PersonalInfo.fromPartial({})),
						ProfessorsExamsUnipi: getStructure(ProfessorsExamsUnipi.fromPartial({})),
						ProfessorsExamsUniroma1: getStructure(ProfessorsExamsUniroma1.fromPartial({})),
						QueryGetProfessorsExamsRequest: getStructure(QueryGetProfessorsExamsRequest.fromPartial({})),
						ResidenceInfo: getStructure(ResidenceInfo.fromPartial({})),
						StoredStudentUnipi: getStructure(StoredStudentUnipi.fromPartial({})),
						StoredStudentUniroma1: getStructure(StoredStudentUniroma1.fromPartial({})),
						StudentInfo: getStructure(StudentInfo.fromPartial({})),
						TaxesInfo: getStructure(TaxesInfo.fromPartial({})),
						TranscriptOfRecords: getStructure(TranscriptOfRecords.fromPartial({})),
						UniversityInfoUnipi: getStructure(UniversityInfoUnipi.fromPartial({})),
						UniversityInfoUniroma1: getStructure(UniversityInfoUniroma1.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getStudentInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.StudentInfo[JSON.stringify(params)] ?? {}
		},
				getTranscriptOfRecords: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.TranscriptOfRecords[JSON.stringify(params)] ?? {}
		},
				getPersonalInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PersonalInfo[JSON.stringify(params)] ?? {}
		},
				getResidenceInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ResidenceInfo[JSON.stringify(params)] ?? {}
		},
				getContactInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ContactInfo[JSON.stringify(params)] ?? {}
		},
				getTaxesInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.TaxesInfo[JSON.stringify(params)] ?? {}
		},
				getErasmusInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ErasmusInfo[JSON.stringify(params)] ?? {}
		},
				getChainInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ChainInfo[JSON.stringify(params)] ?? {}
		},
				getForeignUniversities: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ForeignUniversities[JSON.stringify(params)] ?? {}
		},
				getForeignUniversitiesAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ForeignUniversitiesAll[JSON.stringify(params)] ?? {}
		},
				getProfessorsExamsUniroma1: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProfessorsExamsUniroma1[JSON.stringify(params)] ?? {}
		},
				getProfessorsExamsUniroma1All: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProfessorsExamsUniroma1All[JSON.stringify(params)] ?? {}
		},
				getStoredStudentUniroma1: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.StoredStudentUniroma1[JSON.stringify(params)] ?? {}
		},
				getStoredStudentUniroma1All: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.StoredStudentUniroma1All[JSON.stringify(params)] ?? {}
		},
				getUniversityInfoUniroma1: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.UniversityInfoUniroma1[JSON.stringify(params)] ?? {}
		},
				getProfessorsExamsUnipi: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProfessorsExamsUnipi[JSON.stringify(params)] ?? {}
		},
				getProfessorsExamsUnipiAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProfessorsExamsUnipiAll[JSON.stringify(params)] ?? {}
		},
				getStoredStudentUnipi: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.StoredStudentUnipi[JSON.stringify(params)] ?? {}
		},
				getStoredStudentUnipiAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.StoredStudentUnipiAll[JSON.stringify(params)] ?? {}
		},
				getUniversityInfoUnipi: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.UniversityInfoUnipi[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: university_chain_it.universitychainit initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryStudentInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryStudentInfo()).data
				
					
				commit('QUERY', { query: 'StudentInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryStudentInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getStudentInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryStudentInfo API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryTranscriptOfRecords({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryTranscriptOfRecords()).data
				
					
				commit('QUERY', { query: 'TranscriptOfRecords', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryTranscriptOfRecords', payload: { options: { all }, params: {...key},query }})
				return getters['getTranscriptOfRecords']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryTranscriptOfRecords API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPersonalInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryPersonalInfo()).data
				
					
				commit('QUERY', { query: 'PersonalInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPersonalInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getPersonalInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPersonalInfo API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryResidenceInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryResidenceInfo()).data
				
					
				commit('QUERY', { query: 'ResidenceInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryResidenceInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getResidenceInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryResidenceInfo API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryContactInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryContactInfo()).data
				
					
				commit('QUERY', { query: 'ContactInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryContactInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getContactInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryContactInfo API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryTaxesInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryTaxesInfo()).data
				
					
				commit('QUERY', { query: 'TaxesInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryTaxesInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getTaxesInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryTaxesInfo API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryErasmusInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryErasmusInfo()).data
				
					
				commit('QUERY', { query: 'ErasmusInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryErasmusInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getErasmusInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryErasmusInfo API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryChainInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryChainInfo()).data
				
					
				commit('QUERY', { query: 'ChainInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryChainInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getChainInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryChainInfo API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryForeignUniversities({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryForeignUniversities( key.universityName)).data
				
					
				commit('QUERY', { query: 'ForeignUniversities', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryForeignUniversities', payload: { options: { all }, params: {...key},query }})
				return getters['getForeignUniversities']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryForeignUniversities API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryForeignUniversitiesAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryForeignUniversitiesAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryForeignUniversitiesAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ForeignUniversitiesAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryForeignUniversitiesAll', payload: { options: { all }, params: {...key},query }})
				return getters['getForeignUniversitiesAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryForeignUniversitiesAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProfessorsExamsUniroma1({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryProfessorsExamsUniroma1( key.examName)).data
				
					
				commit('QUERY', { query: 'ProfessorsExamsUniroma1', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProfessorsExamsUniroma1', payload: { options: { all }, params: {...key},query }})
				return getters['getProfessorsExamsUniroma1']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProfessorsExamsUniroma1 API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProfessorsExamsUniroma1All({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryProfessorsExamsUniroma1All(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryProfessorsExamsUniroma1All({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ProfessorsExamsUniroma1All', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProfessorsExamsUniroma1All', payload: { options: { all }, params: {...key},query }})
				return getters['getProfessorsExamsUniroma1All']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProfessorsExamsUniroma1All API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryStoredStudentUniroma1({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryStoredStudentUniroma1( key.index)).data
				
					
				commit('QUERY', { query: 'StoredStudentUniroma1', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryStoredStudentUniroma1', payload: { options: { all }, params: {...key},query }})
				return getters['getStoredStudentUniroma1']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryStoredStudentUniroma1 API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryStoredStudentUniroma1All({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryStoredStudentUniroma1All(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryStoredStudentUniroma1All({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'StoredStudentUniroma1All', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryStoredStudentUniroma1All', payload: { options: { all }, params: {...key},query }})
				return getters['getStoredStudentUniroma1All']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryStoredStudentUniroma1All API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryUniversityInfoUniroma1({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryUniversityInfoUniroma1()).data
				
					
				commit('QUERY', { query: 'UniversityInfoUniroma1', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryUniversityInfoUniroma1', payload: { options: { all }, params: {...key},query }})
				return getters['getUniversityInfoUniroma1']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryUniversityInfoUniroma1 API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProfessorsExamsUnipi({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryProfessorsExamsUnipi( key.examName)).data
				
					
				commit('QUERY', { query: 'ProfessorsExamsUnipi', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProfessorsExamsUnipi', payload: { options: { all }, params: {...key},query }})
				return getters['getProfessorsExamsUnipi']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProfessorsExamsUnipi API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProfessorsExamsUnipiAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryProfessorsExamsUnipiAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryProfessorsExamsUnipiAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ProfessorsExamsUnipiAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProfessorsExamsUnipiAll', payload: { options: { all }, params: {...key},query }})
				return getters['getProfessorsExamsUnipiAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProfessorsExamsUnipiAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryStoredStudentUnipi({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryStoredStudentUnipi( key.index)).data
				
					
				commit('QUERY', { query: 'StoredStudentUnipi', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryStoredStudentUnipi', payload: { options: { all }, params: {...key},query }})
				return getters['getStoredStudentUnipi']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryStoredStudentUnipi API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryStoredStudentUnipiAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryStoredStudentUnipiAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryStoredStudentUnipiAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'StoredStudentUnipiAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryStoredStudentUnipiAll', payload: { options: { all }, params: {...key},query }})
				return getters['getStoredStudentUnipiAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryStoredStudentUnipiAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryUniversityInfoUnipi({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryUniversityInfoUnipi()).data
				
					
				commit('QUERY', { query: 'UniversityInfoUnipi', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryUniversityInfoUnipi', payload: { options: { all }, params: {...key},query }})
				return getters['getUniversityInfoUnipi']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryUniversityInfoUnipi API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgConfigureChain({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgConfigureChain(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgConfigureChain:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgConfigureChain:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgConfigureChain({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgConfigureChain(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgConfigureChain:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgConfigureChain:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
