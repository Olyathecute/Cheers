import styled from 'styled-components'
import { GreenColor, DarkColor, FonColor, PlateRight, LightColor, FontText } from '../../globalStyles'

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ResBlock = styled.div`
  background-color: ${GreenColor};
  padding: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
`
export const ResText = styled.label`
  margin: 5px;
  font-size: 1.5rem;
  color: ${LightColor};
  font-family: ${FontText};
`

export const ResInput = styled.input`
  margin: 10px;
  padding: 5px;
  font-size: 1.5rem;
  color: ${GreenColor};
  font-family: ${FontText};
`
export const ResButton = styled.button`
  padding: 10px;
  background-color: ${LightColor};
  color: ${GreenColor};
  font-family: ${FontText};
  border: 3px solid ${GreenColor};
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
  margin: 10px;

  font-size: 1.5rem;

  &:hover {
    box-shadow: inset 1px 1px 5px ${DarkColor};
  }
`
