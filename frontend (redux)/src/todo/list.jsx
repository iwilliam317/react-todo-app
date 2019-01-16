import React from 'react'
import Button from '../template/button'
import { connect } from 'react-redux'

const List = props => {

    const renderRows = () => {
        const tasks = props.tasks || []

        return(
            tasks.map(task => (
                <tr key={ task._id }>
                    <td className={task.done ? 'done': ''}>{ task.description}</td>
                    <td>
                        <Button style='success' icon='check' onClick={()=> props.handleMarkAsDone(task) } show={task.done}/>

                        <Button style='warning' icon='undo' onClick={()=> props.handleMarkAsPending(task)} show={!task.done}/>
 
                        <Button style='danger' onClick={() => props.handleRemove(task)} icon='trash' show={!task.done} />
                    </td>
                </tr>
            ))
        )
    }
    

    return(
        <div className='row'>
            <table className='table table-hover' >
                <thead>
                    <tr className='table-info text-secondary'>
                        <th className='theadDescription'>
                            Description
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { renderRows() }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({ tasks : state.todo.list })

export default connect(mapStateToProps)(List)