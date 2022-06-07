import { useState } from 'react'
import styled from 'styled-components'
import ImageCripto from './img/imagen-criptos.png'
import Form from './components/Form'


const Container = styled.div`
  max-width: 900px;
  width: 90%;
  min-width: 320px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Heading = styled.h1`
 font-family: 'Lato', sans-serif;
 color: white;
 text-align: center;
 font-weight: 700;
 margin-top: 80px;
 margin-bottom: 50px;

 &::after{
   content: '';
   width: 100px;
   height: 6px;
   background-color: #66A2FE;
   display: block;
   margin: 10px auto 0px auto;
   border-radius: 10px
 }
`
const Img = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0px auto;
  display: block;
`



function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
        <Img 
          src={ImageCripto}
          atl='image cipto'
        />
        <div>
          <Heading>Cotiza criptomonedas al instante</Heading>
          <Form />
        </div>
    </Container>
      
  )
}

export default App
