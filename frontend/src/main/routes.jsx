import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import About from '../about'
import ToDo from '../todo'

export default props => (
    <Router history={hashHistory}>
        <Route path='todos' component={ToDo} />
        <Route path='about' component={About} />
        <Redirect from='*' to='/todos' />
    </Router>
)