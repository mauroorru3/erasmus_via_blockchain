import { txClient, queryClient, MissingWalletError , registry} from './module'

import { AnnualTaxes } from "./module/types/universitychainit/annual_taxes"
import { ChainInfo } from "./module/types/universitychainit/chain_info"
import { ContactInfo } from "./module/types/universitychainit/contact_info"
import { ErasmusCareer } from "./module/types/universitychainit/erasmus_career"
import { ErasmusContribution } from "./module/types/universitychainit/erasmus_contribution"
import { ErasmusExams } from "./module/types/universitychainit/erasmus_exams"
import { ErasmusInfo } from "./module/types/universitychainit/erasmus_info"
import { ExamsInfo } from "./module/types/universitychainit/exams_info"
import { ForeignUniversities } from "./module/types/universitychainit/foreign_universities"
import { UniversitychainitPacketData } from "./module/types/universitychainit/packet"
import { NoData } from "./module/types/universitychainit/packet"
import { Params } from "./module/types/universitychainit/params"
import { PersonalInfo } from "./module/types/universitychainit/personal_info"
import { ProfessorsExams } from "./module/types/universitychainit/professors_exams"
import { ResidenceInfo } from "./module/types/universitychainit/residence_info"
import { StoredStudent } from "./module/types/universitychainit/stored_student"
import { StudentInfo } from "./module/types/universitychainit/student_info"
import { TaxesInfo } from "./module/types/universitychainit/taxes_info"
import { TranscriptOfRecords } from "./module/types/universitychainit/transcript_of_records"
import { UniversityDetails } from "./module/types/universitychainit/university_details"
import { UniversityInfo } from "./module/types/universitychainit/university_info"


export { AnnualTaxes, ChainInfo, ContactInfo, ErasmusCareer, ErasmusContribution, ErasmusExams, ErasmusInfo, ExamsInfo, ForeignUniversities, UniversitychainitPacketData, NoData, Params, PersonalInfo, ProfessorsExams, ResidenceInfo, StoredStudent, StudentInfo, TaxesInfo, TranscriptOfRecords, UniversityDetails, UniversityInfo };

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
				ProfessorsExams: {},
				ProfessorsExamsAll: {},
				StudentInfo: {},
				ExamsInfo: {},
				ExamsInfoAll: {},
				TranscriptOfRecords: {},
				PersonalInfo: {},
				ResidenceInfo: {},
				ContactInfo: {},
				AnnualTaxes: {},
				AnnualTaxesAll: {},
				TaxesInfo: {},
				ErasmusContribution: {},
				ErasmusExams: {},
				ErasmusExamsAll: {},
				ErasmusCareer: {},
				ErasmusCareerAll: {},
				ErasmusInfo: {},
				StoredStudent: {},
				StoredStudentAll: {},
				UniversityInfo: {},
				UniversityDetails: {},
				UniversityDetailsAll: {},
				ChainInfo: {},
				ForeignUniversities: {},
				ForeignUniversitiesAll: {},
				
				_Structure: {
						AnnualTaxes: getStructure(AnnualTaxes.fromPartial({})),
						ChainInfo: getStructure(ChainInfo.fromPartial({})),
						ContactInfo: getStructure(ContactInfo.fromPartial({})),
						ErasmusCareer: getStructure(ErasmusCareer.fromPartial({})),
						ErasmusContribution: getStructure(ErasmusContribution.fromPartial({})),
						ErasmusExams: getStructure(ErasmusExams.fromPartial({})),
						ErasmusInfo: getStructure(ErasmusInfo.fromPartial({})),
						ExamsInfo: getStructure(ExamsInfo.fromPartial({})),
						ForeignUniversities: getStructure(ForeignUniversities.fromPartial({})),
						UniversitychainitPacketData: getStructure(UniversitychainitPacketData.fromPartial({})),
						NoData: getStructure(NoData.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						PersonalInfo: getStructure(PersonalInfo.fromPartial({})),
						ProfessorsExams: getStructure(ProfessorsExams.fromPartial({})),
						ResidenceInfo: getStructure(ResidenceInfo.fromPartial({})),
						StoredStudent: getStructure(StoredStudent.fromPartial({})),
						StudentInfo: getStructure(StudentInfo.fromPartial({})),
						TaxesInfo: getStructure(TaxesInfo.fromPartial({})),
						TranscriptOfRecords: getStructure(TranscriptOfRecords.fromPartial({})),
						UniversityDetails: getStructure(UniversityDetails.fromPartial({})),
						UniversityInfo: getStructure(UniversityInfo.fromPartial({})),
						
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
				getProfessorsExams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProfessorsExams[JSON.stringify(params)] ?? {}
		},
				getProfessorsExamsAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProfessorsExamsAll[JSON.stringify(params)] ?? {}
		},
				getStudentInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.StudentInfo[JSON.stringify(params)] ?? {}
		},
				getExamsInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ExamsInfo[JSON.stringify(params)] ?? {}
		},
				getExamsInfoAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ExamsInfoAll[JSON.stringify(params)] ?? {}
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
				getAnnualTaxes: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AnnualTaxes[JSON.stringify(params)] ?? {}
		},
				getAnnualTaxesAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AnnualTaxesAll[JSON.stringify(params)] ?? {}
		},
				getTaxesInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.TaxesInfo[JSON.stringify(params)] ?? {}
		},
				getErasmusContribution: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ErasmusContribution[JSON.stringify(params)] ?? {}
		},
				getErasmusExams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ErasmusExams[JSON.stringify(params)] ?? {}
		},
				getErasmusExamsAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ErasmusExamsAll[JSON.stringify(params)] ?? {}
		},
				getErasmusCareer: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ErasmusCareer[JSON.stringify(params)] ?? {}
		},
				getErasmusCareerAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ErasmusCareerAll[JSON.stringify(params)] ?? {}
		},
				getErasmusInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ErasmusInfo[JSON.stringify(params)] ?? {}
		},
				getStoredStudent: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.StoredStudent[JSON.stringify(params)] ?? {}
		},
				getStoredStudentAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.StoredStudentAll[JSON.stringify(params)] ?? {}
		},
				getUniversityInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.UniversityInfo[JSON.stringify(params)] ?? {}
		},
				getUniversityDetails: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.UniversityDetails[JSON.stringify(params)] ?? {}
		},
				getUniversityDetailsAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.UniversityDetailsAll[JSON.stringify(params)] ?? {}
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
		
		
		
		
		 		
		
		
		async QueryProfessorsExams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryProfessorsExams( key.examName)).data
				
					
				commit('QUERY', { query: 'ProfessorsExams', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProfessorsExams', payload: { options: { all }, params: {...key},query }})
				return getters['getProfessorsExams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProfessorsExams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProfessorsExamsAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryProfessorsExamsAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryProfessorsExamsAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ProfessorsExamsAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProfessorsExamsAll', payload: { options: { all }, params: {...key},query }})
				return getters['getProfessorsExamsAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProfessorsExamsAll API Node Unavailable. Could not perform query: ' + e.message)
				
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
		
		
		
		
		 		
		
		
		async QueryExamsInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryExamsInfo( key.examName)).data
				
					
				commit('QUERY', { query: 'ExamsInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryExamsInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getExamsInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryExamsInfo API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryExamsInfoAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryExamsInfoAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryExamsInfoAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ExamsInfoAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryExamsInfoAll', payload: { options: { all }, params: {...key},query }})
				return getters['getExamsInfoAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryExamsInfoAll API Node Unavailable. Could not perform query: ' + e.message)
				
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
		
		
		
		
		 		
		
		
		async QueryAnnualTaxes({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryAnnualTaxes( key.id)).data
				
					
				commit('QUERY', { query: 'AnnualTaxes', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAnnualTaxes', payload: { options: { all }, params: {...key},query }})
				return getters['getAnnualTaxes']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAnnualTaxes API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAnnualTaxesAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryAnnualTaxesAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryAnnualTaxesAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'AnnualTaxesAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAnnualTaxesAll', payload: { options: { all }, params: {...key},query }})
				return getters['getAnnualTaxesAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAnnualTaxesAll API Node Unavailable. Could not perform query: ' + e.message)
				
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
		
		
		
		
		 		
		
		
		async QueryErasmusContribution({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryErasmusContribution()).data
				
					
				commit('QUERY', { query: 'ErasmusContribution', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryErasmusContribution', payload: { options: { all }, params: {...key},query }})
				return getters['getErasmusContribution']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryErasmusContribution API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryErasmusExams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryErasmusExams( key.examName)).data
				
					
				commit('QUERY', { query: 'ErasmusExams', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryErasmusExams', payload: { options: { all }, params: {...key},query }})
				return getters['getErasmusExams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryErasmusExams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryErasmusExamsAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryErasmusExamsAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryErasmusExamsAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ErasmusExamsAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryErasmusExamsAll', payload: { options: { all }, params: {...key},query }})
				return getters['getErasmusExamsAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryErasmusExamsAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryErasmusCareer({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryErasmusCareer( key.id)).data
				
					
				commit('QUERY', { query: 'ErasmusCareer', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryErasmusCareer', payload: { options: { all }, params: {...key},query }})
				return getters['getErasmusCareer']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryErasmusCareer API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryErasmusCareerAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryErasmusCareerAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryErasmusCareerAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ErasmusCareerAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryErasmusCareerAll', payload: { options: { all }, params: {...key},query }})
				return getters['getErasmusCareerAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryErasmusCareerAll API Node Unavailable. Could not perform query: ' + e.message)
				
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
		
		
		
		
		 		
		
		
		async QueryStoredStudent({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryStoredStudent( key.index)).data
				
					
				commit('QUERY', { query: 'StoredStudent', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryStoredStudent', payload: { options: { all }, params: {...key},query }})
				return getters['getStoredStudent']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryStoredStudent API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryStoredStudentAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryStoredStudentAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryStoredStudentAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'StoredStudentAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryStoredStudentAll', payload: { options: { all }, params: {...key},query }})
				return getters['getStoredStudentAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryStoredStudentAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryUniversityInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryUniversityInfo()).data
				
					
				commit('QUERY', { query: 'UniversityInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryUniversityInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getUniversityInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryUniversityInfo API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryUniversityDetails({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryUniversityDetails( key.universityName)).data
				
					
				commit('QUERY', { query: 'UniversityDetails', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryUniversityDetails', payload: { options: { all }, params: {...key},query }})
				return getters['getUniversityDetails']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryUniversityDetails API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryUniversityDetailsAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryUniversityDetailsAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryUniversityDetailsAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'UniversityDetailsAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryUniversityDetailsAll', payload: { options: { all }, params: {...key},query }})
				return getters['getUniversityDetailsAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryUniversityDetailsAll API Node Unavailable. Could not perform query: ' + e.message)
				
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
