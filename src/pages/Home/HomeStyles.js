import styled from 'styled-components'
import { SectionBack, SectionPic, SectionMini, Plate, PlateRight } from '../../globalStyles'
import { cssGrid } from '../../utils'
import { LightColor, DarkColor } from '../../globalStyles'

export const HoweWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 10vh;
`

export const Hero = styled(SectionPic)`
  ${cssGrid(1, 13, 1, 11)}
`

export const Background = styled(SectionBack)`
  ${cssGrid(1, 13, 11, 21)}
`

export const Note = styled(SectionMini)`
  ${cssGrid(1, 11, 9, 12)}
  padding: 2rem;
  text-align: justify;

  @media screen and (max-width: 780px) {
    ${cssGrid(1, 11, 9, 13)}
  }

  @media screen and (max-width: 600px) {
    ${cssGrid(1, 13, 9, 12)}
  }

  @media screen and (max-width: 450px) {
    ${cssGrid(1, 13, 9, 13)}
  }

  @media screen and (max-width: 335px) {
    ${cssGrid(1, 13, 9, 14)}
  }
`

export const Plate1 = styled(PlateRight)`
  margin: 35px 0 0 0;
  overflow: auto;
  ${cssGrid(2, '', 12, '')};
  height: 190px;
`
export const Plate2 = styled(Plate)`
  margin: 10px 0 0 10px;
  overflow: auto;
  height: 170px;
  ${cssGrid(10, '', 11, '')};
`

export const Plate3 = styled(Plate)`
  margin: 10px 0 0 10px;
  overflow: auto;
  height: 150px;
  ${cssGrid(8, '', 13, '')};
`

export const Caption1 = styled.h1`
  color: ${DarkColor};
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  overflow: visible;
  margin: 20px 0 0 50px;
  text-indent: 3rem;

  ${cssGrid(4, 9, 12, '')};
`
export const Caption2 = styled.h1`
  color: ${DarkColor};
  opacity: 0.8;
  font-family: 'Cormorant Garamond', serif;
  font-size: 7rem;
  text-align: center;

  ${cssGrid(2, 12, 16, '')};
`
