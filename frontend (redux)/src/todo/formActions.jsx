import api from '../services/api'

const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

const searchDescription = () => {
    const response = api.get(`/todos?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: response
    }
}

const addDescription = description => {
    const response = api.post('/todos', { description })
    return [
        { type: 'TODO_ADDED', payload: response },
        searchDescription()
    ]
}

export { changeDescription, searchDescription, addDescription }