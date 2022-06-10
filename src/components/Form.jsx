import { useEffect, useState } from 'react'
import styled from 'styled-components'


import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error'



const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 24px;
    border-radius: 15px;
    transition: all .3s  ease;
    margin-top: 30px;
    cursor: pointer;
    &:hover{
        background-color:#7A7DFE;
    }
`

const monedas= [
    { id: "USD", name:'Dolar de estados unidos'},
    { id: "MXN", name:'Peso mexicano'},
    { id: "UER", name:'Euro'},
    { id: "GBP", name:'Libre esterlina'},
]
const Form = () => {

    const [ coins, setCoins] = useState([])
    const [ error, setError] = useState(false)
    
    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas)
    const [ criptos, SelectMonedasCriptos ] = useSelectMonedas('Elige tu Criptomoneda', coins)

    

    useEffect(() =>{
        const getApi = async () =>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const res = await fetch(url).then(state => {
                const Data = state.json()
                return Data
            }) 
            //const resJson = await response.json()
            const array = res.Data.map( cripto => {
                const { CoinInfo : { Name, FullName } } = cripto;
                return {
                    id: Name,
                    name: FullName
                }
            });

            setCoins([...array])

        }
        getApi();
    },[])

    const handleSubmit = e =>{
        e.preventDefault();
        if([ moneda, criptos ].includes('') ) {

            console.log('ERROR');
            setError(true)
            return;
        }
        console.log('todo bien')
        setError(false)
    }
    
    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error> }
            <form
                onSubmit={handleSubmit}
            >

                <SelectMonedas />
                <SelectMonedasCriptos />

                <InputSubmit
                    type='submit'
                    value='Cotizar'
                />
            </form>
        </>
    )
}

export default Form
