import React, { Component } from 'react'
import Result from '../../components/result'
import Title from '../../components/title'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.sumNumber    = this.sumNumber.bind(this)
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
    }

    handleSubmit() {
        this.sumNumber()
    }

    sumNumber() {
        const { first, second } = this.state
        this.setState({ result: first + second }, () => { console.log('submited', this.state) })
    }

    render() {
        const { result } = this.state
        return (
            <div className="card shadow">
                <div className="card-body">
                    <Title title={`Addition`} subtitle={`Sum the first with the second input`} />
                    <div className="form-row">
                        <div className="form-group col">
                            <input name="first" type="text" className="form-control" placeholder="First number" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col">
                            <input name="second" type="text" className="form-control" placeholder="Second number" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group ml-1">
                            <button type="button" className="btn btn-primary" onClick={ this.handleSubmit }>Check</button>
                        </div>
                    </div>

                    <Result data={result} />

                </div>
            </div>
        )
    }
}