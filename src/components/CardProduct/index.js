import React from "react";
import PropTypes from 'prop-types'
import formatCurrency from '../../utils/formarCurrency'
import { Container, Img, ContainerItems, Button } from './styles'
import { Link } from "react-router-dom";

function CardProduct({ product }) {
    return (
        <Container>
            <ContainerItems key={product.id}>

                <Link to={`/detalhes/${product.id}`}>
                    <div>
                        <Img src={product.url} alt="foto do Produto" />
                    </div>
                    <h2>{product.name}</h2>
                    <h3>{product.description}</h3>
                    <p>{formatCurrency(product.price)}</p>
                </Link>

                <Button onClick={() => {

                }}>Adicionar</Button>

            </ContainerItems>

        </Container>
    )
}
export default CardProduct

CardProduct.propTypes = {
    product: PropTypes.object
}