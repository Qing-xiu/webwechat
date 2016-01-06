import {ADD_CHATLIST,DEL_CHATLIST} from '../mutations.js';

export const chatListInitialState = [
	{
		avatar: 'http://imgsrc.baidu.com/forum/w%3D580/sign=b9910b83a5c27d1ea5263bcc2bd4adaf/34069b504fc2d562e89b69cae61190ef77c66cc0.jpg',
		time: "10:22",
		nickname: '青衣门',
		message: '金鳞岂是池中物，一遇风云变化龙'
	},

]

export const chatListMutations = {
	[DEL_CHATLIST] ({chatList}, index) {
		chatList.splice(index, 1);
	},

	[ADD_CHATLIST] ({chatList}, data) {
		console.log('add')
		chatList.unshift(data)
	}
}