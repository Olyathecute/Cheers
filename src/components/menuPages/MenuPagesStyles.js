import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LightColor, DarkColor, FonColor, GreenColor } from '../../globalStyles'

export const MenuWrapper = styled.div`
  background-color: ${FonColor};
  width: 100vw;
  height: 60vh;
  padding-top: 150px;
  text-align: center;
`

export const MenuText = styled.h2`
  color: ${DarkColor};
  font-family: 'Cormorant Garamond', serif;
`

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${DarkColor};

  &:hover {
    color: ${GreenColor};
  }
`
