import React, { useEffect, useState } from 'react';
import api from "../../services/api";
import Person from "../../assets/user.png"
import formatDate from '../../utils/formatDate'
import { Container, Card, ContainerRating, ContainerItems } from './styles'



const ProductRating = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [userId, setUserId] = useState('');
  const [comments, setComments] = useState([]);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserId(event.target.value);
  };

  useEffect(() => {
    const fetchProductRatings = async () => {
      try {
        const response = await api.get(`/products/${productId}/ratings`);
        setComments(response.data);
       
      } catch (error) {
        console.error(error);
      }
    }
    fetchProductRatings();
  }, [productId]);

  const handleRatingSubmit = async (event) => {
    event.preventDefault(); // Evita o comportamento padrão de envio de formulário

    try {
      // Envia a avaliação para a API
      const response = await api.post(`/products/${productId}/rate`, {
        rating,
        comment,
        userId, // Define um nome padrão se o nome de usuário estiver vazio
      });

      // Atualiza o estado dos campos para valores vazios após o envio bem-sucedido
      setRating(0);
      setComment('');
      setUserId('');

      // Adiciona a nova avaliação ao estado comments
      setComments((prevComments) => [...prevComments, response.data]);

    } catch (error) {
      console.error(error);
    }
  };


  // Função para renderizar as estrelas do CARD com base na avaliação
  const renderStars = (rating) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      const starColor = i <= rating ? '#44d62c' : '#fff';

      stars.push(
        <span
          key={i}
          style={{ color: starColor }}
        >
          ★
        </span>
      );
    }

    return stars;
  };

  // Calcula o número total de avaliações (comentários)
  const totalRatings = comments.length;

  // Calcula a nota média considerando os valores de cada nota
  const averageRatingWithValues = comments.reduce(
    (sum, comment) => sum + comment.rating,
    0
  ) / totalRatings;
  //Avaliação geral Arredonda para uma casa decimal
  const roundedAverageRating = isNaN(averageRatingWithValues) ? 0 : averageRatingWithValues.toFixed(1);


  return (
    <ContainerItems>
      <h1>Comentários dos clientes sobre este produto</h1>
      <h2>Avaliação geral: {roundedAverageRating}</h2>
      <strong>Total de avaliações: {totalRatings}</strong>

      <div className='star'>
        {[1, 2, 3, 4, 5].map((value) => (
          <span key={value} style={{
            color: value <= roundedAverageRating ? '#44d62c' : '#fff',
          }}>★</span>
        ))}
      </div>

      <line />

      <Container>
        <ContainerRating>
          {comments.length === 0 ? (
            <div className='rateOff'>
              <h2>Avalie este produto</h2>
              <p>Seja o primeiro a avaliar este produto!</p>
            </div>
          ) : (
            // Renderização de avaliações
            <div>
              {comments.map((comment) => (
                <Card key={comment.id}>
                  <div className='ContentText'>
                    <img src={Person} alt="Person" />
                    <div className='text'>
                      {renderStars(comment.rating)}
                      <h3>{comment.userId}</h3>
                      <p>{comment.comment}</p>
                    </div>
                  </div>
                  <div className='date'>
                    <h6>Avaliado {formatDate(comment.createdAt)}</h6>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </ContainerRating>

        <form onSubmit={handleRatingSubmit}>
          <h2>Dê uma nota para o produto</h2>

          <div className='star'> {[1, 2, 3, 4, 5].map((value) => (
            <span key={value} onClick={() => handleRatingChange(value)}
              style={{ cursor: 'pointer', color: value <= rating ? '#44d62c' : '#fff' }}
            >★</span>
          ))}
          </div>

          <div className='Nota'>Nota: {rating}</div>

          <input type="text" placeholder='Escolher seu nome público' value={userId} onChange={handleUserNameChange} />
          <textarea placeholder='Escreva um comentário sobre este produto' value={comment} onChange={handleCommentChange} />

          <button type="submit">Enviar avaliação</button>
        </form>
      </Container>
    </ContainerItems>
  );
};

export default ProductRating;
