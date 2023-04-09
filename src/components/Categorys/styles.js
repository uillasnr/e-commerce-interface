import styled from "styled-components";

export const Container = styled.div`

display: flex;
gap: 20px;
justify-content: center;
cursor: pointer;
`


export const ContainerButton = styled.div`

    border: none;
    border-bottom: ${props => (props.isActiveCategory && '2px solid #fff' )};;
    color: ${props => (props.isActiveCategory ? '#fff' : 'rgb(54, 231, 61)')};
    margin-top: 100px;
    padding-bottom: 5px;

`