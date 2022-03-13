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
`

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderItem = styled.div`
  padding: 0 10px;
`
export const TelLink = styled.a`
  text-decoration: none;
  color: ${(props) => (props.light ? LightColor : DarkColor)};

  &:active,
  :hover {
    color: ${(props) => (props.light ? DarkColor : LightColor)};
  }

  &:visited {
    color: ${(props) => (props.light ? LightColor : DarkColor)};
  }
`
