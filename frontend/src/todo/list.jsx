import React from 'react'

export default props => (
    <div>
        <h2>List</h2>
        {props.tasks.map(s => s.description)}
    </div>
)