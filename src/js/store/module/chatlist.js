import {ADD_CHATLIST,DEL_CHATLIST, TOGGLECHAT} from '../mutations.js';

export const chatListInitialState = [
	{
		avatar: 'http://imgsrc.baidu.com/forum/w%3D580/sign=4ed1f2559a504fc2a25fb00dd5dce7f0/3fc543166d224f4a415b0d4e08f790529922d16f.jpg',
		time: "10:22",
		nickname: '青衣门',
		message: '金鳞岂是池中物，一遇风云变化龙',
		members: ['001', '002', '003', '004'],
		isManager: true,
		locked: true
	},

	{
		avatar: 'http://imgsrc.baidu.com/forum/w%3D580/sign=63e75af9f11f3a295ac8d5c6a924bce3/7b1a6b600c338744044bd45b500fd9f9d62aa0ce.jpg',
		time: "",
		nickname: '黄蓉',
		message: '',
		members: ['002'],
		locked: false
	},
]

export const chatListMutations = {
	[DEL_CHATLIST] ({chatList}, index) {
		chatList.$remove(index);
	},

	[ADD_CHATLIST] ({chatList}, data) {
		chatList.unshift(data)
	},

	[TOGGLECHAT] (state, index){
		state.currentChatIndex = index
	}
}