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
