import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Menu from '../template/menu'
import ToDo from '../todo'
import About from '../about'

export default props => (
    <div className='container'>
        <Menu />
        <ToDo />
        <About />
    </div>
    
)