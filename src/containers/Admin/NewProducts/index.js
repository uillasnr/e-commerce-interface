
import React, { useEffect, useState } from 'react'

import ReactSelect from 'react-select'
import { useForm } from 'react-hook-form'
import api from '../../../services/api'
import { Container, Label, Input, CardImg, Description ,ContainerItems } from "./styles"
import { Button } from "../../../components/Button"



function NewProduct() {
    const { register, setRegister } = useForm()

    const [product, setProduct] = useState()
    // Carregando todos os produtos


    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('products')

            setProduct(data)
        }

        loadOrders()
    }, [])

    return (
        <Container>

            <ContainerItems>
                <CardImg>
                    <div>
                        <img alt="foto do Produto" />
                    </div>
                    <h2>ghfg</h2>
                    <h3>ghgfhgfhgf</h3>
                    <p>hjhjhjhg</p>
                </CardImg>

                <form noValidate>
                    <Label>Upload de imagem</Label>
                    <Input type='file' accept="image/png, image/jpeg" />

                    <Label>Nome</Label>
                    <Input type='texe' {...register('name')} />

                    <Label>Preço</Label>
                    <Input type='number' {...register('price')} />

                    <ReactSelect />


                    <Button>Adicionar produto</Button>
                </form>

            </ContainerItems>

            
            <Description>
                <h1>Descrição do produto</h1>

                <input  type='texe'></input>
            </Description>

        </Container>
    )
}
export default NewProduct