import styled from "styled-components";


export const Container = styled.div`
background: #222222;
min-height: calc(100vh - 72px);

h5{
  color: #fff;
    margin-left: 45px;
    font-size: 25px;
    margin-top: 155px;
}
`



export const Line = styled.div`
border: 0.5px solid #d5d5d5;
    margin-top: 5px;
    width: 80%;
    margin-left: 235px;
    @media  (max-width: 1188px) {
      margin-left: 235px;
      width: 79%;
    }
    @media  (max-width: 1132px) {
      margin-left: 218px;
    width: 79%;
    }
    @media  (max-width: 1100px) {
      margin-left: 183px;
    width: 82%;
    }
    @media  (max-width: 1030px) {
      margin-left: 218px;
    width: 77%
    }
    @media  (max-width: 961px) {
      margin-left: 191px;
    width: 77%
    }
    @media  (max-width: 844px) {
      margin-left: 191px;
    width: 73%
    }
    @media  (max-width: 722px) {
      margin-left: 181px;
    width: 70%;
    }
`
export const ContainerButton = styled.div`
   border: none;
    border-bottom: ${props => (props.isActiveCategory && '2px solid #fff' )};;
    color: ${props => (props.isActiveCategory ? '#fff' : 'rgb(54, 231, 61)')};
    margin-top: 30px;
    padding-bottom: 5px;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
    width: 80px;
    margin-left: 52px;
`


export const ProductsContainer = styled.div`

/* display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 0px;
padding: 40px;
justify-content: center; */
display: grid;
    margin-top: -341px;
    margin-left: 180px;
    grid-template-columns: repeat(4, 0fr);
    gap: 0px;
    padding: 40px;
    -webkit-box-pack: center;
    justify-content: center;


@media  (max-width: 1121px) {
  grid-template-columns: repeat(4, 0fr);
    padding: 5px;
    margin-top: -302px;
    margin-left: 205px;
      }
@media  (max-width: 1100px) {
  grid-template-columns: repeat(4, 1fr);
    margin-top: -300px;
    margin-left: 165px;
}
      
      @media (max-width: 1060px) {
        grid-template-columns: repeat(3, 1fr);
    width: 267px;
    gap: 35px;
    margin-left: 452px;
      } 
      @media (max-width: 970px) {
        grid-template-columns: repeat(3, 1fr);
    width: 267px;
    gap: 28px;
    margin-left: 410px;
      } 
      @media (max-width: 930px) {
        grid-template-columns: repeat(3, 1fr);
    width: 267px;
    gap: 28px;
    margin-left: 410px;
      } 
      @media (max-width: 920px) {
        grid-template-columns: repeat(3, 1fr);
    width: 267px;
    gap: 2px;
    margin-left: 375px;
   
      } 
      @media (max-width: 860px) {
        grid-template-columns: repeat(2, 1fr);
    width: 267px;
    gap: 57px;
    margin-left: 365px;
   
      } 
      @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    width: 267px;
    gap: 57px;
    margin-left: 333px;
   
      } 
      @media (max-width: 740px) {
        grid-template-columns: repeat(2, 1fr);
    width: 267px;
    gap: 24px;
    margin-left: 300px;
   
      } 
      @media (max-width: 685px) {
        grid-template-columns: repeat(2, 1fr);
    width: 267px;
    gap: 24px;
    margin-left: 272px;
   
      } 
`

export const CategoriMenu = styled.div`
width: 190px;
height: 300px;
border: 0.5px solid rgb(213, 213, 213);

    margin-left: 10px;
    display: inline-block;

    @media  (max-width: 1100px) {
      width: 155px;
      }
/* display: flex;
gap: 20px;
justify-content: center;
cursor: pointer; */

`
