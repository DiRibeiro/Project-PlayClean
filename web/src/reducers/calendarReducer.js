const INITIAL_STATE = { file: {}, title: '', description: '', date: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TITLE_CHANGED':
            return { ...state, title: action.payload }
        case 'FILE_CHANGED':
            return { ...state, file: action.payload }
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'DATE_CHANGED':
            return { ...state, date: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        case 'TODO_CLEAR':
            return { ...state, description: '', date: '' }
        default:
            return state
    }
}