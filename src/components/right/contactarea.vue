<template>
	<div class="title-wrap">
		<div class="wrap-poi">
			<span class="poi-name">详细信息</span>
		</div>
	</div>

	<div class="conatct-bd" v-if="info">
		<div class="avatar">
			<img :src="info.avatar" width="100" height="100" />
		</div>
		<div class="nickname-area">
			<div class="nickname">{{info.nickname}}</div>
			<i v-if="info.gender == 'man' " class="iconfont men">&#xe60b;</i>
			<i v-if="info.gender == 'woman' " class="iconfont women">&#xe60d;</i>
		</div>
		<div class="signature">{{info.signature}}</div>

		<div v-if="info.meta" class="meta-area">
			<div v-for="item in info.meta" class="meta-item">
				<span class="item-l">{{item.label}}：</span>
				<div class="item-r">{{item.value}}</div>
			</div>
		</div>

		<div class="button-area">
			<a @click="addChat(currentKey)" class="send-btn" href="javascript:;">发消息</a>
		</div>
	</div>
</template>

<style lang="sass">
	@import "../../sass/right_contactarea";
</style>

<script>
	import store from '../../js/store/index.js'

	export default {
		name: 'contactarea',
		computed: {
			contact () {
				var members = store.state.members,
					data = [];

				for(var i in members){
					if(members[i].relation == 'friend'){
						data[i] = members[i]
						//data.push(members[i])
					}
				}

				console.log(data)

				return data;
			},
			currentKey () {
				return store.state.contact.currentKey
			},
			info () {
				return this.contact[this.currentKey]
			}
		},

		methods: {
			addChat: store.actions.addChat
		}
	}
</script>