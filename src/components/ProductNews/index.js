import React, { useEffect, useState } from "react";
import api from '../../services/api';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import { ContainerItems, Container } from './styles';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// ... (import statements)

function ProductNews() {
    const [productNews, setProductNews] = useState([]);

    useEffect(() => {
        async function loadProductNews() {
            try {
                const { data } = await api.get('products');
                const onlyNews = data.filter(product => product.news);
                setProductNews(onlyNews);
            } catch (error) {
                console.error("Error loading product news:", error);
            }
        }
        loadProductNews();
    }, []);

    const breakpoints = {
        320: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        650: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 6,
            spaceBetween: 20
        },
        900: {
            slidesPerView: 8,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 10,
            spaceBetween: 40
        }
    }

    return (
        <ContainerItems>
            <h1>Novidade</h1>
            <Swiper
                spaceBetween={20} // Adjust spacing between slides
                centeredSlides={false}
                breakpoints={breakpoints}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Pagination, Navigation]}
            >
                {productNews.map(product => (
                    <SwiperSlide key={product.id}>
                        <Link style={{ textDecoration: 'none' }} to={`/detalhes/${product.id}`}>
                             <Container> 
                                <div>
                                    <img src={product.url_img1} alt="foto do Produto" />
                                 </div>
                             </Container>  
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ContainerItems>
    );
}

// ... (styled components)

export default ProductNews;
