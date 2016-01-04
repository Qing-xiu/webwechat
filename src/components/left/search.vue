<template>
	<div class="search">
		<div class="search-icon"><i class="iconfont">&#xe600;</i></div>
		<input class="search-input" type="text" placeholder="搜索" />
	</div>
</template>

<style lang="sass">
	.search{
		width: 244px;
		margin: 0 auto 6px;
		position:relative;
	
		.search-icon{
			position:absolute;
			z-index:2;
			width:30px;
			height:30px;
			top:0px;
			left:0px;
			text-align:center;
			line-height:30px;
			
			.iconfont{
				font-size:20px;
				color:#797979;
			}
		}
		.search-input{
			width:214px;
			height:32px;
			line-height:32px;
			border:0;
			background-color:#26292E;
			color:#fff;
			font-size: 12px;
			padding-left:30px;

		}
	}
</style>

<script lang="babel">
	export default {
		name: 'search'
	}
</script>

