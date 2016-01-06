<template>
	
		<div v-for="item in chatList" class="chat-item active">
			<div class="item-avatar">
				<img :src="item.avatar" />
			</div>
			<div class="item-ext">
				<div class="ext-time">{{item.time}}</div>
				<div class="ext-attr">
					<i class="iconfont">&#xe604;</i>
				</div>
			</div>
			<div class="item-info">
				<div class="info-nickname">{{item.nickname}}</div>
				<div class="info-msg">{{item.message}}</div>
			</div>
		</div>
	
</template>

<style lang="sass">
	@import '../../sass/mixins';

	.chat-item{
		@include clearfix();
		padding: 12px 18px 11px;
		border-bottom: 1px solid #292C33;
		cursor: pointer;
		
		&.active{
			background-color: #3A3F45;
			.item-info{
				.info-msg{
					color:#fff;
				}
			}
			.item-ext{
				color:#fff;
			}
		}

		.item-avatar{
			float: left;
			margin-right: 10px;
			width: 40px;
			height: 40px;
			border-radius: 2px;
			

			img{
				width: 40px;
				height: 40px;
				border-radius: 2px;
			}
		}
		.item-info{
			overflow: hidden;
			
			.info-nickname{
				@include text-overflow();
				color:#fff;
				height: 1.5em;
				line-height: 20px;
				font-size: 13px;
			}
			.info-msg{
				@include text-overflow();
				color:#989898;
				height: 1.5em;
				font-size: 13px;
			}
		}
		.item-ext{
			float:right;
			color: #6b6f7c;
			text-align: right;
			.ext-time, .ext-attr{
				height:19px;
				line-height: 1.5;
				font-size: 13px;
			}
		}

	}
</style>

<script lang="babel">
	import store from "../../js/store/index.js"

	export default {
		name: 'chat',
		computed:{
			chatList () {
				return store.state.chatList
			}
		}
	}
</script>

