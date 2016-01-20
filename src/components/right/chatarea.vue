<template>
	<div class="title-wrap">
		<div class="wrap-poi" @click.stop="toggleMemberModal">
			<template v-if="currentChatIndex >= 0">
				<span class="poi-name">{{chatInfo.nickname}}</span>
				<span v-if="chatInfo.members.length > 1" class="poi-count">({{chatInfo.members.length}})</span>
				<i v-if="currentChatIndex > -1" class="iconfont poi-icon">&#xe608;</i>
			</template>
		</div>
	</div>

	<wgtmembers v-show="memberModal" @click.stop :my-message="members" transition="expend"></wgtmembers>

	<div id="chatWrapper" class="chat-wrapper">
		<div class="wrapper-bd">

			<div v-if="currentChatIndex == -1" class="no-bubble">未选择聊天</div>
			<template v-else>
				<div v-if="msgRecord.length < 1" class="no-bubble">暂时没有新消息</div>
				<div v-else class="clearfix" v-for="msg in msgRecord" >
					<div class="bubble" :class="{me: msg.userId == userId}">
						<div class="bubble-system">
							<span class="system-content">{{msg.time | dateBy}}</span>
						</div>

						<img class="bubble-avatar" :src="allMembers[msg.userId].avatar" width="40" height="40" />
						<div class="bubble-content">
							<div v-if="msg.userId != userId" class="content-nickname">{{allMembers[msg.userId].nickname}}</div>
							<div class="content-msg">
								<pre>{{{msg.msg}}}</pre>
							</div>
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

		<pre class="edit-area" contenteditable="true" @keyup="publishMsg($event)" @keydown="keydownEvent($event)" ></pre>

		<div class="action">
			<span class="macos-hint">按下Cmd+Enter换行</span>
			<a class="send-btn" href="javascript:;">发送</a>
		</div>
	</div>
</template>

<style lang="sass">
	@import "../../sass/right_chatarea";
	.expend-transition{
		transition: all .3s ease;
	}

	.expend-enter, .expend-leave{
		opacity: 0;
		transform: translate(0, -30px);
	}
</style>

<script>
	import store from '../../js/store/index.js'
	import wgtmembers from './wgt_members.vue'

	import Vue from 'vue'

	Vue.filter('dateBy', function(v){
		var date = new Date(v),
			hours = date.getHours() + '',
			minutes = date.getMinutes() + '';
			console.log(hours.length)
		return (hours.length > 1 ? hours : '0' + hours) + ' : ' + ( minutes.length > 1 ? minutes : '0' + minutes )
	})

	export default {
		name: 'chatarea',

		components : {
			wgtmembers
		},
		computed: {
			memberModal () {
				return store.state.memberModal
			},
			chatInfo () {
				return this.currentChatIndex > -1 ? store.state.chatList[this.currentChatIndex] : {}
			},
			currentChatIndex () {
				return store.state.currentChatIndex
			},
			members (){
				return this.currentChatIndex > -1 ? this.chatInfo.members.map((id) => {
					return store.state.members[id];
				}) : []
			},
			msgRecord () {
				return this.currentChatIndex > -1 ? store.state.msgRecord[this.currentChatIndex].list : {}
			},
			allMembers () {
				return store.state.members
			},
			userId () {
				return store.state.userId
			}
		},

		methods: {
			toggleMemberModal: store.actions.toggleMemberModal,
			keydownEvent (e) {
				if(e.keyCode == 13 && !e.shiftKey){
					e.preventDefault();

					var msg = e.target.innerHTML;

					if(msg == '') return;
					e.target.innerHTML = '';
					store.actions.publishMsg(msg);

					this.$nextTick(function(){
						var wrapper = document.querySelector('#chatWrapper');
						wrapper.scrollTop = wrapper.scrollHeight;
					});
					
				}
			},
			publishMsg (e) {
			}
		},

		events: {
			scrollToBottom () {

			}
		}
	}
</script>