import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import FoodsPage from './components/foods/FoodsPage'
import ManageFoodPage from './components/foods/ManageFoodPage'
import ErrorPage from './components/error/ErrorPage'
import ManageConsumationPage from './components/consumation/ManageConsumationPage'
import ConsumationPage from './components/consumation/ConsumationPage'

const Routes = () => (
    <Switch>
        <Route exact path='/calculator/' component={HomePage} />
        <Route path='/calculator/home' component={HomePage} />
        <Route path='/calculator/foods' component={FoodsPage} />
        <Route path='/calculator/manage-food/:id' component={ManageFoodPage} />
        <Route path='/calculator/manage-food' component={ManageFoodPage} />
        <Route path='/calculator/manage-consumation/:id' component={ManageConsumationPage} />
        <Route path='/calculator/manage-consumation/' component={ManageConsumationPage} />
        <Route path='/calculator/consumations' component={ConsumationPage} />
        <Route component={ErrorPage} />
    </Switch>
)

export default Routes;
