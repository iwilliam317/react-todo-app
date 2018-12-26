import React from 'react'

export default props => {

    const renderRows = () => {
        const tasks = props.tasks || []

        return(
            tasks.map(task => (
                <tr key={ task._id }>
                    <td>{ task.description}</td>
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
                    </tr>
                </thead>
                <tbody>
                    { renderRows() }
                </tbody>
            </table>
        </div>
    )
}