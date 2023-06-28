import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container, ContainerItems, Image, Button } from './styles';

function Category() {
  const [categories, setCategories] = useState([]);
  const [marginTop, setMarginTop] = useState(90);
  const [hideImage, setHideImage] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');
      setCategories(data);
    }

    loadCategories();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 48) {
        setHideImage(true);
      } else {
        setHideImage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container style={{ marginTop: `${marginTop}px` }}>
      {categories &&
        categories.map((category) => (
          <ContainerItems key={category.id}>
            {!hideImage && (
              <Image
                src={category.url}
                alt="foto da categoria"
              />
            )}

            <Button
              to={{
                pathname: '/produtos',
                state: { categoryId: category.id },
              }}
            >
              {category.name}
            </Button>
          </ContainerItems>
        ))}
    </Container>
  );
}

export default Category;
