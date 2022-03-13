import styled, { createGlobalStyle } from 'styled-components'

export const LightColor = '#DCB993'
export const DarkColor = '#5C3B0A'

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
		padding: 0;
  }
`

export const SectionPic = styled.div`
  background-image: url('https://www.restoran.ru/upload/resize_cache/iblock/2fb/1920_1080_11a88371ca9e7ba72ce6f5767ba9eff1a/3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  padding: 20% 0;
`
export const SectionBack = styled.div`
  background-color: #e4d6c9;
`

export const SectionMini = styled.div`
  background-image: url('https://img5.goodfon.ru/wallpaper/nbig/7/20/fon-kamen-tsvet-razvody-tekstura-piatna-bezhevyi-kamennyi-vk.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`

export const Button = styled.button`
  color: ${LightColor};
  font-family: 'Cormorant Garamond', serif;
  background: none;
  border: 3px solid ${LightColor};
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 2rem;
  transition-duration: 0.2s;

  position: relative;

  &:hover {
    color: ${DarkColor};
    background: ${LightColor};
    border: 3px solid ${LightColor};
  }
`
export const Paragraph = styled.h2`
  color: ${DarkColor};
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.5rem;
`
export const Text = styled.span`
  color: ${DarkColor};
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 1rem;
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
