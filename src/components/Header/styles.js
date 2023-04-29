import styled from "styled-components";


export const Container = styled.div`
background: red;


`

export const ContainerLeft = styled.div`
display: flex;
margin: 10px;
img{
    width: 80%;
}
`
export const ContainerRight = styled.div`
display: flex;
align-items: center;
gap: 15px;
`
export const PageLink = styled.div`
cursor: pointer;
font-size: 16px;
line-height: 19px;
`
export const ContainerText = styled.div`
margin: 10px;
p{
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #fff;
}
`

export const Imput = styled.input`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 37%;
    border-radius: 20px;
    height: 40px;
`
export const PageLinkExit = styled.a`
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
cursor: pointer;
color: #fff;
`
export const ContainerButton = styled.div`
display: inline;
align-items: center;
font-weight: bold;
margin: 10px;
cursor: pointer;
color: #fff;


`

export const ContainerOptions = styled.div`
display: flex;
align-items: center;
background: rgb(141 141 141);
width: 100%;
height: 20px;
justify-content: center;
height: 40px;
border: 0.5px solid #d5d5d5;
`

export const ContainerItems = styled.div`
height: 90px;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-around;
`