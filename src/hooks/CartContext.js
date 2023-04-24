//dados do carrinho de compras 


import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'

const CartContext = createContext({})
//grava os dados
export const CartProvider = ({ children }) => {
    const [cartProduts, setCartProduts] = useState([])



    //função do carrinho de compras
    const putProductInCart = async product => {
        const cartIndex = cartProduts.findIndex(prd => prd.id === product.id)

        let newCartProduts = []
        if (cartIndex > 0) {
            newCartProduts = cartProduts

            newCartProduts[cartIndex].quantity =
            newCartProduts[cartIndex].quantity + 1

            setCartProduts(newCartProduts)
        }
        else {
            product.quantity = 1
            newCartProduts = [...cartProduts, product]
            setCartProduts(newCartProduts)
        }

        await localStorage.setItem('e-commerce:cartInfo', JSON.stringify(newCartProduts)
        )
    }



    //todos os dados estão guardados nesta função
    //recomperar os dados
    useEffect(() => {
        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem('e-commerce:cartInfo')

            if (clientCartData) {
                setCartProduts(JSON.parse(clientCartData))
            }
        }

        loadUserData()
    }, [])

    return (
        <CartContext.Provider value={{ putProductInCart, cartProduts }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useCart must be used with UserContext')
    }
    return context
}

CartProvider.propTypes = {
    children: PropTypes.node
}