
import { createGlobalStyle } from "styled-components"

import 'react-toastify/dist/ReactToastify.css';

const globalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    outline: none;
    
}

@media screen and (max-width: 445px) {
     //Estilos para telas com largura máxima de 768px (versão mobile) */
   body {
       -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}

body::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
}
}
`
export default globalStyle