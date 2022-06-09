import { useState } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 2.4rem;
  font-weight: 700;
  margin: 15px 0;
`

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`


const useSelectMonedas = (label, moneda) => {

  const [ state, setState ] = useState('')

  const selectMonedas = () => (
      <>
        <Label>{label}</Label>
        <Select
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value=''>-Seleccione una moneda-</option>
          {moneda.map((item, index) => (
            <option
              key={item.id}
              value={item.id}
            >
              {item.name}
            </option>
          ))}

        </Select>
      </>
  )

  return [
    state,
    selectMonedas
  ]
}

export default useSelectMonedas
