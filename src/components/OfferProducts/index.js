
import React, { useEffect, useState } from "react"
import api from '../../services/api'
import formatCurrency from '../../utils/formarCurrency'
import useCountdown from "../../hooks/useCountdown"

import { Container, ContainerCardOffer, H1, Img, ButtonOffers, ContainerItems, Stopwatch, } from './styles'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { Link } from "react-router-dom";

function OfferProducts() {
    const [offers, setOffers] = useState([])
    const [day, hour, minute, second] = useCountdown("Aug 13, 2023 00:00:00")
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')

            const onlyOffers = data.filter(product => product.offer)

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
            {offers && (
                <>
                    <H1>Ofertas em destaque</H1>

                    <ContainerCardOffer>
                        {offers &&
                            offers.map(product => (

                                <ContainerItems key={product.id}  >
                                    <h6><h5>OFF</h5></h6>
                                    <div>
                                        <Img src={product.url_img1} alt="foto do Produto" />
                                    </div>
                                    <h2>{product.name}</h2>
                                    <h3>{LimitDescription(product.description, 50)}</h3>
                                    <p className="previou_price">De: {formatCurrency(product.previou_price)}</p>
                                    <p>{formatCurrency(product.price)}</p>


                                    <Stopwatch
                                        onMouseEnter={() => setIsHovering(true)}
                                        onMouseLeave={() => setIsHovering(false)}
                                    >
                                        <span style={{ marginTop:'3px',display: isHovering ? 'none' : 'inline-block' }}>TERMINA EM:</span>


                                        {isHovering ?
                                            <Link style={{ textDecoration: 'none', }} to={`/detalhes/${product.id}`}>
                                                <ButtonOffers>COMPRAR</ButtonOffers>
                                            </Link>
                                            :

                                            <div className="time">
                                                <AccessAlarmsIcon style={{display: 'block'}}/>
                                                <h4>D{day} {hour}:{minute}:{second}</h4>
                                            </div>
                                        }

                                    </Stopwatch>
                                </ContainerItems>
                            ))}
                    </ContainerCardOffer>
                </>
            )}
        </Container>
    )
}
export default OfferProducts


