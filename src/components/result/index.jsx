import React, { Component } from 'react'

export default class extends Component {
    render() {
        const { data='' } = this.props
        return (
            <div>
                { Array.isArray(data) ? (
                    <h6>Result : { data.map((item, i) => { return i === (data.length-1) ? `${item}` : `${item}, ` }) }</h6>
                ) : (
                    <h6>Result : { data }</h6>
                ) }
            </div>
        )
    }
}
