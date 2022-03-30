import styled from 'styled-components'
import { FonColor, Plate, PlateRight } from '../../globalStyles'

export const PlatesWrapper = styled.div`
  background-color: ${FonColor};
  width: 100%;
  min-height: 50px;

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
`

export const Plate1 = styled(PlateRight)`
  height: 200px;
  position: absolute;
  left: 10%;
  top: 120%;

  @media screen and (max-width: 600px) {
    position: relative;
    height: 40vw;
  }
`

export const Plate2 = styled(Plate)`
  height: 180px;
  position: absolute;
  right: 10%;
  top: 140%;

  @media screen and (max-width: 600px) {
    position: relative;
    top: 150%;
    height: 35vw;
  }
`

export const Plate3 = styled(Plate)`
  height: 150px;
  position: absolute;
  right: 4%;
  top: 100%;

  @media screen and (max-width: 600px) {
    height: 20vw;
    top: 120%;
  }
`
