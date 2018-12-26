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

    componentDidMount(){
        this.loadTasks()
    }

    loadTasks(){
        api.get('/todos?sort=-createdAt')
            .then(res => this.setState({ description : '', list : res.data }))
    }
    
    handleAdd(){
        const { description } = this.state
        api.post('/todos', { description })
            .then(res => this.loadTasks())
    }

    handleChange(event){
        this.setState({ description : event.target.value })
    }

    render(){
        return (
            <div>
                <PageHeader title='ToDo' />
                <Form handleAdd={this.handleAdd.bind(this)} handleChange={this.handleChange.bind(this)} description={this.state.description} />
                <List tasks={this.state.list}/>
            </div>

        )
    }
}
