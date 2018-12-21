import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

import Form from './form'
import List from './list'

export default class ToDo extends Component {
    render(){
        return (
            <div>
                <PageHeader title='ToDo' />
                <Form />
                <List />
            </div>

        )
    }
}
