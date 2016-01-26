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

export const changeContactKey = ({dispatch}, key) => {
	dispatch(types.CHANGE_CONTACT_KEY, key)
}

export const addMsgRecord =  ({dispatch}, data) =>{
	dispatch(types.ADD_MSGRECORD, data)
}

export const addChat = (store, id) => {
	const chatList = store.state.chatList;
	var index = -1;

	for(var i = 0, len = chatList.length; i < len; i++){
		if(chatList[i].members.length == 1 && chatList[i].members.indexOf(id) > -1){
			index = i;
			break;
		}
	}

	if(index > -1){
		store.actions.changeView('chat');		
		store.actions.topChat(index);
		return;
	}
	
	var data = store.state.members[id];
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

export const topChat = (store, index) => {
	store.dispatch(types.TOP_CHATLIST, index)
	store.dispatch(types.TOP_MSGRECORD, index)
	store.actions.toggleChat(0)
}

