import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DarkColor, FonColor, GreenColor, FontParagraph } from '../../../globalStyles'

export const MenuWrapper = styled.div`
  background-color: ${FonColor};
  width: 100vw;
  height: 100vh;
  padding-top: 150px;
  text-align: center;
`

export const MenuText = styled.h2`
  color: ${DarkColor};
  font-family: ${FontParagraph};
`

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${DarkColor};

  &:hover {
    color: ${GreenColor};
  }
`
