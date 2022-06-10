import styled from "styled-components"


const Container =  styled.div`
color:#fff;

margin-top: 20px;

display: flex;
flex-direction: column;

`

const Paragraph =  styled.div`
font-family: 'Lato', sans-serif;
padding: 10px;

font-size: 15px;
span {
    font-weight: bold;
    color: green;
}

`

const Price =  styled.div`
font-family: 'Lato', sans-serif;
font-size: 2rem;
span {
    font-weight: 700;
}

`
const Img = styled.img`
max-width: 100px;
text-align: center;
justify-items: center;
`



const Info = ({info}) => {
    const { PRICE, LOWDAY, HIGHDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE  } = info
  
  return (
    <Container>
        <Img src={`https://www.cryptocompare.com/${IMAGEURL}`}  alt='image url'/>
       <Price>El precio es de: <span>{PRICE}</span> </Price>
       <Paragraph>El precio mas alto del dia: <span>{HIGHDAY}</span> </Paragraph>
       <Paragraph>El precio mas bajo del dia: <span>{LOWDAY}</span></Paragraph>
       <Paragraph>Variacion ultimas 2 Horas: <span>{CHANGEPCT24HOUR}</span> </Paragraph>
       <Paragraph>ultima actualizacion: <span>{LASTUPDATE}</span> </Paragraph>
    </Container>
  )
}

export default Info
