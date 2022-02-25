import styled from 'styled-components'

export const Container = styled.button`
  width: 130px;
  height: 42px;
  border: 1px solid #17A4D0
  radius: 100px;
  color: 1E255E;
  font-size: 14px;
  margin-left: 25px;
  border-radius: 100px;
  
  background: #17A4D0;
  cursor: pointer;
  box-shadow: 0px 0px 10px -1px transparent;
  transition: all 0.16s ease-out;

  &:hover {
    color: #FFFFFF;
    background: #3C4EF3;
    box-shadow: 0px 0px 10px -1px #000;
  }
`
