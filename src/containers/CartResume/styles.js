import styled from "styled-components";


export const Container = styled.div`
background: #222222;
min-height: calc(100vh - 72px);

`

export const Wrapper = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 90px;
padding-bottom: 30px;

@media  (max-width: 826px) {
    display:grid;
    margin-top: 90px;
    padding-bottom: 30px;
}

`
