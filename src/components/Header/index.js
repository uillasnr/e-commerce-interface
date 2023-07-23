

import React, { useEffect, useState, useRef } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { useUser } from "../../hooks/UserContext"
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/CartContext"
import Person from "../../assets/user.png"
import Cart from "../../assets/carrinho.png"
import Logo from "../../assets/DEV.png"

import {
  Container, ContainerLeft, ContainerRight, Car,
  ContainerItems, Imput, PageLink, ContainerText, Search
} from "./styles"
import MenuMobile from "../MenuMobile";




function Header() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const { cartProducts } = useCart()
  const searchRef = useRef();
  const { logout, userData } = useUser();
  const {
    push,
    location: { pathname },
  } = useHistory();


  //Buscar produto
  useEffect(() => {
    async function searchProducts() {
      if (search) {
        const { data } = await api.get(`/search/${search}`);
        setProducts(data);
      } else {
        setProducts([]);
      }
    }
    searchProducts();
  }, [search]);


  const logoutUser = () => {
    logout();
    push("/login");
  };


  //resultados da pesquisa desapareçam quando o usuário clicar
  useEffect(() => {
    function handleOutsideClick(event) {
      if (!searchRef.current.contains(event.target)) {
        setSearch("");
        setProducts([]);
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);



  return (
    <Container>
      <ContainerItems>
        
        <ContainerLeft>
          <PageLink onClick={() => push("/")}>
            <img src={Logo} alt="logo" />
          </PageLink>
        </ContainerLeft>


        <Imput ref={searchRef}
          type="text"
          placeholder="Buscar produtos"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <ContainerRight>
          <PageLink onClick={() => push("/carrinho")}>
            <Car onClick={() => push("/carrinho")}>
              {cartProducts.length > 0 && (      /*  exibe a quantidade de itens no carrinho  */
                <span>{cartProducts.length}</span>
              )}
            </Car>
            <img src={Cart} alt="carrinho" />
          </PageLink>

          <MenuMobile />

          <ContainerText>
            <PageLink onClick={() => push("/Login")}>
              <img src={Person} alt="logo-pessoa" />
            </PageLink>

            <div className="user-info">
              {userData.name ? (
                <p>Olá, {userData.name}</p>
              ) : (
                <span>Olá, faça o login ou cadastre-se!</span>
              )}
              <div className="logout" onClick={logoutUser}> Sair</div>
            </div>
          </ContainerText>

        </ContainerRight>
      </ContainerItems>

      <Search style={{ display: products.length ? "block" : "none" }}>
        {products.map((product) => (
          <Link style={{ textDecoration: 'none', }} to={`/detalhes/${product.id}`} >
            <div className="CardSearch">
              <li><img src={product.url_img1} alt="foto do Produto" /></li>
              <li key={product.id}>{product.name}</li>
            </div>
          </Link>
        ))}

      </Search>

    </Container>
  );
}
export default Header  
