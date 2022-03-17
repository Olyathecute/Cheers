import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LightColor, GreenColor } from '../../globalStyles'

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    width: 100vw;
    flex-direction: row-reverse;
    padding: 0 10px;
  }
`

export const NavSection = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`

export const NavLogo = styled(Link)`
  font-family: 'Qwitcher Grypen', cursive;
  color: ${LightColor};
  font-size: 5rem;
  text-decoration: none;
  z-index: 1;
`

export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 1;
`

export const NavMenu = styled.ul`
  background-color: ${GreenColor};
  height: 100vh;
  width: 100vw;
  padding-top: 15%;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  list-style: none;
  flex-direction: column;

  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: 0.5s;

  @media screen and (max-width: 600px) {
    padding-top: 30%;
  }
`

export const NavItem = styled.li`
  font-size: 3rem;
  cursor: pointer;
`

export const NavLinks = styled(Link)`
  color: ${LightColor};
  text-decoration: none;
  display: table;
  text-align: center;
  padding: 2rem;

  &:hover {
    text-shadow: 0.5px 0.5px 2px #e4d6c9;
  }
`
