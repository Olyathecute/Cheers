import styled from 'styled-components'
import { GreenColor } from '../../globalStyles'

export const Gallery = styled.div`
  background-color: ${GreenColor};
  width: 100%;
  padding: 6rem 1rem 1rem 1rem;
`

export const GallerySection = styled.div`
  display: grid;
  grid-template-areas:
    'a b c d d'
    'f f g d d';
  grid-gap: 1rem;

  @media screen and (max-width: 650px) {
    display: flex;
    flex-wrap: wrap;
  }
`

export const GalleryPicture = styled.div`
  background-color: red;
  overflow: hidden;
`

export const GalleryPictureBig = styled.div`
  grid-area: d;
  overflow: hidden;
`
export const GalleryPictureLong = styled.div`
  grid-area: f;
  overflow: hidden;
`

export const GalleryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(65%);

  &:hover {
    transform: scale(1.2);
    filter: brightness(100%);
  }
  transition: 3s;
`
