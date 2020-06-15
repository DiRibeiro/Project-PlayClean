const INITIAL_STATE = { photo: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'PHOTOS_FETCHED':
            return { ...state, photo: action.payload.result }

        default:
            return state
    }
}