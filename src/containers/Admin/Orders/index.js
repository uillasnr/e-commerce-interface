
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import formatDate from '../../../utils/formatDate'
import status from './order-status'
import Row from './row'
import { Container, Menu, LinkMenu } from './styles'

function Orders() {
    const [orders, setOrders] = useState([]) //todos pedidos
    const [filteredOrders, setFilteredOrders] = useState([]) //pedidos que foram filtrados
    const [activeStatus, setActiveStatus] = useState(1)
    const [rows, setRows] = useState([])

    useEffect(() => {
        // Carregando menu de categorias
        async function loadOrders() {
            const { data } = await api.get('orders')
                   console.log(data)
            setOrders(data)
            setFilteredOrders(data)
        }

        loadOrders()
    }, [])

    function createData(order) {
        return {
            name: order.user.name,
            description: order.description,
            orderId: order._id,
            date: formatDate(order.createdAt),
            status: order.status,
            products: order.products,
            totalPrice: order.totalPrice
        }
    }

    useEffect(() => {
        const newRows = filteredOrders.map(ord => createData(ord))
        setRows(newRows)
    }, [filteredOrders])

    // Vai atualizar todos os pedidos filtrados
    useEffect(() => {
        if (activeStatus === 1) {
            setFilteredOrders(orders)
        } else {
            const statusIndex = status.findIndex(sts => sts.id === activeStatus)
            const newFilteredOrders = orders.filter(
                order => order.status === status[statusIndex].value
            )
            setFilteredOrders(newFilteredOrders)
        }
    }, [orders])

    // Função do filtro do menu de seleção de status
    function hundleStatus(status) {
        if (status.id === 1) {
            setFilteredOrders(orders)
        } else {
            const newOrders = orders.filter(
                order => order.status === status.value
            )
            setFilteredOrders(newOrders)
        }
        setActiveStatus(status.id)
    }



    return (
        <Container>
            <Menu>
                {status && status.map(status => (
                    <LinkMenu
                        key={status.id}
                        onClick={() => hundleStatus(status)}
                        isActiveStatus={activeStatus === status.id}
                    >
                        {status.label}
                    </LinkMenu>
                ))}
            </Menu>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead style={{ backgroundColor: '#565656' }}>
                        <TableRow>
                            <TableCell />
                            <TableCell style={{ color: 'white', textAlign: 'center' }}>
                                Pedido
                            </TableCell>
                            <TableCell style={{ color: 'white', textAlign: 'center' }}>
                                Cliente
                            </TableCell>
                            <TableCell style={{ color: 'white', textAlign: 'center' }}>
                                Data do Pedido
                            </TableCell>
                            <TableCell style={{ color: 'white', textAlign: 'center' }}>
                                Status
                            </TableCell>
                            <TableCell style={{ color: 'white', textAlign: 'center', width: 135 }}>
                                Valor do Pedido
                            </TableCell>
                        </TableRow>
                        
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <Row
                                key={row.orderId}
                                row={row}
                                setOrders={setOrders}
                                orders={orders}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Orders