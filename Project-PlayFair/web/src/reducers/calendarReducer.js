const INITIAL_STATE = { date: [{}] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CALENDAR_FETCHED':
            return { ...state, date: action.payload }

        default:
            return state
    }
}