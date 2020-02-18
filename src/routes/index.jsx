import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import Layout from '../layouts/Applayout'
import Home from '../container/home'
import Fibonacci from '../container/fibonacci'
import Multiply from '../container/multiply'
import Prime from '../container/prime'
import Sum from '../container/sum'

export default class extends Component {
    render() {
        return (
            <Switch>
                <Layout exact path="/" component={ Home } />
                <Layout exact path="/fibonacci" component={ Fibonacci } />
                <Layout exact path="/multiply" component={ Multiply } />
                <Layout exact path="/sum" component={ Sum } />
                <Layout exact path="/prime" component={ Prime } />
            </Switch>
        )
    }
}