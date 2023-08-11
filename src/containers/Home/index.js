import React from "react";
import OfferProducts from "../../components/OfferProducts";
import Category from "../../components/Categorys";
import { Container, Slider } from './styles';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import banner1 from "../../assets/banner_img 1.webp";
import banner2 from "../../assets/banner_img 2.webp";
import banner3 from "../../assets/banner_img 3.webp";
import banner4 from "../../assets/banner_img 4.webp";
import banner5 from "../../assets/banner_img 5.webp";
import banner6 from "../../assets/banner_img 6.webp";
import banner7 from "../../assets/banner_img 7.webp";
import ProductNews from "../../components/ProductNews";

function Home() {

  const banners = [banner1, banner2, banner3, banner4, banner5, banner6, banner7];

  return (
    <Container>
      <Header />
      <Category />

      <Slider>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
        >

          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <img src={banner} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ Slider>
      <ProductNews />
      <OfferProducts />
      <Footer />
    </Container>
  );
}

export default Home;
