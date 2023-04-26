//dados do carrinho de compras 


import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'

const CartContext = createContext({})
//grava os dados
export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])



    //função do carrinho de compras
    const putProductInCart = async product => {
        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

        let newCartProducts = []
        if (cartIndex > 0) {
            newCartProducts = cartProducts

            newCartProducts[cartIndex].quantity =
                newCartProducts[cartIndex].quantity + 1

            setCartProducts(newCartProducts)
        }
        else {
            product.quantity = 1
            newCartProducts = [...cartProducts, product]
            setCartProducts(newCartProducts)
        }

        await localStorage.setItem('e-commerce:cartInfo', JSON.stringify(newCartProducts)
        )
    }



    //função de deletar o produto do carrinho quando a quantidade for menor que 1 
    const deleteProducts = async productId => {
        const newCart = cartProducts.filter(product => product.id !== productId)

        setCartProducts(newCart)

        await localStorage.setItem('e-commerce:cartInfo', JSON.stringify(newCart))
    }


    //função de aumentar a quantidade do item no carrinho
    const increaseProducts = async productId => {
        const newCart = cartProducts.map(product => {
            return product.id === productId
                ? { ...product, quantity: product.quantity + 1 }
                : product
        })
        setCartProducts(newCart)

        await localStorage.setItem('e-commerce:cartInfo', JSON.stringify(newCart))
    }


    //função de diminuir a quantidade do item no carrinho
    const decreaseProducts = async productId => {
        const cartIndex = cartProducts.findIndex(product => product.id === productId)

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map(product => {
                return product.id === productId
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            })
            setCartProducts(newCart)

            await localStorage.setItem('e-commerce:cartInfo', JSON.stringify(newCart))
        } else {
            deleteProducts(productId)
        }
    }




    //todos os dados estão guardados nesta função
    //recomperar os dados
    useEffect(() => {
        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem('e-commerce:cartInfo')

            if (clientCartData) {
                setCartProducts(JSON.parse(clientCartData))
            }
        }

        loadUserData()
    }, [])

    return (
        <CartContext.Provider value={{ putProductInCart, cartProducts, increaseProducts, decreaseProducts }}>
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