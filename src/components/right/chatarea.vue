<template>
	<div class="title-wrap">
		<div class="wrap-poi">
			<span class="poi-name">{{chatInfo.nickname}}</span>
			<span v-if="chatInfo.members.length > 1" class="poi-count">({{chatInfo.members.length}})</span>
			<i v-if="currentChatIndex > -1" class="iconfont poi-icon">&#xe608;</i>
		</div>
	</div>

	<div class="chat-wrapper">
		<div class="wrapper-bd">
			<div v-if="currentChatIndex == -1" class="no-bubble">未选择聊天</div>
			
			<template v-else>
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

				<div class="bubble me">
					<img class="bubble-avatar" src="../../img/webwxgeticon.jpeg" width="40" height="40" />
					<div class="bubble-content">
						<div class="content-msg">
							<pre>经典1987复古手工小棉袄   颜色深邃蓝  喜庆红  各种碎花,经典1987复古手工小棉袄   颜色深邃蓝  喜庆红  各种碎花</pre>
						</div>
					</div>
				</div>
			</template>
			
		</div>
	</div>

	<div class="chat-ft">
		<div class="tool-bar">
			<a class="bar-item" href=""><i class="iconfont">&#xe60e;</i></a>
			<a class="bar-item" href=""><i class="iconfont">&#xe607;</i></a>
		</div>

		<pre class="edit-area" contenteditable="true"></pre>

		<div class="action">
			<span class="macos-hint">按下Cmd+Enter换行</span>
			<a class="send-btn" href="javascript:;">发送</a>
		</div>
	</div>
</template>

<style lang="sass">
	@import "../../sass/right_chatarea";

</style>

<script>
	import store from '../../js/store/index.js'
	import wgtMembers from './wgt_members.vue'

	export default {
		name: 'chatarea',
		components : {
			wgtMembers
		},
		computed: {
			chatInfo () {
				return store.state.chatList[store.state.currentChatIndex]
			},
			currentChatIndex () {
				return store.state.currentChatIndex
			},
			members (){
				
				return chatInfo.members.map(() => {

				})
			}
		}
	}
</script>