
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
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const [fileData, setFileData] = useState([]);
    const [valueInput, setValueInput] = useState({ fileName: "", name: "", price: "", description: "", });
    const { push } = useHistory()



    // Validando os campos do formulário
    const schema = Yup.object().shape({
        //   name: Yup.string().required('Digite o nome do produto'),
        //  description: Yup.string().required('Digite a descrição do produto'),
        // price: Yup.string().required('Digite o preço do produto'),
        // category: Yup.object().required('Escolha uma categoria'),

        /*   file: Yup.mixed()
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
              })  */
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
        productDataFormData.append('category_id', data.category.id)
        // productDataFormData.append('file', data.file[0] )
        productDataFormData.append('file', data.file[0])
           productDataFormData.append('file2', data.file2[0])
        /*   productDataFormData.append('file3', data.file3[0])
          productDataFormData.append('file4', data.file4[0])  */


        await toast.promise(api.post('products', productDataFormData), {
            pending: 'Criando novo produto...',
            success: 'Produto criado com sucesso',
            error: "Falha ao criar o produto"
        })
        /*    setTimeout(() => {
               push('/listar-produtos')
           }, 2000)  */
    }




    // Carregando o select com as categorias
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("categories")

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
                        <img src={valueInput.fileName} alt="foto do Produto" />
                    </div>
                    <h2>{valueInput.name}</h2>
                    <h3>{LimitDescription(valueInput.description, 50)}</h3>
                    <p>{formatCurrency(valueInput.price)}</p>
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

                        {fileData.length > 0 ? (
                            fileData.map((data, index) => (
                                <img key={index} src={data} alt={`Imagem ${index + 1}`} />
                            ))
                        ) : (
                            <>
                                <span className="upload-icon"><ClaudUploadIcon /></span>
                                Carregue as opções de imagens
                            </>
                        )}
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={handleFileChange}
                           // multiple
                           // {...register('file2')}
                        />



                    </LabelUploadOptions>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>


                    <Button style={{
                        width: '80%', marginTop: 30, marginLeft: '93PX'
                    }}>Adicionar produto</Button>
                </form>

            </ContainerItems>


            <Description>
                <h1>Descrição do produto</h1>

                <textarea type="text" placeholder="Digite a descrição do produto"
                    onChange={handleInputChange}
                    {...register('description')}
                    name="description"
                ></textarea>
            </Description>



        </Container >
    )
}
export default NewProduct

