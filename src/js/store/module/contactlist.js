import {CHANGE_CONTACT_KEY} from '../mutations.js'

export const contactState = {
	currentKey:''
}

export const contactMutations = {
	CHANGE_CONTACT_KEY (state, key) {
		state.contact.currentKey = key
	}
}