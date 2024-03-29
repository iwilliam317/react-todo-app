import React, { Component } from 'react'
import Grid from '../template/grid'
import Button from '../template/button'
import { connect } from 'react-redux'

import { changeDescription, searchDescription, addDescription, resetDescription } from './formActions'
import { bindActionCreators} from 'redux'
 
class Form extends Component {
    constructor(props){
        super(props)
        
    }
    componentWillMount(){
        this.props.searchDescription()
    }

    render(){
        const { description, changeDescription, addDescription, resetDescription , searchDescription} = this.props
        return (
            <div role='form' className='todoForm row'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' placeholder='Add or Search a task' value={description} onChange={changeDescription}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <Button style='primary' icon='plus' onClick={() => addDescription(description) } disabled={description == ''} />
                    <Button style='info' icon='search' onClick={searchDescription}/>
                    <Button style='default' icon='close' onClick={resetDescription}/>
                </Grid>
            </div>
        )
    }

    }

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, searchDescription, addDescription, resetDescription }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)