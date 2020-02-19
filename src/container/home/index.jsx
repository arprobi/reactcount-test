import React, { Component } from 'react'

export default class extends Component {

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">Welcome to my Web Developer Test Application, please select the left menu to start</p>
                <hr className="my-4" />
                <p>See my resume in Linkin by clicking button below.</p>
                <p className="lead">
                    <a className="btn btn-info btn-lg" rel="noopener noreferrer" href="https://id.linkedin.com/in/andrian-robby-pratama-786401137" target="_blank" role="button">Click!</a>
                </p>
            </div>
        )
    }
}