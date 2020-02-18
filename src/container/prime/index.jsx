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
        this.getPrimeNumber    = this.getPrimeNumber.bind(this)
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
    }

    handleSubmit() {
        this.getPrimeNumber()
    }

    checkIsPrime(number) {
        for (var i=2 ; i<=Math.sqrt(number) ; i++){
            if (number%i === 0){
                return false
            }
        }
        return true
    }

    getPrimeNumber() {
        const { number } = this.state
        var primes      = [],
            getprime    = 0,
            start       = 1

        while (getprime < number) {
            if (this.checkIsPrime(start)) {
                primes.push(start)
                getprime++
            }
            start++
            console.log(`get prime = ${getprime}, start = ${start}`)
        }

        this.setState({ result: primes }, () => { console.log('submited', this.state) })
    }

    render() {
        const { result } = this.state
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Prime Number</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Showing first "n" prime number</h6>
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