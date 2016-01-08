import {CHANGEVIEW, TOGGLEMEMBERMODAL} from '../mutations.js'

export const initialState =  {
	view: 'chat',
	currentChatIndex: -1,
	memberModal: false

}
export const initialMutations = {
	[CHANGEVIEW] (state, v) {
		state.view = v;
	},

	[TOGGLEMEMBERMODAL] (state){
		state.memberModal = !state.memberModal
	}
}