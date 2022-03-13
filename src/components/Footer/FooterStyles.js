import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LightColor, DarkColor } from '../../globalStyles'

export const FooterWrapper = styled.div`
  background-image: url('https://img5.goodfon.ru/wallpaper/nbig/7/20/fon-kamen-tsvet-razvody-tekstura-piatna-bezhevyi-kamennyi-vk.jpg');
  background-size: cover;
  height: 65vh;
  font-family: 'Cormorant Garamond', serif;
`

export const FooterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 0 0;
  font-size: 1.5rem;
  color: ${DarkColor};
`

export const FooterBlock = styled.div`
  border: 3px solid ${DarkColor};
  border-radius: 4px;
  padding: 1rem;
`

export const FooterGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

export const GridBigBox = styled.ul`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  justify-content: space-around;
`

export const GridSmallBox = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  padding: 0 2rem;
  display: ${({ display }) => (display ? 'flex' : 'block')};
  text-align: center;
  align-items: ${({ display }) => (display ? 'center' : '')};
`

export const FooterItemLi = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  cursor: pointer;
  font-size: 2.2rem;
`

export const FooterLinks = styled(Link)`
  color: ${DarkColor};
  text-decoration: none;
  padding: 1rem 2rem;
  &:hover {
    text-shadow: 0.5px 0.5px 1px black;
  }
`

export const FooterItem = styled.div`
  display: ${({ block }) => (block ? 'block' : 'inline')};
  font-size: 1.7rem;
  padding: 1rem;
`

export const FooterLink = styled.a`
  text-decoration: none;
  color: ${DarkColor};

  &:active,
  :hover {
    text-shadow: 0.5px 0.5px 1px black;
    opacity: ${({ icon }) => (icon ? 0.6 : 1)};
  }
`
