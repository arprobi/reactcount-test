import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Menu from '../components/menu'
import Header from '../components/header'

const Applayout = ({children}) => {
    return (
        <Fragment>
            <Header/>
            <div className="container">
                <div className="row content">
                    <div className="col-md-3">
                        <Menu/>
                    </div>
                    <div className="col-md-9">
                        { children }
                    </div>
                </div>
            </div>
        </Fragment>
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