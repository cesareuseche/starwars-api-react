import React from 'react'


function Navbar() {
    return (
        <nav class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand ml-5">Navbar</a>
            <div class="dropdown">
                <button class="btn btn-success dropdown-toggle mr-5" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
