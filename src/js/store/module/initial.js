import {CHANGEVIEW} from '../mutations.js'

console.log(CHANGEVIEW)

export const initialState =  {
	view: 'chat'
}
export const initialMutations = {
	[CHANGEVIEW] (state, v) {
		state.view = v;
	}
}