import styled from 'styled-components'
import { FonColor, Plate, PlateRight } from '../../globalStyles'
import { PlateStyle } from '../../utils'

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
  ${PlateStyle('200px', '120%', '10%', 'relative', '40vw')};
`

export const Plate2 = styled(Plate)`
  ${PlateStyle('180px', '137%', '70%', 'absolute', '35vw', '150%', '52%')};
`

export const Plate3 = styled(Plate)`
  ${PlateStyle('130px', '100%', '78%', 'absolute', '25vw', '112%', '70%', '125%')};
`
