import React, { Component } from 'react';

export default class extends Component {

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">Welcome to my website, please select the right menu to start</p>
                <hr className="my-4" />
                <p>Or see my resume in Linkin.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" rel="noopener noreferrer" href="https://id.linkedin.com/in/andrian-robby-pratama-786401137" target="_blank" role="button">Click!</a>
                </p>
            </div>
        );
    }
}