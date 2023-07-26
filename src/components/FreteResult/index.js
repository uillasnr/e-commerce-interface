import React, { useState } from "react";
import { Container } from './styles'
import api from '../../services/api'
import RoomIcon from '@mui/icons-material/PinDrop';

function FreteResult() {
    const [sCepDestino, setSCepDestino] = useState('');
    const [freteData, setFreteData] = useState(null); // Initialize with null

    async function handleCalcFrete(e, type) {
        e.preventDefault();

        try {
            const response = await api.post('/frete', {
                type,
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
            <form onSubmit={(e) => handleCalcFrete(e, 'calculateFreight')}>

                <div class="input-wrapper">
                    <RoomIcon className="room-icon" />
                    <input type="text"
                        placeholder="Informe seu CEP" value={sCepDestino} onChange={(e) => setSCepDestino(e.target.value)} />
                    <button type="submit">OK</button>
                </div>
            </form>


            {freteData && (
                <div className="Result">
                    <p>receba em até</p>
                    <span>{freteData[0].PrazoEntrega} dias úteis*</span>
                    <h6>R$ {freteData[0].Valor}</h6>
                </div>
            )}
        </Container>
    );
}

export default FreteResult;


/* freteData && freteData[0] && (
    <div className="Result">
        <p>receba em até</p>
        <span>{freteData[0].PrazoEntrega} dias úteis*</span>
        <h6>R$ {freteData[0].Valor}</h6>
    </div> */