import React from 'react'
import Button from '../template/button'

export default props => {

    const renderRows = () => {
        const tasks = props.tasks || []

        return(
            tasks.map(task => (
                <tr key={ task._id }>
                    <td>{ task.description}</td>
                    <td><Button style='danger' onClick={() => props.handleRemove(task)} icon='trash' /></td>
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
                        <th>
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