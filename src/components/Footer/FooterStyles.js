import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DarkColor, FontParagraph } from '../../globalStyles'

export const FooterWrapper = styled.div`
  background-image: url('https://img5.goodfon.ru/wallpaper/nbig/7/20/fon-kamen-tsvet-razvody-tekstura-piatna-bezhevyi-kamennyi-vk.jpg');
  background-size: cover;
  font-family: ${FontParagraph};
  padding: 1rem;
  align-items: center;
`

export const FooterSection = styled.section`
  width: 80vw;
  margin: 0 auto;
  text-align: center;
  padding-top: 2rem;
  font-size: 1.5rem;
  color: ${DarkColor};
`
export const FooterButton = styled.section`
  display: none;

  @media screen and (max-width: 600px) {
    width: 80vw;
    margin: 0 auto;
    padding-top: 2rem;
    display: block;
  }
`

export const FooterBlock = styled.div`
  border: 3px solid ${DarkColor};
  border-radius: 4px;

  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
`

export const BigBox = styled.ul`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const SmallBox = styled.div`
  flex: 1 1 50%;
  padding: 1rem 2rem;

  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FooterItemLi = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  cursor: pointer;
  font-size: 2.5rem;
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
  font-size: 1.5rem;
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
