import React from "react";

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from "../containers/Login";
import Register from "../containers/Register"
import Home from '../containers/Home'
import PrivateRoute from './private-route' //todas estas rotas são privadas
import Products from "../containers/Products";
import ProductsId from "../containers/ProductsId";


function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login" />
                <Route component={Register} path="/cadastro" />
                <PrivateRoute exact component={Home} path="/" />
                <PrivateRoute exact component={Products} path="/produtos" />
                <Route component={ProductsId} path="/detalhes/:id" />
            </Switch>
        </Router>
    )
}
export default Routes