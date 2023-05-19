import React from "react";

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from "../constants/paths";

import Login from "../containers/Login";
import Register from "../containers/Register"
import Home from '../containers/Home'
import PrivateRoute from './private-route' //todas estas rotas são privadas
import Products from "../containers/Products";
import ProductsId from "../containers/ProductsId";
import Cart from "../containers/Cart";
import Admin from "../containers/Admin";


function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login" />
                <Route component={Register} path="/cadastro" />
                <PrivateRoute exact component={Home} path="/" />
                <PrivateRoute exact component={Products} path="/produtos" />
                <PrivateRoute exact component={ProductsId} path="/detalhes/:id" />
                <PrivateRoute exact component={Cart} path="/carrinho" />


                <PrivateRoute exact component={Admin} path={paths.Order} isAdmin />
                <PrivateRoute exact component={Admin} path={paths.Products} isAdmin />
                <PrivateRoute exact component={Admin} path={paths.NewProduct} isAdmin />
            </Switch>
        </Router>
    )
}
export default Routes