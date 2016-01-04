<template>
	<div class="contact">
		<div class="sort-title">A</div>
		<div class="contact-item">
			<div class="item-avatar">
				<img src="../../img/webwxgeticon.jpeg" width="30" height="30"/>
			</div>
			<div class="item-info">
				<div class="info-nickname">Ava</div>
			</div>
		</div>
		<div class="contact-item">
			<div class="item-avatar">
				<img src="../../img/webwxgeticon.jpeg" width="30" height="30"/>
			</div>
			<div class="item-info">
				<div class="info-nickname">Amiee</div>
			</div>
		</div>
		<div class="contact-item">
			<div class="item-avatar">
				<img src="../../img/webwxgeticon.jpeg" width="30" height="30"/>
			</div>
			<div class="item-info">
				<div class="info-nickname">Alvin</div>
			</div>
		</div>
		<div class="contact-item">
			<div class="item-avatar">
				<img src="../../img/webwxgeticon.jpeg" width="30" height="30"/>
			</div>
			<div class="item-info">
				<div class="info-nickname">枪龙出海</div>
			</div>
		</div>
		<div class="contact-item">
			<div class="item-avatar">
				<img src="../../img/webwxgeticon.jpeg" width="30" height="30"/>
			</div>
			<div class="item-info">
				<div class="info-nickname">一剑成名</div>
			</div>
		</div>
		<div class="contact-item">
			<div class="item-avatar">
				<img src="../../img/webwxgeticon.jpeg" width="30" height="30"/>
			</div>
			<div class="item-info">
				<div class="info-nickname">枪龙出海</div>
			</div>
		</div>
		<div class="contact-item">
			<div class="item-avatar">
				<img src="../../img/webwxgeticon.jpeg" width="30" height="30"/>
			</div>
			<div class="item-info">
				<div class="info-nickname">一剑成名</div>
			</div>
		</div>
		<div class="contact-item">
			<div class="item-avatar">
				<img src="../../img/webwxgeticon.jpeg" width="30" height="30"/>
			</div>
			<div class="item-info">
				<div class="info-nickname">枪龙出海</div>
			</div>
		</div>
		<div class="contact-item">
			<div class="item-avatar">
				<img src="../../img/webwxgeticon.jpeg" width="30" height="30"/>
			</div>
			<div class="item-info">
				<div class="info-nickname">一剑成名</div>
			</div>
		</div>
		<div class="contact-item">
			<div class="item-avatar">
				<img src="../../img/webwxgeticon.jpeg" width="30" height="30"/>
			</div>
			<div class="item-info">
				<div class="info-nickname">枪龙出海</div>
			</div>
		</div>
		<div class="contact-item">
			<div class="item-avatar">
				<img src="../../img/webwxgeticon.jpeg" width="30" height="30"/>
			</div>
			<div class="item-info">
				<div class="info-nickname">一剑成名</div>
			</div>
		</div>
	</div>
</template>

<style  lang="sass">
	@import '../../sass/mixins';
	
	.contact{
		.sort-title{
			font-weight: 400;
			color:#787b87;
			font-size: 14px;
			background: #292d32;
			padding: 2px 18px;
		}

		.contact-item{
			@include clearfix();
			padding: 10px 18px 9px;
			cursor:pointer;
			border-bottom: 1px solid #292C33;
			.item-avatar{
				float:left;
				width: 30px;
				margin-right: 10px;
			}
			.item-info{
				overflow: hidden;
				line-height: 30px;
			}
			.info-nickname{
				color:#fff;
				font-size:13px;
				font-weight:400;
				@include text-overflow();
				width: 100%;
			}
		}
	}
</style>

<script lang="babel">
	export default {
		name: 'contact'
	}
</script>