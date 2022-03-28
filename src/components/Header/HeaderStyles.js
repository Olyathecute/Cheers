import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LightColor, DarkColor, GreenColor } from '../../globalStyles'

export const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${({ isVisibleFon }) => (isVisibleFon ? GreenColor : 'transparent')};
  color: ${LightColor};
  font-family: 'Cormorant Garamond', serif;

  transition: 0.5s;

  @media screen and (max-width: 600px) {
    background-color: ${GreenColor};
    height: 10%;
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
