import styled from "styled-components";

export const ContainerItems = styled.div`
h1{
  margin: 25px 0px 25px;
text-align: center;
color: #fff;
font-size: 2rem;
}

.swiper {
 width: 95%;
}
.swiper .swiper-slide {
  padding-top: 1rem;
  padding-bottom: 2rem;
}
.swiper .swiper-slide.bg-color1 {
  background-color: #d6b404;
}
.swiper .swiper-slide.bg-color2 {
  background-color: #7fca83;
}
.swiper .swiper-slide.bg-color3 {
  background-color: #ff8888;
}
.swiper .img-fluid {
  width: 25%;
}
.swiper-pagination-bullet-active {
  background-color:#44d62c; 
  opacity: 1; 
  margin-top: 100px;
}
.swiper-button-prev:after, .swiper-rtl .swiper-button-next:after {
    color: rgb(68, 214, 44);
}
.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
  color: rgb(68, 214, 44);
}

@media (max-width: 900px) {
  .swiper .swiper-slide {
  margin-left: -60px;
}
}
@media (max-width: 845px) {
  .swiper .swiper-slide {
  margin-left: -25px;
}
}
@media (max-width: 650px) {
  .swiper .swiper-slide {
    margin-left: 5px;
}
}
@media (max-width: 590px) {
  .swiper .swiper-slide {
    margin-left: -30px;
}
}
@media (max-width: 550px) {
  .swiper .swiper-slide {
    margin-left: -18px;
}
}
@media (max-width: 400px) {
  .swiper .swiper-slide {
    margin-left: -7px;
}
}

`


export const  Container = styled.div`
width: 100px;
    /* margin: 10px; */
/* background: blue; */


div {
  display: flex;
  justify-content: center; 
  align-items: center; 
  background: #464646;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,1.9));
  border: 0.5px solid rgb(68, 214, 44);
}
&:hover {
    transform: scale(1.03); /* Aumenta o tamanho em 5% */
    cursor: pointer;
  }

img {
    max-width: 80%;
    max-height: 80%;
}

@media (max-width: 680px) {
  div {
    width: 90px;
    height: 90px;
}
img {
  max-width: 80%;
    max-height: 80%;
}
}

@media (max-width: 500px) {
  div {
    width: 80px;
    height: 80px;
}
img {
  max-width: 70%;
    max-height: 70%;
}
}

`

