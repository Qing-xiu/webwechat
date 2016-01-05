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
			height: 1000px;
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