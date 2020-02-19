import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {

    render() {
        return (
            <nav className="nav menu flex-column">
                <Link className="nav-link menu-link" to="/">Home</Link>
                <Link className="nav-link menu-link" to="/sum">Addtion</Link>
                <Link className="nav-link menu-link" to="/multiply">Multiply</Link>
                <Link className="nav-link menu-link" to="/prime">Primes</Link>
                <Link className="nav-link menu-link" to="/fibonacci">Fibonacci</Link>
            </nav>
        )
    }
}