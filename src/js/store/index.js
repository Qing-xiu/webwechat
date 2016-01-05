import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	strict: true,
	middlewares: [Vuex.createLogger()],
	state: {
		view: 'chat'
	},
	mutations: {
		CHANGEVIEW (state, view){
			state.view = view
		}
	},

	actions: {
		changeView: 'CHANGEVIEW'
	},
	
})

console.log(process.env.NODE_ENV)

export default store;