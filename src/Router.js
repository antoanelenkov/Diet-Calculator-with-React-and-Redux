import React from 'react';
import { Route, Router, Switch } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import FoodsPage from './components/foods/FoodsPage'
import AddFoodPage from './components/foods/AddFoodPage'
import ErrorPage from './components/error/ErrorPage'


const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/home' component={HomePage} />
        <Route path='/foods' component={FoodsPage} />
        <Route path='/add-food' component={AddFoodPage} />
        <Route component={ErrorPage} />
    </Switch>
)

export default Routes;
