import {CHANGEVIEW} from '../mutations.js'

console.log(CHANGEVIEW)

export const initialState =  {
	view: 'chat',
	currentChatIndex: -1,
}
export const initialMutations = {
	[CHANGEVIEW] (state, v) {
		state.view = v;
	}
}