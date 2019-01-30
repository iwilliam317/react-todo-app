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
            .catch(err => {
                throw new Error(err)
                }
            ) 
    }
}

const markAsDone = task => {
    return dispatch => {
        api.put(`/todos/${task._id}`, { ...task, done : true })
            .then(res => dispatch(searchDescription()))
    }
}

const markAsPending = task => {
    return dispatch => {
        api.put(`/todos/${task._id}`, { ...task, done: false })
            .then(res => dispatch(searchDescription()))
    }
}

const removeDescription = task => {
    return dispatch => {
        api.delete(`/todos/${task._id}`)
            .then(res => dispatch(searchDescription()))
    }
}

const resetDescription = () => ({
    type: 'TODO_RESETED'
})

export { changeDescription, searchDescription, addDescription, markAsDone, markAsPending, removeDescription, resetDescription}