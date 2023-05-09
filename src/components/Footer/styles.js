import styled from "styled-components";

export const Container = styled.div`
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgb(102 102 102);
  border: 0.5px solid rgb(213, 213, 213);
}

.footer-section {
  margin-right: 50px;
}

.footer-section h4 {
  margin-bottom: 10px;
  font-size: 18px;
  color: #44d62c;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 5px;
}

.footer-section a {
  text-decoration: none;
  color: #fff;
}

.footer-section a:hover {
  text-decoration: underline;
}
@media (max-width: 600px){
    .footer {
     display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    }
    .footer-section {
     margin-right: 0px; 
}
}
@media (max-width: 500px){
    .footer {
        display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
    text-align: center;
    }
}
`