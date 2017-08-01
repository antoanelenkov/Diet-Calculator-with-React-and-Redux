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
        <Route exact path='/' component={HomePage} />
        <Route path='/home' component={HomePage} />
        <Route path='/foods' component={FoodsPage} />
        <Route path='/manage-food/:id' component={ManageFoodPage} />
        <Route path='/manage-food' component={ManageFoodPage} />
        <Route path='/manage-consumation/:id' component={ManageConsumationPage} />
        <Route path='/manage-consumation/' component={ManageConsumationPage} />
        <Route path='/consumations' component={ConsumationPage} />
        <Route component={ErrorPage} />
    </Switch>
)

export default Routes;
