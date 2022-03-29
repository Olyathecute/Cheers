import styled, { createGlobalStyle } from 'styled-components'

export const LightColor = '#DCB993'
export const DarkColor = '#5C3B0A'
export const GreenColor = '#013220'
export const FonColor = '#e4d6c9'

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
		padding: 0;
  }
`

export const SectionPic = styled.div`
  background-image: url('assets/hero.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(2px);
  z-index: -10;
`

export const SectionMini = styled.div`
  background-image: url('assets/fon.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`

export const SectionMiniGreen = styled.div`
  background-color: ${GreenColor};
`

export const Paragraph = styled.h2`
  color: ${DarkColor};
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.5rem;
  padding-bottom: 0.5rem;
`
export const Text = styled.span`
  color: ${DarkColor};
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 1rem;

  @media screen and (max-width: 920px) {
    font-size: 0.8rem;
  }
`

export const Plate = styled.img`
  animation: spin 45s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
export const PlateRight = styled.img`
  animation: spin 50s linear infinite;
  transform-origin: 40% 25%;
  @keyframes spin {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`

export default GlobalStyle
