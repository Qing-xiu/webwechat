<template>
	<div class="chat-item active">
		<div class="item-avatar">
			<img src="../../img/webwxgeticon.jpeg" />
		</div>
		<div class="item-ext">
			<div class="ext-time">10: 32</div>
			<div class="ext-attr">
				<i class="iconfont">&#xe604;</i>
			</div>
		</div>
		<div class="item-info">
			<div class="info-nickname">有人的地方，就有江湖</div>
			<div class="info-msg">刀圣：一刀两断（劳资的大刀早已饥渴难耐）</div>
		</div>
	</div>

	<div class="chat-item">
		<div class="item-avatar">
			<img src="../../img/webwxgeticon.jpeg" />
		</div>
		<div class="item-ext">
			<div class="ext-time">10: 32</div>
			<div class="ext-attr">
				<i class="iconfont">&#xe604;</i>
			</div>
		</div>
		<div class="item-info">
			<div class="info-nickname">有人的地方，就有江湖</div>
			<div class="info-msg">枪圣：枪龙出海</div>
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
	export default {
		name: 'chat'
	}
</script>

