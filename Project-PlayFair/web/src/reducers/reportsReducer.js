const INITIAL_STATE = { list: [{}] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'REPORTS_FETCHED':
            return { ...state, list: action.payload.result }

        default:
            return state
    }
}