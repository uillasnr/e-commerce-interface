
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
    const [fileUpload, setFileUpload] = useState('');
    const [valueInput, setValueInput] = useState({ fileName: "", name: "", price: "", description: "" }); //Preview do card
    const { push } = useHistory()




    // Validando os campos do formulário
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


    // Enviando novo produto para o back-end
    const onSubmit = async data => {
        const productDataFormData = new FormData()
        console.log(productDataFormData)
        productDataFormData.append('name', data.name)
        productDataFormData.append('description', data.description)
        productDataFormData.append('price', data.price)
        productDataFormData.append('category_id', data.category.id)
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




    ///////////////////////////////////////// input 3 img
    /*  const handleFileChange = (event) => {
         const files = Array.from(event.target.files); // Obter todos os arquivos selecionados
 
         const remainingSlots = 3 - fileData.length; // Slots de upload restantes
 
         const newFiles = files.slice(0, remainingSlots); // Limitar o número de arquivos adicionados ao máximo de slots restantes
 
         const updatedFileData = [...fileData]; // Copiar o estado atual das imagens
 
         newFiles.forEach((file) => {
             const imageURL = URL.createObjectURL(file);
             updatedFileData.push(imageURL); // Adicionar as URLs das novas imagens ao estado atual
         });
 
         setFileData(updatedFileData);
     }; */
    ///////////////////////////////////////////////////////////////////////////////////

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
                    <p>{valueInput.price ? formatCurrency(valueInput.price) : ""}</p>
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

                        <div>
                            {fileUpload ? (
                                <img src={URL.createObjectURL(fileUpload)} alt="Preview" />
                            ) : (
                                <>
                                    <ClaudUploadIcon />
                                </>
                            )}
                            <input
                                type="file"
                                accept="image/png"
                                {...register('file2')}
                                onChange={(event) => {
                                    const file2 = event.target.files[0];
                                    setFileUpload(file2);
                                }}
                            />
                        </div>
                        


                        {/*    <div>
                            {fileData ? (
                                <img src={fileData} alt="Product" />
                            ) : (
                                <>
                                    <ClaudUploadIcon />
                                   
                                </>
                            )}
                            <input type="file" accept="image/png"
                                onChange={(event) => {
                                    setValueInput((prevValueInput) => ({
                                        ...prevValueInput,
                                        setFileData: event.target.files[0],
                                        fileData: URL.createObjectURL(event.target.files[0])
                                    }));
                                }}
                                {...register('file2')}
                            />
                        </div> 
 */}
                        {/*         <div>
                            <input type="file" accept="image/png"
                                onChange={(event) => {
                                    setValueInput((prevValueInput) => ({
                                        ...prevValueInput,
                                        setFileData: event.target.files[0],
                                        fileName: URL.createObjectURL(event.target.files[0])
                                    }));
                                }}
                                {...register('file3')}
                            />
                        </div>

                        <div>
                            <input type="file" accept="image/png"
                                onChange={(event) => {
                                    setValueInput((prevValueInput) => ({
                                        ...prevValueInput,
                                        setFileData: event.target.files[0],
                                        fileName: URL.createObjectURL(event.target.files[0])
                                    }));
                                }}
                                {...register('file4')}
                            />
                        </div> */}

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

