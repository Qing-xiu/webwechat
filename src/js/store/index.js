import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 1
	},
	mutations: {
		INCREMENT (state, n) {
			state.count += n;
		}
	},

	actions: {
		increment: 'INCREMENT'
	},
	
})

export default store;