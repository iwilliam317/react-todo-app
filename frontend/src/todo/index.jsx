import React, { Component } from 'react'
import api from '../services/api'

import PageHeader from '../template/pageHeader'
import Form from './form'
import List from './list'

export default class ToDo extends Component {
    constructor(props){
        super(props)
       
        this.state = { description: '', list: [] }
    }
    
    handleAdd(){
        const { description } = this.state
        api.post('/todos', { description })
            .then(res => console.log('funcionou'))
        // console.log('Adding..' ,description)
    }

    handleChange(event){
        this.setState({ description : event.target.value })
    }

    render(){
        return (
            <div>
                <PageHeader title='ToDo' />
                <Form handleAdd={this.handleAdd.bind(this)} handleChange={this.handleChange.bind(this)} description={this.state.description} />
                <List />
            </div>

        )
    }
}
