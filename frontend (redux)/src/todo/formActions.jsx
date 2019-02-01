import api from '../services/api'

const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

const addDescription = description => {
    return dispatch => {
        api.post('/todos', { description })
            .then(res => dispatch(resetDescription()))
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

const searchDescription = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/i` : ''

        api.get(`/todos?sort=-createdAt${search}`)
            .then(res => dispatch({ type: 'TODO_SEARCHED', payload: res.data }))

    }
}

export { changeDescription, searchDescription, addDescription, markAsDone, markAsPending, removeDescription, resetDescription}