import styled from 'styled-components'
import { SectionPic, SectionMini, Plate, PlateRight } from '../../globalStyles'
import { cssGrid } from '../../utils'
import { LightColor, DarkColor, GreenColor } from '../../globalStyles'

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 10vh;
`

export const Hero = styled(SectionPic)`
  ${cssGrid(1, 13, 1, 11)}
`

export const Background = styled.div`
  background-color: ${GreenColor};
  ${cssGrid(1, 13, 11, 16)};

  @media screen and (max-width: 760px) {
    ${cssGrid(1, 13, 17, 18)}
  }

  @media screen and (max-width: 540px) {
    ${cssGrid(1, 13, 19, 20)}
  }
`

export const Note = styled(SectionMini)`
  ${cssGrid(4, 13, 9, 15)}

  @media screen and (max-width: 760px) {
    ${cssGrid(1, 13, 9, 17)}
  }
  @media screen and (max-width: 540px) {
    ${cssGrid(1, 13, 9, 19)}
  }
`

export const TextWrapper = styled.div`
  ${cssGrid(6, 12, 10, 15)}
  text-align: justify;
  padding: 1rem;

  @media screen and (max-width: 960px) {
    ${cssGrid(7, 12, 10, 15)}
  }
  @media screen and (max-width: 760px) {
    ${cssGrid(2, 12, 14, 17)}
  }

  @media screen and (max-width: 540px) {
    ${cssGrid(2, 12, 14, 18)}
  }

  @media screen and (max-width: 310px) {
    ${cssGrid(2, 12, 13, 18)}
  }

  @media screen and (max-width: 245px) {
    padding-top: 1rem;
    ${cssGrid(2, 12, 12, 18)}
  }
`

export const Picture = styled.img`
  box-shadow: 20px -20px 0 ${GreenColor};
  ${cssGrid(1, 13, 5, '')};
  max-width: 100%;
  max-height: 90vh;
  @media screen and (max-width: 420px) {
    box-shadow: 0 -20px 0 ${GreenColor}, 0 20px 0 ${GreenColor};
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
