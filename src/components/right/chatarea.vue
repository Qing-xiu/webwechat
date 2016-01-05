<template>
	<div class="title-wrap">
		<div class="wrap-poi">
			<span class="poi-name">赵日天</span>
			<span class="poi-count">(12)</span>
			<i class="iconfont poi-icon">&#xe608;</i>
		</div>
	</div>

	<div class="chat-wrapper">
		<div class="wrapper-bd">
			<div class="bubble">
				<div class="bubble-system">
					<span class="system-content">15:16</span>
				</div>

				<img class="bubble-avatar" src="../../img/webwxgeticon.jpeg" width="40" height="40" />
				<div class="bubble-content">
					<div class="content-nickname">哈哈镜</div>
					<div class="content-msg">
						<pre>经典1987复古手工小棉袄   颜色深邃蓝  喜庆红  各种碎花,经典1987复古手工小棉袄   颜色深邃蓝  喜庆红  各种碎花</pre>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="chat-ft">
		
	</div>
</template>

<style lang="sass">
	@import "../../sass/mixins";

	.title-wrap{
		position: relative;
	    padding: 10px 0;
	    margin: 0 19px;
	    border-bottom: 1px solid #d6d6d6;
	    background-color: #EEE;
	    z-index: 9;
	    text-align: center;
	    .wrap-poi{
	    	
		    height: 30px;
		    display: inline-block;
		    line-height: 30px;
		    cursor:pointer;
	    }
	    .poi-count{
	    	display:inline-block;
	    	vertical-align:middle;
	    	font-size: 14px;
	    	font-weight: 400;
	    }
	    .poi-name{
	    	display:inline-block;
	    	max-width: 300px;
	    	@include text-overflow();
	    	vertical-align:middle;
	    	font-size: 14px;
	    	font-weight: 400;
	    }
		.poi-icon{
			vertical-align: middle;
			color:#999;
		}
	}

	.chat-wrapper{
		position: absolute;
		left:0px;
		right:0px;
		top: 51px;
		bottom: 180px;
		overflow-y: auto;
		padding: 0 19px;
		.wrapper-bd{
			
		}

		.bubble{
			@include clearfix();
			margin-bottom: 16px;
		}

		.bubble-system{
			text-align:center;
			margin: 10px auto;
			max-width: 50%;
			.system-content{
				display: inline-block;
				line-height: 1.6;
				background-color: #dcdcdc;
				font-size:12px;
				padding: 1px 18px;
				color: #fff;
				border-radius: 2px;
			}
		}

		.bubble-avatar{
			float: left;
		}

		.bubble-content{
			overflow: hidden;

			.content-nickname{
				font-size: 12px;
				font-weight: 400;
				@include text-overflow();
				width: 350px;
				padding-left: 10px;
				color:#4f4f4f;
				height: 22px;
				line-height:24px;
			}
			.content-msg{
				word-wrap: break-word;
				word-break: break-all;
				padding: 9px 13px;
				background-color:#fff;
				border-radius: 3px;
				max-width:500px;
				margin: 0 10px;
				font-size: 14px;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
			}
		}
	}

	.chat-ft{
		position:absolute;
		height: 180px;
		bottom: 0px;
		left:0px;
		right: 0px;
		margin-right: 19px;
		border-top: 1px solid #d6d6d6;
	}


</style>

<script>
	export default {
		name: 'chatarea'
	}
</script>