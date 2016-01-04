<template>
	<div class="panel">
		<user></user>
		<search></search>
		<tab></tab>
	</div>
</template>

<style lang="sass">
	.panel{
		position:relative;
		width: 280px;
		background:#2e3238;
		float: left;
		height: 100%;
	}
</style>

<script lang="babel">
	import user from './left/user.vue'
	import search from './left/search.vue'
	import tab from './left/tab.vue'
	

	export default{
		name: 'left',
		data (){
			return {
				currentView: 'chat'
			}
		},
		components:{
			user,
			search,
			tab
		}
	}
</script>