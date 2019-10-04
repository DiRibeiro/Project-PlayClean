const INITIAL_STATE = {show: []}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'APRESENTATION_FETCHED':
            return { ...state, show: action.payload }
        default:
            return state
    }
}