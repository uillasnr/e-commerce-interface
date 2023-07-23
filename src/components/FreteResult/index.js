import React, { useState } from "react";
import { Container, ConatinerCep } from './styles'
import api from '../../services/api'
import formatCurrency from '../../utils/formarCurrency'
import RoomIcon from '@mui/icons-material/Room';
import Person from "../../assets/user.png"
function FreteResult() {
    const [cep, setCep] = useState('');
    const [sCepDestino, setSCepDestino] = useState('');
    const [freteData, setFreteData] = useState(null); // Initialize with null

    async function handleCalcFrete(e, type) {
        e.preventDefault();

        try {
            const response = await api.post('/frete', {
                type,
                cep,
                sCepDestino,
            });
            const data = response.data;
            console.log(data);
            setFreteData(data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <Container>
            <ConatinerCep>
                <form onSubmit={(e) => handleCalcFrete(e, 'CEP')}>
                    <label>
                        CEP:
                        <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
                    </label>

                    {/* Display CEP Data */}
                    {cep && (
                        <div>
                            <p>Bairro: {cep.bairro}</p>
                            <p>Complemento: {cep.complemento}</p>
                            <p>DDD: {cep.ddd}</p>
                            <p>GIA: {cep.gia}</p>
                            <p>IBGE: {cep.ibge}</p>
                            <p>Localidade: {cep.localidade}</p>
                            <p>Logradouro: {cep.logradouro}</p>
                            <p>SIAFI: {cep.siafi}</p>
                            <p>UF: {cep.uf}</p>
                        </div>
                    )}
                    <button type="submit">Consultar CEP</button>
                </form>
            </ConatinerCep>


            <form onSubmit={(e) => handleCalcFrete(e, 'calculateFreight')}>

                <RoomIcon style={{color: "rgb(54, 231, 61)"}} />
                <input type="text"
                    placeholder="Informe seu CEP" value={sCepDestino} onChange={(e) => setSCepDestino(e.target.value)} />

                <button type="submit">OK</button>



            </form>

            {/* Display Frete Data */}
            {freteData && ( // Check if freteData is not null before accessing its properties
                <div>
                    <p>receba em até</p>
                    <span>{freteData[0].PrazoEntrega} dias úteis*</span>
                    <h6>R$ {freteData[0].Valor}</h6>
                </div>
            )}
        </Container>
    );
}

export default FreteResult;
