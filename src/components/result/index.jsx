import React, { Component } from 'react'

export default class extends Component {
    render() {
        const { data='' } = this.props
        return (
            <div>
                { Array.isArray(data) ? (
                    <h4>Result : { data.map((item, i) => { return i === (data.length-1) ? `${item}` : `${item}, ` }) }</h4>
                ) : (
                    <h4>Result : { data }</h4>
                ) }
            </div>
        )
    }
}
