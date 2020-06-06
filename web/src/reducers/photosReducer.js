const INITIAL_STATE = { photos: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'PHOTOS_FETCHED':
            return { ...state, photos: action.payload.result }

        default:
            return state
    }
}