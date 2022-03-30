import styled from 'styled-components'
import { LightColor, DarkColor, FontParagraph } from '../../globalStyles'

export const ButtonSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const HeaderButtonItem = styled.div`
  padding: 0px 10px;
`
export const FooterButtonItem = styled.div`
  padding: 10px 10px;
`

const AbstractButtonCell = styled.button`
  color: ${({ main }) => main};
  font-family: ${FontParagraph};
  background: none;
  border: 3px solid ${({ main }) => main};
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 2rem;
  transition-duration: 0.2s;
  position: relative;

  &:hover {
    color: ${({ second }) => second};
    background: ${({ main }) => main};
    border: 3px solid ${({ main }) => main};
  }
`

export const HeaderButtonCell = styled(AbstractButtonCell).attrs({ main: LightColor, second: DarkColor })``
export const FooterButtonCell = styled(AbstractButtonCell).attrs({ main: DarkColor, second: LightColor })``

export const TelLink = styled.a`
  text-decoration: none;
`
