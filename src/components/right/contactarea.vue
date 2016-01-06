<template>
	<div class="title-wrap">
		<div class="wrap-poi">
			<span class="poi-name">详细信息</span>
		</div>
	</div>

	<div class="conatct-bd">
		<div class="avatar">
			<img src="../../img/webwxgeticon.jpeg" width="100" height="100" />
		</div>
		<div class="nickname-area">
			<div class="nickname">江东帆影</div>
			<i class="iconfont men">&#xe60b;</i>
			<i class="iconfont women">&#xe60d;</i>
		</div>
		<div class="signature">江畔何人初见月，江月何年初照人</div>
		<div class="meta-area">
			<div class="meta-item">
				<span class="item-l">备注：</span>
				<div class="item-r">陆孤瞻</div>
			</div>
			<div class="meta-item">
				<span class="item-l">地区：</span>
				<div class="item-r">广东 罗浮山</div>
			</div>
		</div>

		<div class="button-area">
			<a class="send-btn" href="javascript:;">发消息</a>
		</div>
	</div>
</template>

<style lang="sass">
	@import "../../sass/right_contactarea";
</style>

<script>
	export default {
		name: 'contactarea'
	}
</script>