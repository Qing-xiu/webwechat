import Vue from 'vue';
import Vuex from 'vuex';
import {chatListInitialState, chatListMutations} from './module/chatlist.js';
import {initialState, initialMutations} from './module/initial.js'
import {membersState, membersMutations} from './module/members.js'
import {msgrecordState, msgrecordMutations} from './module/msgrecord.js'
import * as actions from "./actions.js";

Vue.use(Vuex);

Vue.config.debug = true

const store = new Vuex.Store({
	strict: true,
	middlewares: [Vuex.createLogger()],
	state: {
		userId: '007',
		members: membersState,
		view: initialState.view,
		currentChatIndex: initialState.currentChatIndex,
		memberModal: initialState.memberModal,
		chatList: chatListInitialState,
		msgRecord: msgrecordState
	},

	mutations: [chatListMutations, initialMutations],
	
	actions,
})



export default store;