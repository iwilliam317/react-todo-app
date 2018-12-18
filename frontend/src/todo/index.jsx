import React, { Component } from 'react'

export default class ToDo extends Component {
    constructor(props){
        super(props)
        this.state = { value : 1}
    }

    counter(){
        this.setState({ value: this.state.value + 1 })
    }
    componentDidMount(){
        setInterval(() => this.setState({ value: this.state.value + 1 }) ,1000)
    }
    render(){
        return (
            <div>
                <h1>ToDo</h1>
                { this.state.value }
            </div>

        )
    }
}
