import { theme } from '../../../styles/Theme'
import styled from 'styled-components'

const Contacts = styled.section`
  position: relative;
`

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`

const Field = styled.input<{ errorMessage: boolean }>`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${props => (props.errorMessage ? 'red' : theme.colors.borderColor)};
  padding: 7px 15px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: ${theme.colors.font};

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${theme.colors.font}; /* Цвет текста */
    background-color: ${theme.colors.secondaryBg}; /* Цвет фона */
`

const ErrorMessage = styled.p`
  width: 100%;
  text-align: start;
  color: red;
`

export const S = {
  Contacts,
  Form,
  Field,
  ErrorMessage,
}
