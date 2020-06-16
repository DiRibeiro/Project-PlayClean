const INITIAL_STATE = { coleta: [{}] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'COLETA_FETCHED':
            return { ...state, coleta: action.payload }

        default:
            return state
    }
}