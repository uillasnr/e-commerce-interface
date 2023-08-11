import React, { createContext, useContext, useState, useEffect } from "react";
import { useCart } from '../../src/hooks/CartContext'; 
import PropTypes from 'prop-types'

const UserContext = createContext({})
//grava os dados
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({})

    const putUserData = async userInfo => {
        setUserData(userInfo)

        await localStorage.setItem('e-commerce:userData', JSON.stringify(userInfo))
    }

   // Acesse a função clearCart do CartProvider
  const cartContext = useCart();

    //função de Deslogar o usuario
    const logout = async () => {
        window.location.href = '/login';
        await localStorage.removeItem('e-commerce:userData');
        await localStorage.removeItem('e-commerce:cartInfo');
        cartContext.clearCart(); 
        setUserData({});
        
    };


    //recomperar os dados
    useEffect(() => {
        const loadUserData = async () => {
            const clientInfo = await localStorage.getItem('e-commerce:userData')

            if (clientInfo) {
                setUserData(JSON.parse(clientInfo))
            }
        }

        loadUserData()
    }, [])

    return (
        <UserContext.Provider value={{ putUserData, userData, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('useUser must be used with UserContext')
    }
    return context
}

UserProvider.propTypes = {
    children: PropTypes.node
}