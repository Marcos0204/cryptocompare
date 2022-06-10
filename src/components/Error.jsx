import styled from "styled-components"


const Message = styled.p`
    background-color: #B7322c;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    text-align: center;
`


const Error = ({children}) => {
  return (
    <Message>
      {children}
    </Message>
  )
}

export default Error
