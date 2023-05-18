import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 95vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 660px;
  height: 400px;

  display: flex;
  align-items: center;
`
export const RegisterImg = styled.img`
  width: 330px;
  height: 100%;
  flex-shrink: 0;
`

export const Form = styled.form`
  width: 330px;
  height: 100%;

  flex-shrink: 0;
`

export const FormHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
`
export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  color: #475569;

  margin-bottom: 5px;
`

export const InputEl = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid #cbd5e1;

  outline: none;

  padding: 8px;
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
`

export const DropDown = styled.select`
  width: 300px;
  height: 40px;
  border: 1px solid #cbd5e1;

  outline: none;

  padding: 8px;
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
`

export const Option = styled.option``

export const RegisterButton = styled.button`
  width: 120px;
  height: 35px;

  border-width: 0px;
  border-radius: 8px;

  background-color: #3b82f6;

  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;

  cursor: pointer;
  outline: none;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 11px;
  color: #ff0b37;
  font-weight: 500;
`
