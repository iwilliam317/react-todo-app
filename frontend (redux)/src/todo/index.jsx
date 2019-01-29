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
        this.refresh()
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/i` : ''

        api.get(`/todos?sort=-createdAt${search}`)
            .then(res => this.setState({ description , list : res.data }))
    }
    
    handleSearch(event){
        this.refresh(this.state.description)
    }
    



    handleMarkAsPending(task){
        api.put(`/todos/${task._id}`, { ...task, done: false })
            .then(res => this.refresh(this.state.description))
    }

    handleRemove(task){
        if(confirm('Are you sure?')){
            api.delete(`/todos/${task._id}`)
                .then(res => this.refresh(this.state.description))
        }
    }

    handleReset(){
        this.refresh()
    }

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
