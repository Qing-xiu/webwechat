<template>
	<div class="box" >
		<chatarea v-show="view == 'chat'"></chatarea>
		<contactarea v-show="view == 'contact'"></contactarea>
	</div>
</template>


<style lang="sass">
	.box{
		position:relative;
		margin-left: 280px;
		background:#eee;
		height: 100%;
	}
</style>

<script>
	import store from '../js/store/index.js'
	import chatarea from './right/chatarea.vue'
	import contactarea from './right/contactArea.vue'

	export default {
		name: 'right',
		computed: {
			view () {
				return store.state.view
			}
		},
		components:{
			chatarea,
			contactarea
		}
	}
</script>