import styled from "styled-components";

export const Container = styled.div`

`

export const ContainerItens = styled.div`
background-color: #ffffff;
padding: 15px;
box-shadow: 0px 10px 40px rgba(0,0,0.03);
border-radius: 10px;
display: flex;
margin: 0px 15px -15px;
flex-direction: column;
justify-content: space-between;


 
.container-top{
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas: 
    'title title'
    'items items-price'
    'delivery-tax delivery-tax-price';
.title{
    grid-area: title;
    margin-bottom: 20px;
    padding-bottom: 5px;
    border-bottom: 2px dashed gray
}
.items{
    grid-area: items;
}
.items-price{
    grid-area: items-price;
}
.delivery-tax{
   grid-area: delivery-tax
}
.delivery-tax-price{
    grid-area: delivery-tax-price
}
}
.container-bottom {
    display: flex;
    margin-top: 50px;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 400;
    padding-top: 5px;
    border-top: 2px dashed gray
}
@media  (max-width: 980px) {
    .title{
font-size: 15px;
text-align: center;
}
}
@media  (max-width: 826px) {
  
    .title{
        display: flex;
        justify-content: center;
        font-size: 20px;
        
}
}
`

