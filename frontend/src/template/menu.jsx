import React from 'react'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <a className="navbar-brand" href="#"><span className="text-light"><i className='fa fa-calendar-check-o'></i>  ToDoApp </span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#/todos"><span className="text-light  font-weight-bold">Tasks</span><span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/about"><span className="text-light ">About</span></a>
                </li>
            </ul>
        </div>
    </nav>
)