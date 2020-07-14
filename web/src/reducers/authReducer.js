const userKey = 'jogue-limpo'             // Key of the Local Storage
const INITIAL_STATE = {
    user: localStorage.getItem(userKey),
    validToken: false,
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED':
            if (action.payload)
                return { ...state, validToken: true }
                
            else {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }

        case 'TOKEN_FETCHED':
            localStorage.setItem(userKey, action.payload)
            return { ...state, user: action.payload, validToken: true }
        
        case 'LOGIN':
            return {
                ...state,
                loading: action.payload
            }

        default:
            return state
    }
}