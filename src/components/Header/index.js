//menu

import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { useUser } from "../../hooks/UserContext"


import Person from "../../assets/user.png"
import Cart from "../../assets/carrinho.png"
import Logo from "../../assets/DEV.png"

import { Container, ContainerLeft, ContainerRight, ContainerItems, Imput, PageLink, PageLinkExit, ContainerText } from "./styles"



function Header() {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const { logout } = useUser();
    const {
      push,
      location: { pathname },
    } = useHistory();
  
    useEffect(() => {
        async function searchProducts() {
          if (search) {
            const { data } = await api.get('/search');
            setProducts(data);
          }
        }
        searchProducts();
      }, [search]);
  
    const logoutUser = () => {
      logout();
      push("/login");
    };
  
    return (
      <Container>
        <ContainerItems>
          <ContainerLeft>
            <img src={Logo} alt="logo" />
          </ContainerLeft>
  
          <Imput
            type="text"
            placeholder="Busca"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
  
          <ContainerRight>
            <PageLink onClick={() => push("/carrinho")}>
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
  
       {/*  <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul> */}
      </Container>
    );
  }
export default Header  