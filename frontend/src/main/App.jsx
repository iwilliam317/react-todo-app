import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import ToDo from '../todo'
import About from '../about'

export default props => (
    <div className='container'>
        <ToDo />
        <About />
    </div>
    
)