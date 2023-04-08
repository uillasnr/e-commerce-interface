import React, { useEffect, useState } from "react"
import api from '../../services/api'

import { Container,Card,  Img ,ButtonOffers,ContainerItems, Uillas } from './styles'

function OfferProducts() {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')

            const onlyOffers = data.filter(product => product.offer)
            console.log(data)
            setOffers(onlyOffers)
        }
        loadOffers()
    }, [])

    return (
        
        <Container>
             
             {offers &&
           
            offers.map(product => (

                <ContainerItems key={product.id}>
                    {/* <Card>offer</Card> */}
                    <div> 
                    <Img src={product.url} alt="foto do Produto" />
                    </div>
                    <h2>{product.name}</h2>
                    <h3>{product.description}</h3>
                    <p>{product.price}</p>

                    <ButtonOffers onClick={() => {
                     
                    }}>Peça agora</ButtonOffers>
                   
                </ContainerItems>
            ))}
        </Container>
    )
}
export default OfferProducts