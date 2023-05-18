import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
background: #1E1E22;
width: 300px;
top: 0;
left: 0;

hr{
    margin: 50px 15px;
}
h1{
    color: #fff;
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 10px;
    margin-top: 40px;
    font-size: 1.8rem;
}
`

export const ItemContainer = styled.div`
height: 60px;
display: flex;
align-items: center;

background: ${props => (props.isActive ? '#565656' : 'nome')};
border-radius: 2px;
margin: 8px;
padding-left: 20px;

.icon{
    color: #fff;
}
`

export const ListLink = styled(Link)`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: #fff;
text-decoration: none;
margin-left: 8px;

`