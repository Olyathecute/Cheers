import styled from 'styled-components'
import { SectionPic, SectionMini, FontParagraph } from '../../globalStyles'
import { cssGrid } from '../../utils'
import { LightColor, DarkColor, GreenColor, FonColor } from '../../globalStyles'

export const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 10vh;
`

export const Hero = styled(SectionPic)`
  ${cssGrid(1, 13, 1, 11)}
`

export const Background = styled.div`
  background-color: ${FonColor};
  ${cssGrid(1, 13, 11, 15)}
`

export const Note = styled(SectionMini)`
  ${cssGrid(1, 11, 9, 12)}
  padding: 1.5rem;
  text-align: justify;

  @media screen and (max-width: 600px) {
    ${cssGrid(1, 13, 9, 12)}
  }
  @media screen and (max-width: 450px) {
    ${cssGrid(1, 13, 9, 13)}
  }
  @media screen and (max-width: 335px) {
    ${cssGrid(1, 13, 9, 14)}
  }
  @media screen and (max-width: 235px) {
    ${cssGrid(1, 13, 9, 15)}
  }
`

export const Rectangle = styled.div`
  background-color: ${GreenColor};
  ${cssGrid(4, 13, 10, 15)};

  @media screen and (max-width: 600px) {
    ${cssGrid(1, 13, 12, 14)}
  }
  @media screen and (max-width: 450px) {
    ${cssGrid(1, 13, 13, 15)}
  }
  @media screen and (max-width: 335px) {
    ${cssGrid(1, 13, 14, 16)}
  }
  @media screen and (max-width: 235px) {
    ${cssGrid(1, 13, 15, 17)}
  }
`

export const Caption1 = styled.h1`
  ${cssGrid(2, 11, 4, 9)};
  color: ${GreenColor};
  font-family: ${FontParagraph};
  font-size: 7rem;
  text-shadow: 5px 5px 8px ${LightColor};

  @media screen and (max-width: 1005px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 675px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 430px) {
    font-size: 3rem;
  }
`
export const Caption2 = styled.h1`
  ${cssGrid(2, 13, 3, '')};
  color: ${DarkColor};
  font-family: ${FontParagraph};
  font-size: 3rem;
  text-shadow: 1px 1px 2px ${LightColor};

  @media screen and (max-width: 1000px) {
    font-size: 1.5rem;
    margin-top: 30px;
  }
`

export const Caption3 = styled.span`
  color: ${LightColor};
  font-family: ${FontParagraph};
  font-size: 4rem;
  padding: 3%;
  display: flex;
  align-items: flex-end;
  height: 100%;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`
export const CaptionMenu = styled.h1`
  ${cssGrid(1, 13, 15, '')};
  color: ${DarkColor};
  opacity: 0.4;
  font-family: ${FontParagraph};
  font-size: 12rem;
  margin: 10px;
  display: block;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: 5rem;
  }
`
