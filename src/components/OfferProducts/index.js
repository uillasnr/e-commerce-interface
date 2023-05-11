//produtos em offer
import React, { useEffect, useState } from "react"
import api from '../../services/api'
import formatCurrency from '../../utils/formarCurrency'
import useCountdown from "../../hooks/useCountdown"

import { Container, Img, ButtonOffers, ContainerItems, Stopwatch, } from './styles'
import time from "../../assets/tempo.png"
import { useCart } from "../../hooks/CartContext"

function OfferProducts() {
    const [offers, setOffers] = useState([])
    const { putProductInCart } = useCart() //função do carrinho de compras
    const [day, hour, minute, second] = useCountdown("MAY 22, 2023 00:00:00")
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')

            const onlyOffers = data.filter(product => product.offer)
            console.log(data)
            setOffers(onlyOffers)
        }
        loadOffers()
    }, [])

    const LimitDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return `${description.slice(0, maxLength)}...`;
        }
        return description;
    }

    return (

        <Container>
            {offers &&
                offers.map(product => (

                    <ContainerItems key={product.id}  >
                        <h6>OFF</h6>
                        <div>
                            <Img src={product.url_img1} alt="foto do Produto" />
                        </div>
                        <h2>{product.name}</h2>
                        <h3>{LimitDescription(product.description, 50)}</h3>
                        <p>{formatCurrency(product.price)}</p>


                        <Stopwatch
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <span style={{ display: isHovering ? 'none' : 'inline-block' }}>TERMINA EM:</span>


                            {isHovering ?
                                <ButtonOffers onClick={() => putProductInCart(product)}>COMPRAR</ButtonOffers>
                                :

                                
                                <div className="time">
                                    <img src={time} alt="time"></img>
                                    <h4>D{day} {hour}:{minute}:{second}</h4>
                                </div>
                            }
                          
                        </Stopwatch>
                    </ContainerItems>
                ))}
        </Container>
    )
}
export default OfferProducts


