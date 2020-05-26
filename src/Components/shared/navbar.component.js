import React from 'react'
import logo from '../../Assets/logo.svg'

const NavBarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg primary-color">
            <a className="navbar-brand" href="/">
                <img src={logo} alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/instructors">Instructores</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBarComponent
