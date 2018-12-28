import React from 'react'
import Button from '../template/button'

export default props => {

    const renderRows = () => {
        const tasks = props.tasks || []

        return(
            tasks.map(task => (
                <tr key={ task._id }>
                    <td className={task.done ? 'done': ''}>{ task.description}</td>
                    <td>
                        <Button style='success' icon='check' onClick={()=> props.handleMarkAsDone(task) } show={task.done}/>
                    </td>
                    <td>
                        <Button style='warning' icon='undo' onClick={()=> props.handleMarkAsPending(task)} show={!task.done}/>
                    </td>
                    <td>
                        <Button style='danger' onClick={() => props.handleRemove(task)} icon='trash' show={!task.done} />
                    </td>
                </tr>
            ))
        )
    }
    

    return(
        <div>
            <h2>List</h2>
            <table className='table' >
                <thead>
                    <tr>
                        <th width='80%'>
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