import styled from 'styled-components'
import { Animation } from '../../utils'
import { LightColor, FonColor, FontParagraph, DarkColor } from '../../globalStyles'

export const MenuWrapper = styled.div`
  background-color: ${FonColor};
  padding-bottom: 1rem;
`

export const MenuSectionWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-wrap: wrap;

  @media screen and (max-width: 850px) {
  }
`

export const MenuSection = styled.div`
  width: 280px;
  height: 500px;
  position: relative;

  @keyframes move_1 {
    80% {
      transform: translateY(-20%);
    }
  }
  @keyframes move_2 {
    30% {
      transform: translateY(-20%);
    }
  }
  @keyframes move_3 {
    70% {
      transform: translateY(-15%);
    }
  }

  animation: ${({ move }) => Animation(move)};

  @media screen and (max-width: 850px) {
    animation: none;
    padding: 1rem;
  }

  @media screen and (max-width: 850px) {
    width: 200px;
    height: 200px;
  }
`
export const MenuPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(65%);
  cursor: pointer;
  transition: 0.7s;

  &:hover,
  :active {
    filter: brightness(100%);
  }
`

export const MenuTitle = styled.span`
  font-family: ${FontParagraph};
  font-size: 3rem;
  color: ${LightColor};
  position: absolute;
  left: 10%;
  bottom: 2%;
  z-index: 5;

  @media screen and (max-width: 850px) {
    position: absolute;
    left: 10%;
    bottom: 10%;
  }
`

export const MenuCaption = styled.h1`
  font-family: ${FontParagraph};
  font-size: 15vw;
  color: ${DarkColor};
  opacity: 0.5;
  display: block;
  width: 100%;
  text-align: center;
`
