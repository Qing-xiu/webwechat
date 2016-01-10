<template>
	<div class="user">
		<div class="avatar">
			<img :src="user.avatar" width="40" height="40" />
		</div>
		<div class="info">
			<span class="nickname">{{user.nickname}}</span>
			<a class="opt" href="#"><i class="iconfont">&#xe601;</i></a>
		</div>
	</div>
</template>

<style lang="sass">
	@import "../../sass/mixins";

	.user{
		padding: 18px;
		@include clearfix();
		height: 40px;
		line-height:40px;

		.avatar{
			display:inline-block;
			vertical-align: middle;
			padding-right:11px;
			img{
				vertical-align: middle
			}
		}
		.info{
			display: inline-block;
			vertical-align: middle;
			height:40px;
			line-height:40px;
			.nickname{
				display:inline-block;
				width: 156px;
				@include text-overflow();
				font-size: 18px;
				color:#fff;
			}
			.opt{
				color:#777;
				display:inline-block;
				vertical-align:top;
			}
		}
	}

</style>

<script lang="babel">
	import store from '../../js/store/index.js'

	export default {
		name: 'user',

		computed: {
			user () {
				
				return store.state.members[store.state.userId];
			}
		}
	}
</script>