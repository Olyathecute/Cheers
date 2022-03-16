import styled from 'styled-components'
import { LightColor, DarkColor } from '../../globalStyles'

export const ButtonSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ButtonItem = styled.div`
  padding: ${({ footer }) => (footer ? '10px 10px' : '0 10px')};
`

export const ButtonCell = styled.button`
  color: ${({ footer }) => (footer ? DarkColor : LightColor)};
  font-family: 'Cormorant Garamond', serif;
  background: none;
  border: 3px solid ${({ footer }) => (footer ? DarkColor : LightColor)};
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 2rem;
  transition-duration: 0.2s;

  position: relative;

  &:hover {
    color: ${({ footer }) => (footer ? LightColor : DarkColor)};
    background: ${({ footer }) => (footer ? DarkColor : LightColor)};
    border: 3px solid ${({ footer }) => (footer ? DarkColor : LightColor)};
  }
`

export const TelLink = styled.a`
  text-decoration: none;
`
