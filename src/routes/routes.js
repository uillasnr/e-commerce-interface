import React from "react";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import paths from "../constants/paths";

import Login from "../containers/Login";
import Register from "../containers/Register"
import Home from '../containers/Home'

import PrivateRoute from './private-route' //todas estas rotas são privadas

import Products from "../containers/Products";
import ProductsId from "../containers/ProductsId";
import Checkout from "../containers/CartResume";
import Admin from "../containers/Admin";
import CheckoutSuccess from "../components/CheckoutSuccess";
import CheckoutCancel from "../components/CheckoutCancel";
//import FreteResult from "../components/FreteResult";

import ProductRating from "../components/ProductRating";



function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/Login" />
                <Route component={Register} path="/cadastro" />

                <Route exact component={Home} path="/" />
                <Route exact component={Products} path="/produtos" />
                <Route exact component={ProductsId} path="/detalhes/:id" />

                <Route exact component={ProductRating} path="/cep" />

                <PrivateRoute exact component={Checkout} path="/carrinho" />
                <PrivateRoute exact component={CheckoutSuccess} path="/success" />
                <PrivateRoute exact component={CheckoutCancel} path="/cancel" />

                <PrivateRoute exact component={Admin} path={paths.Order} isAdmin />
                <PrivateRoute exact component={Admin} path={paths.Products} isAdmin />
                <PrivateRoute exact component={Admin} path={paths.NewProduct} isAdmin />
                <PrivateRoute exact component={Admin} path={paths.EditProduct} isAdmin />
            </Switch>
        </Router>
    )
}
export default Routes