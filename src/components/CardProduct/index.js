//tela de todos produtos

import React from "react";
import PropTypes from 'prop-types'
import formatCurrency from '../../utils/formarCurrency'
import { Container, Img, ContainerItems, Button } from './styles'
import { Link } from "react-router-dom";

function CardProduct({ product }) {

    const LimitDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return `${description.slice(0, maxLength)}...`;
        }
        return description;
    }

    return (
        <Container>
            <ContainerItems key={product.id}>

                <Link style={{ textDecoration: 'none', }} to={`/detalhes/${product.id}`}>
                    <div>
                        <Img src={product.url_img1} alt="foto do Produto" />
                    </div>
                    <h2>{product.name}</h2>
                    <h3>{LimitDescription(product.description, 50)}</h3>
                    <p>{formatCurrency(product.price)}</p>

                    <Button>Adicionar</Button>
                </Link>

            </ContainerItems>

        </Container>
    )
}
export default CardProduct

CardProduct.propTypes = {
    product: PropTypes.object
}