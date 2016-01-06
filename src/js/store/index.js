import Vue from 'vue';
import Vuex from 'vuex';
import {chatListInitialState, chatListMutations} from './module/chatlist.js';
import {initialState, initialMutations} from './module/initial.js'
import * as actions from "./actions.js";

Vue.use(Vuex);

console.log(chatListMutations)
console.log(initialMutations)

const store = new Vuex.Store({
	strict: true,
	middlewares: [Vuex.createLogger()],
	state: {
		view: initialState.view,
		chatList: chatListInitialState
	},

	mutations: [chatListMutations, initialMutations],

	actions,
})

console.log(process.env.NODE_ENV)

export default store;