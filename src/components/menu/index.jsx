import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {

    render() {
        return (
            <nav className="nav flex-column">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/sum">Sum</Link>
                <Link className="nav-link" to="/multiply">Multiply</Link>
                <Link className="nav-link" to="/fibonacci">Fibonacci</Link>
                <Link className="nav-link" to="/prime">Prime</Link>
            </nav>
        )
    }
}