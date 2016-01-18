import * as types from './mutations.js'

export const delChatList = ({dispatch}, index) => {
	dispatch(types.DEL_CHATLIST, index)
}

export const addChatList = ({dispatch}, data) => {
	dispatch(types.ADD_CHATLIST, data)
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

export const publishMsg = ({dispatch}, msg) => {
	dispatch(types.PUBLISH_MSG, msg)
}

export const changeContactIndex = ({dispatch}, index) => {
	dispatch(types.CHANGE_CONTACT_INDEX, index)
}

export const addMsgRecord =  ({dispatch}, data) =>{
	dispatch(types.ADD_MSGRECORD, data)
}

export const addChat = (store, id) => {
	//if(store.state.msgRecord)
	var data = this.contact[id];

	store.actions.addChatList({
		avatar: data.avatar,
		nickname: data.nickname,
		message: '',
		members: [id],
		locked: false
	});

	store.actions.changeView('chat');
	store.actions.toggleChat(0);
	store.actions.addMsgRecord([])
}