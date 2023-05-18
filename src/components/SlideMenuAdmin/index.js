import React from "react";
import { useUser } from "../../hooks/UserContext"
import  PropTypes  from "prop-types";
import LogoutIcon from '@mui/icons-material/Logout'
import listLinks from "./menu-list";

import { Container, ItemContainer, ListLink } from "./styles"


 function SlideMenuAdmin() {
    const { logout } = useUser()

    return (
        <Container>
            <h1>Adiministrador</h1>
            <hr></hr>
            {listLinks.map(item => (
                <ItemContainer key={item.id} isActive=''>
                    <item.icon className="icon" />
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItemContainer>
            ))}
            <hr></hr>
            <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
                <LogoutIcon style={{color:'fff'}} />
                <ListLink to="/login" onClick={logout}>Sair</ListLink>
               
            </ItemContainer>
        </Container>
    )
}
SlideMenuAdmin.propTypes = {
    path: PropTypes.string
}

export default SlideMenuAdmin