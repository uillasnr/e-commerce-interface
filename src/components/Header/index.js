//menu

import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { useUser } from "../../hooks/UserContext"


import Person from "../../assets/user.png"
import Cart from "../../assets/carrinho.png"
import Logo from "../../assets/DEV.png"

import { Container, ContainerLeft, ContainerRight, ContainerItems, ContainerButton, Imput, PageLink, PageLinkExit, ContainerText, ContainerOptions } from "./styles"



function Header() {

    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)
    const { logout } = useUser()
    const {
        push,
        location: { pathname }
    } = useHistory()


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories)
        }



        loadCategories()
    }, [])

    const logoutUser = () => {
        logout()
        push('/login')
    }


    return (
        <Container>
            <ContainerItems>
                <ContainerLeft >
                    <img src={Logo} alt="logo" />
                </ContainerLeft>

                <Imput />

                <ContainerRight>
                    <PageLink onClick={() => push('/carrinho')}>
                        <img src={Cart} alt="carrinho" />
                    </PageLink>

                    <div></div>
                    <PageLink>

                        <img src={Person} alt="logo-pessoa" />
                    </PageLink>
                    <ContainerText>
                        <p>Olá, Uillas</p>
                        <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
                    </ContainerText>
                </ContainerRight>

            </ContainerItems>

           {/*  <ContainerOptions>
                
                 <categoriMenu>
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
                </categoriMenu> 
            </ContainerOptions> */}
        </Container>

    )
}

export default Header
