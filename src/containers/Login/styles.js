import styled from "styled-components";


export const Container = styled.div`
background: #222222;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;


`;
export const ContainerItens = styled.div`
background: white;
width: 30%;
height: 50%;
h1{
    color: red;
}
`

export const Label = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: red;
margin-top: 10px;
margin-bottom: 5px;
`;

export const Input = styled.input`
width: 280px;
height: 38.32px;
background: #ffffff;
box-shadow: 3px 3px 10px rgba(74, 144, 226,0.19);
border-radius: 5px;
border: ${props => (props.error ? ' 2px solid #cc1717' : 'none')};
padding-left: 10px;
`;




export const SignInLink = styled.p`
font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 16px;
    color: red;
    margin-left: 142px;
 a { 
    cursor: pointer;
    text-decoration: underline;
}
`

export const Button = styled.button`
 width: 280px;
    height: 36.13px;
    background: #36E73D;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #2c2b2b;
    margin-top: 40px;
    
 &:hover {
    opacity:  0.8;
}
&:active {
opacity: 0.6;
}
`;


