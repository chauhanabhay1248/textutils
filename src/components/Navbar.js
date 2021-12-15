import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const changeColor = () => {
        props.colr(document.getElementById("clr").value);
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode === "primary" ? "dark" : props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* title */}
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* Home */}
                        <li className="nav-item">
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* About */}
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
                            {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
                        </li>
                    </ul>

                    {/* Search Box */}
                    <div className="d-flex mx-3">
                    <input className="form-control me-2" type="search" id = "clr" placeholder="Enter Color" aria-label="Search" />
                    <button className= {`btn btn-outline-${props.mode === "primary" ? "dark" : "primary"}`} onClick = {changeColor} >Change Color</button>
                    </div>

                    {/* Dark Mode Switch */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired
                }

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'Set about here'
}