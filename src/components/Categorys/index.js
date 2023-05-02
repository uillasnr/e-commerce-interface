import React, { useEffect, useState } from 'react'

import api from '../../services/api'
import { Container, ContainerItems, Image, Button } from './styles'






export function Category() {
  const [categories, setCategories] = useState([])
  const [marginTop, setMarginTop] = useState(90);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])




  //scroll Header 
  function handleScroll() {
    if (window.pageYOffset > -50) {
      setMarginTop(45);
    } else {
      setMarginTop(90);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 


  return (
    <Container style={{ marginTop: `${marginTop}px` }}>
      {categories &&
        categories.map(category => (
          <ContainerItems key={category.id}>
            <Image src={category.url} alt="foto da categoria" />

            <Button 
              to={{
                pathname: '/produtos',
                state: { categoryId: category.id }
              }}
            >
              {category.name}
            </Button>
          </ContainerItems>
        ))}

    </Container>
  )
}

export default Category