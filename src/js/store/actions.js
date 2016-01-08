import * as types from './mutations.js'

export const delChatList = ({dispatch}, index) => {
	dispatch(types.DEL_CHATLIST, index)
}

export const addChatList = ({dispatch}, index) => {
	dispatch(types.ADD_CHATLIST, index)
}

export const changeView = ({dispatch}, v) => {
	
	dispatch(types.CHANGEVIEW, v)
}

export const toggleChat = ({dispatch}, index) => {
	dispatch(types.TOGGLECHAT, index)
}

export const toggleMemberModal = ({dispatch}) => {
	dispatch(types.TOGGLEMEMBERMODAL)
}