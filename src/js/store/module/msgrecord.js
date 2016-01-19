import {PUBLISH_MSG, ADD_MSGRECORD, TOP_MSGRECORD} from '../mutations.js'

export const msgrecordState = [
	{
		list: [
			{
				msg: '江畔何人初见月',
				time: 1452419766358,
				userId: '007',
				type: 'text',
			},
			{
				msg: '江月何年初照人',
				time: 1452423989314,
				userId: '001',
				type: 'text',
			},
			{
				msg: '好诗！好诗！',
				time: 1452424015009,
				userId: '002',
				type: 'text',
			}

		]
	},

	{
		list: []
	}
]

export const msgrecordMutations = {
	[PUBLISH_MSG] (state, msg) {
		state.msgRecord[state.currentChatIndex].list.push({
			msg: msg,
			time: Date.now(),
			userId: state.userId
		})
	},

	[ADD_MSGRECORD] (state, data){
		state.msgRecord.unshift({
			list: data
		})
	},

	[TOP_MSGRECORD] ({msgRecord}, index) {
		msgRecord.unshift(msgRecord.splice(index, 1)[0])
	}
}