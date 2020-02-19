import React, { Component } from 'react'

export default class extends Component {
    render() {
        const { data='' } = this.props
        return (
            <div>
                { Array.isArray(data) ? (
                    <h6>Result : <b className="text-primary">{ data.map((item, i) => { return i === (data.length-1) ? `${item}` : `${item}, ` }) }</b></h6>
                ) : (
                    <h6>Result : <b className="text-primary">{ data }</b></h6>
                ) }
            </div>
        )
    }
}
