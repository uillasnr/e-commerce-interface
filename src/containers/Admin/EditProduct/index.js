
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




    function EditProduct() {
        const [fileName, setFileName] = useState(null)// Armazena o nome do arquivo selecionado pelo usuário
        const [categories, setCategories] = useState([])
        const [fileUpload, setFileUpload] = useState('');
        const [valueInput, setValueInput] = useState({ fileName: "", name: "", price: "", description: "" }); //Preview do card
        const { push, location:
            { state: { product }
            }
        } = useHistory()



        // Validando os campos do formulário
        const schema = Yup.object().shape({
            name: Yup.string(),
            description: Yup.string(),
            price: Yup.number(),
            category_id: Yup.number(),
            offer: Yup.boolean()
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
            productDataFormData.append('offer', data.offer)
            productDataFormData.append('file', data.file[0])


            productDataFormData.append('file2', data.file2[0])
            productDataFormData.append('file3', data.file3[0])
            productDataFormData.append('file4', data.file4[0])


            await toast.promise(api.put(`products/${product.id}`, productDataFormData), {
                pending: 'Editando novo produto...',
                success: 'Produto editado com sucesso',
                error: "Falha ao editar o produto"
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


    // Carregar os dados do produto ao carregar o componente
      /*    useEffect(() => {
            async function loadProductData() {
            // Carregar os dados do produto
            const { data } = await api.put(`products/${product.id}`);
            const { name, price, description } = data;
        console.log(data)
            // Atualizar o estado com os dados do produto
            setValueInput((prevValueInput) => ({
                ...prevValueInput,
                name,
                price,
                description,
                fileName: data.fileName,
            }));
            }
        
            loadProductData();
        }, [product.id]); 
         */



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
                <h1>Editar Produto a Loja</h1>
                <ContainerItems>
                    <CardImg>
                        <div>
                            <img src={valueInput.fileName} alt="" />
                        </div>
                        <h2>{valueInput.name ? valueInput.name : "Preview"}</h2>
                        <h3>{LimitDescription(valueInput.description, 30)}</h3>
                        <p>{valueInput.price ? formatCurrency(valueInput.price) : ""}</p>
                        
                        <form noValidate onSubmit={handleSubmit(onSubmit)}>
                            <input 
                                type='checkbox'
                                {...register('offer')}
                                defaultChecked={product.offer}
                            />
                            <label>Produto em Oferta ?</label>
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
                                defaultValue={product.fileName} 
                            />
                        </LabelUpload>
                        <ErrorMessage>{errors.file?.message}</ErrorMessage>


                        <Label>Nome</Label>
                        <Input type='text' {...register('name')} onChange={handleInputChange}
                            defaultValue={product.name} />
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>

                        <Label>Preço</Label>
                        <Input type='number' {...register('price')} onChange={handleInputChange}
                            defaultValue={product.price} />
                        <ErrorMessage>{errors.price?.message}</ErrorMessage>


                        <Controller name="category" control={control} defaultValue={product.category}
                            render={({ field }) => {
                                return (
                                    <ReactSelect
                                        {...field}
                                        options={categories}
                                        getOptionLabel={cat => cat.name}
                                        getOptionValue={cat => cat.id}
                                        placeholder="Categorias"
                                        defaultValue={product.category}
                                    />
                                )
                            }}>

                        </Controller>
                        <ErrorMessage>{errors.category?.message}</ErrorMessage>



                        <LabelOptions>adicione no máximo 3 imagens</LabelOptions>
                        <LabelUploadOptions>

                            <div>
                                {fileUpload && <img src={URL.createObjectURL(fileUpload)} alt="Preview" />}
                                <input
                                    type="file"
                                    accept="image/png"
                                    onChange={(event) => {
                                        setFileUpload(event.target.files[0]); // Atualiza o estado fileUpload com o arquivo selecionado
                                    }}
                                    {...register('file2')}
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
                            <div>
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
                        defaultValue={product.description}
                    />
                </Description>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Button style={{
                        width: '80%', marginTop: 30, marginLeft: '93PX'
                    }}>Editar produto</Button>
                </form>

            </Container >
        )
    }
    export default EditProduct

