import api from '../services/api'

const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

const search = () => {
    const response = api.get(`/todos?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: response
    }
}

export { changeDescription, search }