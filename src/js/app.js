require('../sass/base/base.scss');

import Vue from 'vue';
import Router from 'vue-router';
import App from '../components/app.vue';
import store from './store/index.js';

console.log(store)

new Vue({
	el:'body',
	components:{
		App
	}
})

