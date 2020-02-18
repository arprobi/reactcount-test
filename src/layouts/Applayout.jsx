import React from 'react'
import { Route } from 'react-router-dom'
import Menu from '../components/menu'
import Header from '../components/header'

const Applayout = ({children}) => {
    return (  
        <div className="container">
            <Header/>
            <div className="row">
                <div className="col-md-8">
                    { children }
                </div>
                <div className="col-md-4">
                    <Menu/>
                </div>
            </div>
        </div>
    )  
}

const Approute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps =>   (
            <Applayout>
                <Component {...matchProps} />
            </Applayout>
        )} />
    )
}

export default Approute