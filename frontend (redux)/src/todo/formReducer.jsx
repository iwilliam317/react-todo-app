const INITIAL_STATE = { description: '', list: [] }

const formReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
        case 'TODO_ADDED':
            return { ...state, description: '' }
        case 'TODO_RESETED':
            return { ...state, description: ''}
        default:
            return state
    }
}

export default formReducer