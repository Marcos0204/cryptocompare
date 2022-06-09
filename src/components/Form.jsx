import React from 'react'
import styled from 'styled-components'


import useSelectMonedas from '../hooks/useSelectMonedas'



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

const Form = () => {

    const moneda= [
        { id: "USD", name:'Dolar de estados unidos'},
        { id: "MXN", name:'Peso mexicano'},
        { id: "UER", name:'Euro'},
        { id: "GBP", name:'Libre esterlina'},
    ]
    const [ state, SelectMonedas ] = useSelectMonedas('Elige tu moneda', moneda)
    console.log(state)
    
    return (
        <form>

            <SelectMonedas />

            <InputSubmit
                type='submit'
                value='Cotizar'
            />
        </form>
    )
}

export default Form
