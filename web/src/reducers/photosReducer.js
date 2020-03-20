const INITIAL_STATE = { images: [{}] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'PHOTOS_FETCHED':
            return { ...state, images: action.payload.result }

        default:
            return state
    }
}