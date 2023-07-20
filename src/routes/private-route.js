import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";

function PrivateRouter({ component, isAdmin, ...rest }) {
    // Verificando se o usuário está logado
    const user = localStorage.getItem('e-commerce:userData')

    // Se usuário não existir ele vai ser redirecionado para tela de login
    if (!user) {
        return <Redirect to="/Login" />
    }
    // Trava de segurança para o usuário não acessar areas restritas .Se o usuário não é administrador, ele sera redirecionado para tela de home.
    if (isAdmin && !JSON.parse(user).admin) {
        return <Redirect to="/" />
    }

    //todas as rotas que estão logados
    return (
        <>
          {/*   {!isAdmin && <Header />}  */} {/*  Header em todas as Telas de navegação se for !isAdmin não tera Header */}
            <Route {...rest} component={component} />
           {/*  {!isAdmin && <Footer />} */}
        </>
    )
}

export default PrivateRouter


PrivateRouter.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    isAdmin: PropTypes.bool
}