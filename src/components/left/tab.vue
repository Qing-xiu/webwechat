<template>
	<div class="tab">
		<div class="tab-item">
			<a class="item-btn" @click="changeView('chat')" href="javascript:;">
				<i v-show="currentView == 'chat'" class="iconfont hover">&#xe606;</i>
				<i v-else class="iconfont">&#xe602;</i>
			</a>
		</div>
		<div class="tab-item">
			<a class="item-btn" @click="changeView('contact')" href="javascript:;">
				<i v-show="currentView == 'contact'" class="iconfont hover">&#xe605;</i>
				<i v-else class="iconfont">&#xe603;</i>
			</a>
		</div>
	</div>
	<div class="nav-view" >
		<chat v-show="currentView == 'chat'"></chat>
		<contact v-show="currentView == 'contact'"></contact>
	</div>
</template>

<style lang="sass">
	.tab{
		display:table;
		width: 100%;
		padding-bottom: 4px;
		border-bottom: 1px solid #24272C;
		.tab-item{
			display:table-cell;
			position:relative;

			&:not(:last-child){
				
				&:after{
					content: ' ';
					position:absolute;
					width:0px;
					height:20px;
					border-right: 1px solid #24272C;
					top:7px;
					right:0px;
				}
			}
		}

		.item-btn{
			display:block;
			height: 35px;
			line-height:35px;
			text-align:center;
			
			.iconfont{
				color:#fff;
				font-size:24px;
				&.hover{
					color:#35b12c
				}
			}
		}
	}

	.nav-view{
		position: absolute;
		top:154px;
		left:0px;
		right:0px;
		bottom:0px;
		overflow:auto;
	}
</style>

<script lang="babel">
	import store from '../../js/store/index.js'
	import chat from './chat.vue'
	import contact from './contact.vue'

	export default {
		name: 'tab',
		computed:{
			currentView () {
				return store.state.view
			}
		},
		components: {
			chat, 
			contact
		},
		methods:{
			changeView: store.actions.changeView
		}
	}
</script>