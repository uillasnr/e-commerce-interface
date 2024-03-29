import styled from "styled-components";


export const Container = styled.div`
display: block;

h1{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    margin-top: -10px;
}
`
export const Label = styled.p`
font-size: 14px;
margin-bottom: 3px;
`
export const Input = styled.input`
width: 100%;
 height: 38px;
 box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
 border-radius: 5px;
 border: none;
 padding-left: 10px;
 margin-bottom: 30px;
`
export const LabelUpload = styled.label`
cursor: pointer;
display: flex;
align-items: center;
border: 1px dashed #fff;
border-radius: 5px;
padding: 10px;
margin-bottom: 30px;
height: 65px;
background: #36E73D;
justify-content: center;
gap: 10px;

input{
    opacity: 0;
    width: 1px;
}

`
export const LabelOptions = styled.label`

display: flex;
align-items: center;
justify-content: center;
margin: 10px;


`
export const LabelUploadOptions = styled.label`
display: flex;
    gap: 10px;
    width: 315px;
    height: 110px;


.image-preview {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    background: #36E73D;
    justify-content: center;
    width: 100px;
    height: 100px;
}

.fileUpload2{
    cursor: pointer;
    width: 75px;
    height: 100px;
    opacity: 0;
 }
.fileUpload3{
    cursor: pointer;
    width: 75px;
    height: 100px;
    opacity: 0;
}
.fileUpload4 {
    cursor: pointer;
    width: 75px;
    height: 100px;
    opacity: 0;
} 

img {
    width: 85px;
    height: auto;
    border: 3px dashed #464646;
}
 
`

export const ContainerItems = styled.div`
display: flex;
    gap: 50px;
    margin: 49px 90px 0 90px;
`
export const CardImg = styled.div`
  
  background: #464646;
    border-radius: 10.6557px;
    width: 200px;
    height: 290px;


img{
    width: 100px;
}
   
 h6{
    position: absolute;
    left: 160px;
    font-size: 15px;
    margin-top: 15px;
    color: #FFFFFF;
 }


div{
    display: flex;
    justify-content: center;
    margin: 20px;
}
h2{
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    line-height: 17px;
    margin: 10px;
    color: rgb(255, 255, 255);
}

h3{
    font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 13px;
text-align: center;
margin: 15px;
color: #FFFFFF;
}
p{
    font-size: 20px;
    color: #44D62C;
    font-weight: 800;
    text-align: center;
}
form{
    width: 183px;
    position: absolute;
    top: 434px;
    left: 367px;
}
label{
    margin: 10px;
}
input{
    width: 15px;
    height: 15px;
    cursor: pointer;
    color: #36E73D;
    margin-bottom: 10px;
}

`
export const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    margin-top: 50px;

    textarea{
        width: 80%;
        height: 150px;
        box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
 border-radius: 5px;
 border: none;
 padding: 15px;
    }
`
