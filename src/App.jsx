import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ImageCripto from './img/imagen-criptos.png'
import Form from './components/Form'
import Info from './components/Info'


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
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})

  useEffect(() =>{
    if( Object.keys(monedas).length > 0 ) {
      const cotizarCripto = async () =>{
        const { criptos, moneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptos}&tsyms=${moneda}`
        const response = await fetch(url).then(state => state.json()).catch( error => console.log(error))
        setResultado(response.DISPLAY[criptos][moneda] )
      }
      cotizarCripto()
      
    }
  }, [ monedas ])


  return (
    <Container>
        <Img 
          src={ImageCripto}
          atl='image cipto'
        />
        <div>
          <Heading>Cotiza criptomonedas al instante</Heading>
          <Form 
            setMonedas={setMonedas}
          />
          {Object.keys(resultado).length > 0 && <Info info={resultado} />  }
        </div>
    </Container>
      
  )
}

export default App
