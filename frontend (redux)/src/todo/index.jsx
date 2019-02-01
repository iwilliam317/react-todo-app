import React from 'react'

import PageHeader from '../template/pageHeader'
import Form from './form'
import List from './list'

const ToDo = props => (
    <div>
        <PageHeader title='ToDo' />
        <Form />
        <List />
    </div>
)

export default ToDo