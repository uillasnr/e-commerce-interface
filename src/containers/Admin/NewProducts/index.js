
import React, { useEffect, useState } from 'react'
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import ClaudUploadIcon from "@mui/icons-material/CloudUpload"
import ErrorMessage from "../../../components/ErrorMessage"
import ReactSelect from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import api from '../../../services/api'
import { Container, Label, Input, CardImg, Description, LabelUpload, ContainerItems, LabelUploadOptions } from "./styles"
import { Button } from "../../../components/Button"




function NewProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const [fileData, setFileData] = useState([]);
   //const [fileNameu, setFileNameu] = useState('');

    const onSubmit = data => console.log(data)

    // const [product, setProduct] = useState()

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        description: Yup.string().required('Digite a descrição do produto'),
        price: Yup.string().required('Digite o preço do produto'),
        category: Yup.object().required('Escolha uma categoria'),

        file: Yup.mixed()
            .test('required', 'Carregue um imagem', value => {
                return value?.length > 0
            })
            .test('fileSize', 'Carregue arquivos de até 2mb', value => {
                return value[0]?.size <= 200000
            })
            .test('type', 'Carregue apenas arquivos JPEG', value => {
                return (
                    (value[0]?.type === 'image/jpeg') ||
                    (value[0]?.type === 'image/png')
                )
            })
    })


    const { register, handleSubmit, control,
        formState: { errors } } = useForm({ resolver: yupResolver(schema) })


    // Carregando todos os produtos
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            setCategories(data)
        }
        loadCategories()
    }, [])


    /////////////////////////////////////////
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files); // Obter todos os arquivos selecionados
    
        const remainingSlots = 3 - fileData.length; // Slots de upload restantes
    
        const newFiles = files.slice(0, remainingSlots); // Limitar o número de arquivos adicionados ao máximo de slots restantes
    
        const updatedFileData = [...fileData]; // Copiar o estado atual das imagens
    
        newFiles.forEach((file) => {
          const imageURL = URL.createObjectURL(file);
          updatedFileData.push(imageURL); // Adicionar as URLs das novas imagens ao estado atual
        });
    
        setFileData(updatedFileData);
      };
    
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

                <form noValidate onSubmit={handleSubmit(onSubmit)}>

                    <LabelUpload>
                        {fileName ? fileName : (
                            <>
                                <ClaudUploadIcon />
                                Carregue a imagem do produto
                            </>
                        )}
                        <input type='file' accept="image/png, image/jpeg"
                            {...register('file')} onChange={value => {
                                setFileName(value.target.files[0]?.name)
                            }}
                        />
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>


                    <Label>Nome</Label>
                    <Input type='texe' {...register('name')} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label>Preço</Label>
                    <Input type='number' {...register('price')} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>


                    <Controller name='category' control={control}
                        render={({ field }) => {

                            return (
                                <ReactSelect
                                    {...field}
                                    options={categories}
                                    getOptionLabel={categories => categories.name}
                                    getOptionValue={categories => categories.id}
                                    placeholder="Categorias"
                                />
                            )
                        }}
                    ></Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>



                    <Label> Adicionar no máximo 3 imagens</Label>
                    <LabelUploadOptions>
                 
                        {fileData.length > 0 ? (
                            fileData.map((data, index) => (
                                <img key={index} src={data} alt={`Imagem ${index + 1}`} />
                            ))
                        ) : (
                            <>
                                <span className="upload-icon"><ClaudUploadIcon /></span>
                                Carregue a imagem do produto
                            </>
                        )}
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={handleFileChange}
                        />

                    </LabelUploadOptions>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>


                    <Button>Adicionar produto</Button>
                </form>

            </ContainerItems>


            <Description>
                <h1>Descrição do produto</h1>

                <input type='texe'></input>
            </Description>

        </Container >
    )
}
export default NewProduct

