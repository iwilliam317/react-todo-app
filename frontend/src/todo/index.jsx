import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

export default class ToDo extends Component {
    constructor(props){
        super(props)
        this.state = { value : 1}
    }

    counter(){
        this.setState({ value: this.state.value + 1 })
    }
    componentDidMount(){
        setInterval(() => this.counter() ,1000)
    }
    render(){
        return (
            <div>
                <PageHeader title='ToDo' />
                { this.state.value }
            </div>

        )
    }
}
