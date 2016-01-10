<template>
	<div class="wgt-members">
		<div class="member">
			<div class="opt"><i class="iconfont">&#xe60a;</i></div>
		</div>

		<div v-for="item in myMessage" class="member">
			
			<img class="member-avatar" :src="item.avatar"  width="55" height="55" />	
			
			<div class="member-nickname">{{item.nickname}}</div>
		</div>
	</div>
</template>
<style lang="sass">
	@import "../../sass/mixins";

	.wgt-members{
		position:absolute;
		z-index:9;
		right:0px;
		left:0px;
		top:51px;
		padding: 10px 4px 8px 17px;
		border-bottom:1px solid #dedede;
		background:#eee;
		font-size: 0px;

		.member{
			display:inline-block;
			height: 85px;
			padding-top:10px;
			margin: 0 7px;
			vertical-align: middle;
			text-align:center;
		}

		.opt{
			width: 55px;
			height: 55px;
			text-align:center;
			line-height: 55px;
			border: 1px dashed #bbb;
			.iconfont{
				font-size: 28px;
			}
		}

		.member-avatar{
			display: block;
			height:55px;
			width: 55px;
			background:#ccc;
			cursor:pointer;
			text-align:center;
		}

		.member-nickname{
			width: 72px;
			text-align:center;
			@include text-overflow();
			height: 30px;
			line-height: 30px;
			margin-left: -8px;
			font-size: 12px;
		}
	}

	.expend{

	}
</style>
<script>
	export default {
		props: ['myMessage'],

	}
</script>