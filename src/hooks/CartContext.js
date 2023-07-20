//dados do carrinho de compras 


import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'

const CartContext = createContext({})
//grava os dados
export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])



    // Função para atualizar o localStorage
    const updateLocalStorage = async products => {
        await localStorage.setItem('e-commerce:cartInfo', JSON.stringify(products)
        )
    }


    //função do carrinho de compras
    const putProductInCart = async product => {
        // Encontra o índice do produto no array cartProducts
        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

        let newCartProducts = [];

        // Se o produto já estiver no carrinho
        if (cartIndex >= 0) {
            newCartProducts = cartProducts// Copia o array existente cartProducts

            // Incrementa a quantidade do produto existente no carrinho
            newCartProducts[cartIndex].quantity =
                newCartProducts[cartIndex].quantity + 1

            setCartProducts(newCartProducts);// Atualiza o estado cartProducts com o array atualizado
        } else {
            newCartProducts = [...cartProducts, product]; // Cria um novo array com todos os produtos existentes no carrinho e adiciona o novo produto
            setCartProducts(newCartProducts);
        }

        // Gravando os itens do carrinho no localStorage
        await updateLocalStorage(newCartProducts)
    }





    //função de deletar o produto do carrinho quando a quantidade for menor que 1 
    const deleteProduct = async productId => {
        const newCart = cartProducts.filter(product => product.id !== productId)
        setCartProducts(newCart)

        // Gravando os itens do carrinho no localStorage
        await updateLocalStorage(newCart)
    }

    // Função para limpar o carrinho
  const clearCart = async () => {
    setCartProducts([]);
   // deletar os itens do carrinho no localStorage
    await updateLocalStorage([]);
  };

    //função de aumentar a quantidade do item no carrinho
    const increaseProductQuantity = async productId => {
        const newCart = cartProducts.map(product => {
            return product.id === productId
                ? { ...product, quantity: product.quantity + 1 }
                : product
        })
        setCartProducts(newCart)

        // Gravando os itens do carrinho no localStorage
        await updateLocalStorage(newCart)
    }

    //função de diminuir a quantidade do item no carrinho
    const decreaseProductQuantity = async productId => {
        const cartIndex = cartProducts.findIndex(product => product.id === productId)

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map(product => {
                return product.id === productId
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            })
            setCartProducts(newCart)

            // Gravando os itens do carrinho no localStorage
            await updateLocalStorage(newCart)
        } else {
            deleteProduct(productId)
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
        <CartContext.Provider value={{ putProductInCart, cartProducts, increaseProductQuantity, decreaseProductQuantity, clearCart }}>
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