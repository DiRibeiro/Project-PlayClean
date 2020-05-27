const INITIAL_STATE = { list: [{}] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LEIS_FETCHED':
            return { ...state, list: action.payload }

        default:
            return state
    }
}