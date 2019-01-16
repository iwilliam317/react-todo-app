import { combineReducers } from 'redux'

const reducers = combineReducers({
    todo: () => ({
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
    }) 
})

export default reducers
