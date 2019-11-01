const INITIAL_STATE = { list: [{}] }

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ANIMALS_ADOPTION_FETCHED':
			return { ...state, list: action.payload }

		default:
			return state
	}
}
