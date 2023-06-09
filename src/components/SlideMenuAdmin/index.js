import React from "react";
import { useUser } from "../../hooks/UserContext"
import  PropTypes  from "prop-types";
import LogoutIcon from '@mui/icons-material/Logout'
import listLinks from "./menu-list";
import Logo from "../../assets/DEV.png"
import { Container, ItemContainer, ListLink } from "./styles"


export function SlideMenuAdmin({ path }) {
    const { logout } = useUser()

    return (
        <Container>
             <img src={Logo} alt="logo" />
            <hr></hr>
            {listLinks.map(item => (
                <ItemContainer key={item.id} isActive={path === item.link}>
                    <item.icon className="icon" />
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItemContainer>
            ))}
            <hr></hr>
            <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
                <LogoutIcon style={{color:'fff'}} />
                <ListLink to="/" onClick={logout}>Sair</ListLink>
               
            </ItemContainer>
        </Container>
    )
}

export default SlideMenuAdmin

SlideMenuAdmin.propTypes = {
    path: PropTypes.string
}