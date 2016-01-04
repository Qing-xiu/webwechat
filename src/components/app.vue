<template>
	<div class="main">
		<div class="main-inner">
			<left></left>
			<right></right>
		</div>
	</div>
</template>

<style lang="sass">
	@import "../sass/mixins";

	.main{
		height: 80%;
		min-height:600px;
		padding-top:100px;
		.main-inner{
			max-width:1000px;
			min-width:800px;
			height:100%;
			margin: 0 auto;
			@include clearfix();
		}
	}

	@media (max-width: 1000px), (max-height: 800px){
		.main{
			padding-top:0px;
			height: 100%;
		}
	}
</style>

<script lang="babel">
	import left from './left.vue'
	import right from './right.vue'

	export default {
		name: 'App',
		components:{
			left,
			right
		}
	}
</script>