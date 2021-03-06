import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Product from '../pages/Product'
import Orders from '../pages/Orders'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/products' component={Product}/>
            <Route path='/orders' component={Orders}/>
            
        </Switch>
    )
}

export default Routes
