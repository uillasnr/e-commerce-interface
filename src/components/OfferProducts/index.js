//produtos em offer
import React, { useEffect, useState } from "react"
import api from '../../services/api'
import formatCurrency from '../../utils/formarCurrency'
import useCountdown from "../../hooks/useCountdown"

import { Container, Img, ButtonOffers, ContainerItems, Stopwatch,} from './styles'
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
                        <h6>offer</h6>
                        <div>
                            <Img src={product.url_img1} alt="foto do Produto" />
                        </div>
                        <h2>{product.name}</h2>
                        <h3>{LimitDescription(product.description, 50)}</h3>
                        <p>{formatCurrency(product.price)}</p>
{/* 
                        <Stopwatch>
                            <h4 title="Dias" number={day} >D{day} </h4>
                            <h4 title="Horas" number={hour} >{hour}</h4>
                            <h4 title="Minutos/" number={minute} >{minute}</h4>
                            <h4 title="Segundos" number={second} >{second}</h4> 
                            <h4>{hour}:{minute}:{second}</h4>
                        </Stopwatch>

                         <ButtonOffers onClick={() => putProductInCart(product)}>ADICIONAR AO CARINHO</ButtonOffers>  */}



                        <Stopwatch
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            {isHovering ?
                                <ButtonOffers onClick={() => putProductInCart(product)}>COMPRAR</ButtonOffers>
                                :
                                
                                <h4>D{day} {hour}:{minute}:{second}</h4>
                            }
                        </Stopwatch>
                    </ContainerItems>
                ))}
        </Container>
    )
}
export default OfferProducts


