//produtos em offer
import React, { useEffect, useState } from "react"
import api from '../../services/api'
import formatCurrency from '../../utils/formarCurrency'

import { Container, Img, ButtonOffers, ContainerItems } from './styles'
import { useCart } from "../../hooks/CartContext"

function OfferProducts() {
    const [offers, setOffers] = useState([])
    const { putProductInCart } = useCart() //função do carrinho de compras
   

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

                    <ContainerItems key={product.id}>
                        <h6>offer</h6>
                        <div>
                            <Img src={product.url_img1} alt="foto do Produto" />
                        </div>
                        <h2>{product.name}</h2>
                        <h3>{LimitDescription(product.description, 50)}</h3>
                        <p>{formatCurrency(product.price)}</p>

                        <ButtonOffers  onClick={() => putProductInCart(product)}>ADICIONAR AO CARINHO</ButtonOffers>

                    </ContainerItems>
                ))}
        </Container>
    )
}
export default OfferProducts



