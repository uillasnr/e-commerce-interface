
import React, { useEffect, useState } from 'react'
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import ClaudUploadIcon from "@mui/icons-material/CloudUpload"
import ErrorMessage from "../../../components/ErrorMessage"
import ReactSelect from 'react-select'
import { useForm, Controller } from "react-hook-form"
import formatCurrency from '../../../utils/formarCurrency'
import api from '../../../services/api'
import { Container, Label, Input, CardImg, Description, LabelUpload, ContainerItems, LabelOptions, LabelUploadOptions } from "./styles"
import { Button } from "../../../components/Button"
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom"




function NewProduct() {
    const [fileName, setFileName] = useState(null)// Armazena o nome do arquivo selecionado pelo usuário
    const [categories, setCategories] = useState([])
    const [fileUpload2, setFileUpload2] = useState('');
    const [fileUpload3, setFileUpload3] = useState('');
    const [fileUpload4, setFileUpload4] = useState('');
    const [valueInput, setValueInput] = useState({ fileName: "", name: "", price: "", description: "" }); //Preview do card
    const { push } = useHistory()




    // Validando os campos do formulário
    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        description: Yup.string().required('Digite a descrição do produto'),
        price: Yup.string().required('Digite o preço do produto'),
        previou_price: Yup.string(),
        category: Yup.object().required('Escolha uma categoria'),
        offer: Yup.boolean(),
        news: Yup.boolean(),

        file: Yup.mixed()
            .test('required', 'Carregue um imagem', value => {
                return value?.length > 0
            })
            .test('fileSize', 'Carregue arquivos de até 2mb', value => {
                return value[0]?.size <= 900000
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


    // Enviando novo produto para o back-end
    const onSubmit = async data => {
        const productDataFormData = new FormData()
        console.log(productDataFormData)
        productDataFormData.append('name', data.name)
        productDataFormData.append('description', data.description)
        productDataFormData.append('price', data.price)
        productDataFormData.append('previou_price', data.previou_price)
        productDataFormData.append('category_id', data.category.id)
        productDataFormData.append('offer', data.offer)
        productDataFormData.append('news', data.news)
        productDataFormData.append('file', data.file[0])


        productDataFormData.append('file2', data.file2[0])
        productDataFormData.append('file3', data.file3[0])
        productDataFormData.append('file4', data.file4[0])


        await toast.promise(api.post('products', productDataFormData), {
            pending: 'Criando novo produto...',
            success: 'Produto criado com sucesso',
            error: "Falha ao criar o produto"
        })
        setTimeout(() => {
            push('/listar-produtos')
        }, 2000)
    }


    // Carregando o select com as categorias
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("categories")

            setCategories(data)

        }
        loadCategories()
    }, [])


    //Preview do card
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValueInput((preValueInput) => ({ ...preValueInput, [name]: value }));

    };
    const LimitDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return `${description.slice(0, maxLength)}...`;
        }
        return description;
    }

    return (
        <Container>
            <h1>Adicionar novo Produto a Loja</h1>
            <ContainerItems>
                <CardImg>
                    <div>
                        <img src={valueInput.fileName} alt="" />
                    </div>
                    <h2>{valueInput.name ? valueInput.name : "Preview"}</h2>
                    <h3>{LimitDescription(valueInput.description, 30)}</h3>
                    <p className="previou_price"> {valueInput.previou_price ? formatCurrency(valueInput.previou_price) : null}</p>
                    <p>{valueInput.price ? formatCurrency(valueInput.price) : ""}</p>

                    <form noValidate onSubmit={handleSubmit(onSubmit)}>
                        <input className='offer'
                            type='checkbox'
                            {...register('offer')}
                        /* defaultChecked={product.offer} */
                        />
                        <label>Produto em Oferta ?</label>

                        <input className='news'
                            type='checkbox'
                            {...register('news')}
                        /* defaultChecked={product.offer} */
                        />
                        <label>Mais Vendidos?</label>
                    </form>
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
                            {...register('file')} onChange={(event) => {
                                setFileName(event.target.files[0]?.name);
                                setValueInput((prevValueInput) => ({
                                    ...prevValueInput,
                                    fileName: URL.createObjectURL(event.target.files[0])
                                }));
                            }}


                        />
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>


                    <Label>Nome</Label>
                    <Input type='text' {...register('name')} onChange={handleInputChange} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label>Preço</Label>
                    <Input type='number' {...register('price')} onChange={handleInputChange} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>

                    <Label>Preço anterior</Label>
                    <Input type='number' {...register('previou_price')} onChange={handleInputChange} />
                    <ErrorMessage>{errors.previou_price?.message}</ErrorMessage>


                    <Controller name="category" control={control}
                        render={({ field }) => {
                            return (
                                <ReactSelect
                                    {...field}
                                    options={categories}
                                    getOptionLabel={cat => cat.name}
                                    getOptionValue={cat => cat.id}
                                    placeholder="Categorias"
                                />
                            )
                        }}>

                    </Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>



                    <LabelOptions>adicione no máximo 3 imagens</LabelOptions>

                    <LabelUploadOptions>

                        <div className="image-preview">
                            {fileUpload2 ? (
                                <img src={URL.createObjectURL(fileUpload2)} alt="Preview" />
                            ) : (
                                <>
                                    <ClaudUploadIcon />
                                </>
                            )}
                            <input
                                type="file"
                                accept="image/png"
                                className="fileUpload2"
                                {...register('file2')}
                                onChange={(event) => {
                                    const file2 = event.target.files[0];
                                    setFileUpload2(file2);
                                }}

                            />
                        </div>

                        <div className="image-preview">
                            {fileUpload3 ? (
                                <img src={URL.createObjectURL(fileUpload3)} alt="Preview" />
                            ) : (
                                <>
                                    <ClaudUploadIcon />
                                </>
                            )}
                            <input
                                type="file"
                                accept="image/png"
                                className="fileUpload3"
                                {...register('file3')}
                                onChange={(event) => {
                                    const file3 = event.target.files[0];
                                    setFileUpload3(file3);
                                }}

                            />
                        </div>

                        <div className="image-preview">
                            {fileUpload4 ? (
                                <img src={URL.createObjectURL(fileUpload4)} alt="Preview" />
                            ) : (
                                <>
                                    <ClaudUploadIcon />
                                </>
                            )}
                            <input
                                type="file"
                                accept="image/png"
                                className="fileUpload4"
                                {...register('file4')}
                                onChange={(event) => {
                                    const file4 = event.target.files[0];
                                    setFileUpload4(file4);
                                }}

                            />
                        </div>

                    </LabelUploadOptions>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>



                </form>

            </ContainerItems>


            <Description>
                <h1>Descrição do produto</h1>
                <textarea
                    placeholder="Digite a descrição do produto"
                    {...register('description')}
                    name="description"
                    value={valueInput.description}
                    onChange={handleInputChange}
                />
            </Description>

            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Button style={{
                    width: '80%', marginTop: 30, marginLeft: '93PX'
                }}>Adicionar produto</Button>
            </form>

        </Container >
    )
}
export default NewProduct

