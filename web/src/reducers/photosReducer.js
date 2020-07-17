const INITIAL_STATE = { photo: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'PHOTOS_FETCHED':
            console.log("Photos Fetched: ", action.payload.result)
            return { ...state, photo: action.payload.result }

        default:
            return state
    }
}