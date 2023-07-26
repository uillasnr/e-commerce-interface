import React, { useState } from "react";
import { Container, ConatinerCep, Input, Error, ConatinerFrete } from './styles';
import api from '../../services/api';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import IconDelivery from "../../assets/icons8-delivery-truck-64.png"
import RoomIcon from '@mui/icons-material/PinDrop';

function CheckCep() {
    //const [sCepDestino, setSCepDestino] = useState('');
    const [freteData, setFreteData] = useState(null); // Initialize with null
    const [cepData, setCepData] = useState(null); // Initialize with null
    // Estado para controlar a exibição do input do CEP
    const [showCepInput, setShowCepInput] = useState(true);

    const schema = Yup.object().shape({
        cep: Yup.string().required('Digite o CEP'),
    });

    const { register, handleSubmit, setValue, control, formState: { errors }, watch } = useForm({ resolver: yupResolver(schema) });

    async function checkCEP(formData) {
        try {
            const response = await api.get(`https://viacep.com.br/ws/${formData.cep}/json/`);
            const data = response.data;
            /*  console.log(data); */
            setValue("address", data.logradouro || "");
            setValue("neighborhood", data.bairro || "");
            setValue("city", data.localidade || "");
            setValue("uf", data.uf || "");
            // Definir o estado para exibir os outros inputs após obter os dados da API
            setShowCepInput(false);

            // Armazenar os dados do CEP em cepData
            setCepData({
                cep: formData.cep,
                address: data.logradouro || "",
                neighborhood: data.bairro || "",
                city: data.localidade || "",
                uf: data.uf || "",
                freteData: null, // Inicialmente, os dados do frete estão nulos
            });

            // Buscar os dados do frete com o mesmo CEP
            getFreteData(formData.cep);
        } catch (error) {
            console.error('Error fetching CEP data:', error);
            // Se ocorrer um erro, manter o estado como verdadeiro para manter o input do CEP visível
            setShowCepInput(true);
        }
    }

    // Função para buscar os dados do frete a partir do CEP
    async function getFreteData(cep) {
        try {
            const response = await api.post('/frete', {
                type: 'calculateFreight',
                sCepDestino: cep,
            });
            const data = response.data;
            /*   console.log(data); */

            // Atualizar os dados do frete em cepData
            setCepData(prevCepData => ({
                ...prevCepData,
                freteData: data,
            }));

            setFreteData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Função de callback para lidar com os dados do formulário após o envio
    const onSubmit = (formData) => {
        // Aqui você pode acessar os dados preenchidos nos campos do formulário
        /*  console.log(formData); */

        // Você pode acessar todos os dados (CEP e frete) através do estado cepData
        console.log(cepData);

        // Agora você pode fazer o que desejar com os dados aqui, como enviar para o servidor, etc.
        // Por exemplo, enviar para o servidor:
        // await api.post('/submitForm', cepData);
    };

    return (
        <Container>
            <h1>Endereço De Entrega</h1>
            <h3>Informe o endereço onde deseja receber o seu pedido</h3>
            <ConatinerCep>
                <form onSubmit={handleSubmit((data) => {
                    // Chame a função checkCEP passando os dados do formulário
                    checkCEP(data);
                    // Chame a função de callback para lidar com os dados preenchidos do formulário
                    onSubmit(data);
                })}>
                    <div>
                        <RoomIcon className="room-icon" />
                        <Input className="inputCep" placeholder="Digite o seu CEP"
                            type="text"
                            {...register("cep")}
                            onBlur={handleSubmit(checkCEP)}
                        />

                    </div>
                    {!showCepInput && (
                        <>
                            <input className="inputRua" type="text" placeholder="Rua" {...register("address")} />

                            <input className="Number" placeholder="Número" type="text" {...register("Number")} />
                            <>
                                {errors.Number && <Error>{errors.Number.message}</Error>}
                                {!errors.Number && !watch("Number") && <Error>{"Digite o número da residência"}</Error>}
                            </>

                            <input className="neighborhood" type="text" placeholder="Bairro" {...register("neighborhood")} />

                            <input className="city" type="text" placeholder="Cidade" {...register("city")} />

                            <input className="uf" type="text" placeholder="uf" {...register("uf")} />

                        </>
                    )}
                    <button type="submit">Consultar CEP</button>
                    {!showCepInput && (
                        <h6>O prazo de entrega inicia-se após a confirmação do pagamento.</h6>
                    )}
                </form>

                <ConatinerFrete>
                    {cepData && (
                        <div className="Result">
                            <img src={IconDelivery} alt="Entrega" />
                            <h5>Prazo de entrega:</h5>
                            <span>até {cepData.freteData ? cepData.freteData[0].PrazoEntrega : "Aguardando consulta"} dias úteis*</span> 
                            <h3>FRETE: R$ {cepData.freteData ? cepData.freteData[0].Valor : "Aguardando consulta"}</h3>
                        </div>
                    )}
                </ConatinerFrete>
            </ConatinerCep>
        </Container>
    );
}

export default CheckCep;
