import styled from "styled-components";


export const Container = styled.div`
background: #222222;
min-height: calc(100vh - 72px);
`



export const Image = styled.img`
width: 100%;
height: 50%;
padding: 30px;

`
export const ContainerButton = styled.div`
   border: none;
    border-bottom: ${props => (props.isActiveCategory && '2px solid #fff' )};;
    color: ${props => (props.isActiveCategory ? '#fff' : 'rgb(54, 231, 61)')};
    margin-top: 100px;
    padding-bottom: 5px;
`


export const ProductsContainer = styled.div`

display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 0px;
padding: 40px;
justify-content: center;


@media  (max-width: 1120px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 5px
      }
@media  (max-width: 972px) {
    grid-template-columns: repeat(4, 1fr);
      }
      @media (max-width: 885px) {
    grid-template-columns: repeat(3, 1fr);
      } 
`

export const CategoriMenu = styled.div`
display: flex;
gap: 20px;
justify-content: center;
cursor: pointer;

`