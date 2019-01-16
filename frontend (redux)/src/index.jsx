import React from 'react'
import ReactDOM from 'react-dom'

import App from './main/app'
import { Provider } from 'react-redux'
import reducers from './main/reducers'
import { createStore } from 'redux';

const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'))