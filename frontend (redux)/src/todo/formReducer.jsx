const INITIAL_STATE = {
    description: 'My description from redux',
    list: [
        {
            _id: 1,
            description: 'Dentist at 3 pm',
            done: false
        },
        {
            _id: 2,
            description: 'Study redux',
            done: false
        },
        {
            _id: 3,
            description: 'buy suplements',
            done: true
        }
    ]
}

const formReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state
    }
}

export default formReducer