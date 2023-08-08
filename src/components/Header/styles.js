import styled from "styled-components";


export const Container = styled.div`
    background: rgb(70 70 70);
    border: 0.5px solid #d5d5d5;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
   
   
`

export const ContainerLeft = styled.div`

div{
  margin: 25px;
}
img{
    width: 100px
}
@media (max-width: 650px) {
  div{
    margin: 5px;
}
img{
    width: 100px
}
}
@media (max-width: 480px) {
img{
width: 75px;
} 
}
`
export const ContainerRight = styled.div`
display: flex;
align-items: center;
gap: 5px;

@media (max-width: 650px) {
  image {
    display: none;
}
}
`

export const Car = styled.div`
    /* margin-top: 3px;
    margin-left: 18px; */
    margin-top: 10px;
    
img{
    margin-top: 35px;
}
span{
    background: rgb(68, 214, 44);
    color: rgb(255, 255, 255);
    border-radius: 15px;
    font-size: 12px;
    width: 20px;
    font-weight: 600;
    height: 20px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: -5px 18px 0px;
}
`

export const PageLink = styled.div`
cursor: pointer;

`
export const ContainerText = styled.div`
margin: 10px;
display: flex;
/* img{
  margin: 10px 0px 10px 10px;
} */
p{
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #fff;
}
div.user-info {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100px;
  margin-top: 5px;
}
span{
  font-size: 0.8rem;
  font-weight: 300;
  color: #fff;
  line-height: 13px;
}
div.logout {
  font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
    color: rgb(68 214 44);
    margin-top: 5px;
  }
  @media (max-width: 1030px) {
    margin: 10px;
display: flex;
/* img{
  margin: 10px 0px 10px 10px;
} */
p{
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #fff;
}
div.user-info {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100px;
  margin-top: 5px;
}
span{
  font-size: 0.8rem;
  font-weight: 300;
  color: #fff;
  line-height: 13px;
}
div.logout {
  font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
    color: rgb(68 214 44);
    margin-top: 5px;
  }
  }
@media (max-width: 650px) {
  display: none;
}
`

export const Imput = styled.input`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 37%;
   text-align: center;
    font-size: 15px;
    font-weight: 700;
    border-radius: 20px;
    height: 40px;

    
  @media (max-width: 480px) {
font-size: 12px;
  }
  @media (max-width: 400px) {
font-size: 10px;
  }
`


export const ContainerItems = styled.div`
   height: 90px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    gap: 30px;
    margin: 0px 80px 0px 90px;

    @media (max-width: 1090px) {
  height: 90px;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    padding: 10px;
  }

    @media (max-width: 870px) {
      height: 90px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    gap: 30px;
    margin: 0px 50px 0px 50px;
  }
    @media (max-width: 800px) {
      height: 90px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    gap: 30px;
    margin: 0px 50px 0px 50px;
  }
  @media (max-width: 770px) {
    height: 90px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    gap: 30px;
    margin: 0px 10px 0px 10px;
  }
      @media (max-width: 700px) {
     height: 90px;
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 0px 0px 0px 0px;
  }

@media (max-width: 590px) {
  height: 90px;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    padding: 10px;
  }
  @media (max-width: 480px) {
  height: 90px;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    padding: 10px;
  }
  @media (max-width: 400px) {
  height: 90px;
    display: flex;
    align-items: center;
    flex-direction: row;
 
    padding: 10px;
  }

`


export const ContainerSearch = styled.div`

display: block;

`

export const Search = styled.div`
width: 25%;
background: #464646;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
position: absolute;
top: 65px;
left: 463px;

    

.CardSearch{
    margin: 5px;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    justify-content: center;
    list-style-type: none;

    &:hover {
    transform: scale(1.03); /* Aumenta o tamanho em 5% */
    cursor: pointer;
  }
}
.CardSearch:hover{
    background: #36e73d;

}
li{
  text-decoration: none;
  font-size: 15px;
  color: black;
}
img{
    width: 60px;
    background: none;
}

@media (max-width: 1170px) {
    left: 400px;
      } 
      @media (max-width: 1150px) {
    left: 385px;
      } 
      @media (max-width: 1040px) {
    left: 355px;
      }
      @media (max-width: 1000px) {
    left: 345px;
      } 
      @media (max-width: 950px) {
    left: 323px;
      }  
      @media (max-width: 885px) {
    left: 300px;
      } 
      @media (max-width: 825px) {
    left: 283px;
      } 
      @media (max-width: 770px) {
    left: 260px;
      } 
      @media (max-width: 720px) {
    left: 240px;
      } 
      @media (max-width: 660px) {
        left: 225px;
    width: 215px;
      } 
      @media (max-width: 630px) {
    left: 205px;
      } 
      @media (max-width: 590px) {
    left: 194px;
    img{
    width: 55px;
    
}
      } 
      @media (max-width: 560px) {
    left: 180px;
    li{
        font-size: 13px 
    }
      } 
      @media (max-width: 520px) {
    left: 185px;
    width: 159px;
    li{
        font-size: 11px 
    }
      } 
      @media (max-width: 480px) {
    left: 155px;
    width: 159px;
    img{
    width: 50px;
}
      }
      @media (max-width: 450px) {
        left: 117px;
    width: 159px;
    img{
    width: 45px;
}
      }
`
