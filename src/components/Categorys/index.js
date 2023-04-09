/* import React, { useEffect, useState } from "react";

import api from '../../services/api'
import Products from "../../containers/Products";
import { Container, ContainerButton } from "./styles"



function Category() {
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories)
        }
        loadCategories()
    }, [])

    useEffect(() => {
        const newFilteredProducts = Products.filter(
            product => product.category_id === activeCategory
        )
        setFilteredProducts(newFilteredProducts)
    }, [activeCategory, Products])

    return (
        <Container>
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


        </Container>
    )

}
export default Category */