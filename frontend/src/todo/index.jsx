import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

import Form from './form'
import List from './list'

export default class ToDo extends Component {
    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }
    
    handleAdd(){
        console.log('Adding..', this)
    }

    render(){
        return (
            <div>
                <PageHeader title='ToDo' />
                <Form handleAdd={this.handleAdd} />
                <List />
            </div>

        )
    }
}
