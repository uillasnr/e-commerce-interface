import CancelIcon from '@mui/icons-material/Cancel'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import paths from '../../../constants/paths'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formarCurrency'
import { Container, Img, EditIconStyles, DeleteIconStyles } from './styles'

function ListProducts() {
    const [products, setProducts] = useState()
    const { push } = useHistory()

    // Carregando todos os produtos
    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('products')

            setProducts(data)
        }

        loadOrders()
    }, [])


    // Função para excluir produto
    async function deleteProduct(productId) {
        await api.delete(`products/${productId}`);
        setProducts(products.filter((product) => product.id !== productId));
    }

    function isOffer(offerStatus) {
        if (offerStatus) {
            return <CheckBoxIcon style={{ color: '#228822' }} />
        }

        return <CancelIcon style={{ color: '#CC1717' }} />
    }

    //Função para editar produto
    function EditProduct(product) {
        push(paths.EditProduct, { product })
    }


    const LimitDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return `${description.slice(0, maxLength)}...`;
        }
        return description;
    }



    return (
        <Container>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Descrição</TableCell>
                            <TableCell>Preço</TableCell>
                            <TableCell align="center">
                                Produto em Oferta
                            </TableCell>
                            <TableCell align="center">
                                Imagem do Produto
                            </TableCell>
                            <TableCell>Editar</TableCell>
                            <TableCell>Excluir </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products && products.map(product => (
                            <TableRow
                                key={product.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0
                                    }
                                }}
                            >
                                <TableCell component="th" scope="row">{product.name}</TableCell>
                                <TableCell style={{ fontSize: '10px', width: '200px' }}
                                >{LimitDescription(product.description, 50)}</TableCell>
                                <TableCell>{formatCurrency(product.price)}</TableCell>
                                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                                <TableCell align="center"><Img src={product.url_img1} alt="imagem-produto" /></TableCell>
                                <TableCell>
                                    <EditIconStyles
                                        onClick={() => EditProduct(product)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <DeleteIconStyles
                                        onClick={() => deleteProduct(product.id)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ListProducts

