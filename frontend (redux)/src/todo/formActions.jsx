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
    return dispatch => {
        api.post('/todos', { description })
            .then(res => dispatch({ type: 'TODO_ADDED', payload:res }))
            .then(res => dispatch(searchDescription()))
    }
}

export { changeDescription, searchDescription, addDescription }