import {CHANGE_CONTACT_INDEX} from '../mutations.js'

export const contactState = {
	currentIndex:''
}

export const contactMutations = {
	CHANGE_CONTACT_INDEX (state, index) {
		state.contact.currentIndex = index
	}
}