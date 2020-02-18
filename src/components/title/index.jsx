import React, { Component, Fragment } from 'react'

export default class extends Component {
    render() {
        const { title, subtitle } = this.props
        return (
            <Fragment>
                <h4 className="card-title">{ title }</h4>
                <h6 className="card-subtitle text-muted mb-3">{ subtitle }</h6>
                <hr/>
            </Fragment>
        )
    }
}
