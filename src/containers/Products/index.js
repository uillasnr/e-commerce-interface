
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import PropTypes from "prop-types";
import { Container, ProductsContainer, Line, CategoriMenu, ContainerButton } from './styles'
import CardProduct from "../../components/CardProduct";
import formatCurrency from "../../utils/formarCurrency";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


function Products({ location: { state } }) {
    // Verificado se o state existe.
    // ? ELVES OPERATOR é um operador que verifica se uma informação existe pra continuar navegando no objeto.
    // Se state.categoryId não existir o ELVES OPERATOR vai considerar undefined e seguir com o fluxo da aplicação sem quebrar
    let categoryId = 0
    if (state?.categoryId) {
        categoryId = state.categoryId
    }
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(categoryId)
    const [filteredProducts, setFilteredProducts] = useState([])



    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories)
        }
        // Carregando os produtos
        async function loadProducts() {
            const { data: allProducts } = await api.get('products')

            // Formatando o preço dos cards de produtos
            const newProducts = allProducts.map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) }
            })

            setProducts(newProducts)
        }

        loadProducts()
        loadCategories()
    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {

            const newFilteredProducts = products.filter(
                product => product.category_id === activeCategory
            )

            setFilteredProducts(newFilteredProducts)
        }
    }, [activeCategory, products])



    return (
        <Container>
            <Header />

            <h5>Categorias</h5>
            <Line />
            <CategoriMenu>

                {categories &&
                    categories.map(categories => (

                        <ContainerButton type='button' key={categories.id}
                            isActiveCategory={activeCategory === categories.id} //trocar de cor
                            onClick={() => {
                                setActiveCategory(categories.id)
                            }}>
                            {categories.name}

                        </ContainerButton>
                    ))}


            </CategoriMenu>

            <ProductsContainer>

                {filteredProducts && filteredProducts.map(product => (

                    <CardProduct kay={product.id} product={product} />
                ))}
            </ProductsContainer>
            <Footer />
        </Container>

    )
}

Products.propTypes = {
    location: PropTypes.object
}

export default Products
