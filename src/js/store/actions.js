import * as types from './mutations.js'

export const delChatList = ({dispatch}, index) => {
	dispatch(types.DEL_CHATLIST, index)
}

export const addChatList = ({dispatch}, index) => {
	console.log('add2')
	dispatch(types.ADD_CHATLIST, index)
}

export const changeView = ({dispatch}, v) => {
	
	dispatch(types.CHANGEVIEW, v)
}