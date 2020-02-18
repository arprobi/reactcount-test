import React, { Component } from 'react'
import Result from '../../components/result'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getFibonacci    = this.getFibonacci.bind(this)
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
    }

    handleSubmit() {
        this.getFibonacci()
    }

    getFibonacci() {
        const { number } = this.state
        let result = [0, 1];
        for (let i=2; i<number + 1; i++) {
            result.push(result[i-2] + result[i-1])
        }
        this.setState({ result: result }, () => { console.log('submited', this.state) })
    }

    render() {
        const { result } = this.state
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Fibonacci</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Showing first "n" fibonacci</h6>
                    <div className="form-row">
                        <div className="form-group col">
                            <input name="number" type="text" className="form-control" placeholder="n prime number" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary" onClick={ this.handleSubmit }>Check</button>
                        </div>
                    </div>

                    <Result data={result} />

                </div>
            </div>
        )
    }
}