// MenuMobile.js

import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MenuIcon from "../../assets/icons-menu.png";
import { Container, ContainerText, Button, PageLink, Image, ContainerItems, ModalOverlay, ContainerModal } from './styles';
import { useUser } from '../../hooks/UserContext';
import Person from "../../assets/user.png";
import api from '../../services/api';

function MenuMobile() {
    const [categories, setCategories] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura/fechamento do modal
    const { userData, logout } = useUser();
    const menuRef = useRef(null);
    const history = useHistory();
    const {
        push,
        location: { pathname },
    } = useHistory();

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories');
            setCategories(data);
        }

        loadCategories();
    }, []);



    const handleIconClick = (event) => {
        event.stopPropagation();
        setIsMenuOpen(true);
        setIsModalOpen(true); // Abre o modal ao clicar na imagem
    };

    const logoutUser = () => {
        logout();
        history.push("/login");
    };

    const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
            setIsModalOpen(false); // Fecha o modal ao clicar fora dele
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <Container>
            <img src={MenuIcon} alt="menu" onClick={handleIconClick} />

            {isModalOpen && (
                <ModalOverlay onClick={handleOutsideClick}>
                    <ContainerModal ref={menuRef}>

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
                            <div></div>
                        </ContainerText>
                        <div className='Modal'>
                            <p onClick={() => push("/Login")}>Login</p>
                            <p onClick={() => push("/")}>Ofertas</p>
                            <p onClick={() => push("/compras")}>Minha Compra</p>
                        </div>
                        <h2>Categorias</h2>

                        {categories &&
                            categories.map((category) => (
                                <ContainerItems key={category.id}>
                                    <Image src={category.url} alt="foto da categoria" />
                                    <Button
                                        to={{
                                            pathname: '/produtos',
                                            state: { categoryId: category.id },
                                        }}
                                    >
                                        {category.name}
                                    </Button>
                                </ContainerItems>
                            ))}
                    </ContainerModal>
                </ModalOverlay>
            )}


        </Container>
    );
}

export default MenuMobile;
