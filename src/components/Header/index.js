//menu

import React, { useEffect, useState } from "react";
import api from "../../services/api";





import Person from "../../assets/user.png"
import Cart from "../../assets/carrinho.png"
import Logo from "../../assets/DEV.png"

import { Container, ContainerLeft, ContainerRight, Imput, PageLink, PageLinkExit, ContainerText, ContainerOptions } from "./styles"





function Header() {

    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)
  


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories)
        }
     

   
    loadCategories()
    }, [])

   


    return (
        <Container>
            <ContainerLeft >
                <img src={Logo} alt="logo" />
            </ContainerLeft>

            <Imput />

            <ContainerRight>
                <PageLink>
                    <img src={Cart} alt="carrinho" />
                </PageLink>

                <div></div>
                <PageLink>

                    <img src={Person} alt="logo-pessoa" />
                </PageLink>
                <ContainerText>
                    <p>Olá, Uillas</p>
                    <PageLinkExit>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>

            <ContainerOptions>
            <categoriMenu>
                {categories &&
                    categories.map(categories => (

                        <containerButton type='button' key={categories.id}
                            isActiveCategory={activeCategory === categories.id} //trocar de cor
                            onClick={() => {
                                setActiveCategory(categories.id)
                            }}>
                            {categories.name}

                        </containerButton>
                    ))}
            </categoriMenu>
            </ContainerOptions>
        </Container>

    )
}

export default Header
