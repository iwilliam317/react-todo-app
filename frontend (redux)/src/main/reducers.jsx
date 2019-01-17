import { combineReducers } from 'redux'
import formReducer from '../todo/formReducer'

const reducers = combineReducers({
    todo: formReducer
})

export default reducers
