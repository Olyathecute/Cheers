import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LightColor, DarkColor } from '../../globalStyles'

export const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background: transparent;
  color: ${LightColor};
  font-family: 'Cormorant Garamond', serif;

  @media screen and (max-width: 600px) {
    background: url('https://liga-kamnya.ru/media/djcatalog2/images/item/2/imperador-dark-ekstra_f.jpg') no-repeat;
    background-size: cover;
    height: 15%;
    justify-content: center;
  }
`

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: ${({ mobile }) => (mobile ? 'flex' : 'none')};
  }
`
