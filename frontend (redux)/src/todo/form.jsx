import React, { Component } from 'react'
import Grid from '../template/grid'
import Button from '../template/button'
import { connect } from 'react-redux'

import { changeDescription, searchDescription, addDescription } from './formActions'
import { bindActionCreators} from 'redux'
 
class Form extends Component {
    constructor(props){
        super(props)

    }
    componentWillMount(){
        this.props.searchDescription()
    }

    render(){
        return (
            <div role='form' className='todoForm row'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' placeholder='Add or Search a task' value={this.props.description} onChange={this.props.changeDescription}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <Button style='primary' icon='plus' onClick={() => this.props.addDescription(this.props.description) } />
                    <Button style='info' icon='search' onClick={this.props.handleSearch}/>
                    <Button style='default' icon='close' onClick={this.props.handleReset}/>
                </Grid>
            </div>
        )
    }

    }

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, searchDescription, addDescription }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)