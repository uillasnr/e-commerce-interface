import styled from "styled-components";


export const Container = styled.div`
background: #222222;
width: 100vw;
color: #fff;

line{
    width: 100%;
    display: flex;
    margin-top: 100px;
    border: 0.5px solid #d5d5d5;
}


h1{
    margin-bottom: 120px;
    display: flex;
    justify-content: center;
}
h5{
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 40px;
    align-items: center;
    text-align: center;   

}


`

export const ContainerTex = styled.div`

display: inline-block;



p{
    margin-left: 530px;
    margin-top: 5px;
}

h2{
    margin-left: 530px;
    font-size: 2.5rem;
    width: 540px;
    margin-top: -30px;
}
h3{
    margin-left: 530px;
    margin-top: 90px;
    font-size: 1.3rem;
    color: rgb(54, 231, 61);
}
.quantity-container{
    display: flex;
    gap: 20px;
    height: 40px;
    margin-left: 530px;

    button {
        height: 30px;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
        margin-top: 15px;
        color: rgb(54, 231, 61);
    }
    p{
        margin-top: 5px;
    }
    h1{
    font-size: 16px;
    color: #000000;
    margin-top: 15px;
}
h6{
    width: 40px;
    height: 30px;
    background: #fff;
    border-radius: 5px;
    padding: 5px 15px 0px;
    font-size: 16px;
}
}
@media (max-width: 1090px){
h2{
    font-size: 2.3rem;
}
}
@media (max-width: 1040px){
h2{
    font-size: 2.1rem;
    /* width: 450px; */
}

}
@media (max-width: 1000px){
h2{
    font-size: 1.8em;
}
@media (max-width: 950px){
   
}


}

`

export const Image = styled.img`

background: #464646;
padding: 40px;
display: flex;

@media (max-width: 950px){
height: 290px;
}
`
export const ImgOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const ContainerImg = styled.div`
width: 450px;
height: 350px;
margin: 30px;
display: flex;
margin-left: -1020px;

@media (max-width: 950px){
    margin-left: -1050px;
    }

`
export const Img = styled.img`

    width: 80%;
  cursor: pointer;
    padding: 10px;
    background: #464646;
    @media (max-width: 950px){
        width: 51%;
    }
`
export const Description = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
margin-top: 30px;
`
export const Uillas = styled.div`
display: flex;
`