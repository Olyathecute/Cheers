import React from 'react'
import { dataGallery } from '../../data'
import { Gallery, GallerySection, GalleryPicture, GalleryPictureBig, GalleryPictureLong, GalleryImg } from './GalleryStyles'

function getGalleryComponent(type) {
  switch (type) {
    case 'big':
      return GalleryPictureBig
    case 'long':
      return GalleryPictureLong
    default:
      return GalleryPicture
  }
}

export default function GalleryPage() {
  return (
    <Gallery>
      <GallerySection>
        {dataGallery.map(({ url, type }, index) => {
          const Component = getGalleryComponent(type)

          return (
            <Component key={index}>
              <GalleryImg src={url}></GalleryImg>
            </Component>
          )
        })}
      </GallerySection>
    </Gallery>
  )
}
