import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {

    render() {
        return (
            <nav className="nav flex-column">
                <Link className="nav-link" to="/sum">Menu 1</Link>
                <Link className="nav-link" to="/multiply">Menu 2</Link>
                <Link className="nav-link" to="/fibonacci">Menu 3</Link>
                <Link className="nav-link" to="/prime">Menu 4</Link>
            </nav>
        )
    }
}