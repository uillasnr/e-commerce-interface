import styled from "styled-components";


export const Container = styled.div`
background: red;
position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;

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




export const ContainerItems = styled.div`
height: 90px;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-around;
`