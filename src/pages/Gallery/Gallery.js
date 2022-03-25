import React from 'react'
import { Gallery, GallerySection, GalleryPicture, GalleryPictureBig, GalleryPictureLong, GalleryImg } from './GalleryStyles'

const dataGallery = Array(11)
  .fill(0)
  .map((_, index) => `assets/food${index + 1}.jpg`)

export default function GalleryPage() {
  return (
    <Gallery>
      <GallerySection>
        {dataGallery.map((_, index) => {
          if (index === 3)
            return (
              <GalleryPictureBig key={index}>
                <GalleryImg src="assets/food4.jpg"></GalleryImg>
              </GalleryPictureBig>
            )
          if (index === 4)
            return (
              <GalleryPictureLong key={index}>
                <GalleryImg src="assets/food5.jpg"></GalleryImg>
              </GalleryPictureLong>
            )
          return (
            <GalleryPicture key={index}>
              <GalleryImg src={`assets/food${index + 1}.jpg`}></GalleryImg>
            </GalleryPicture>
          )
        })}
      </GallerySection>
    </Gallery>
  )
}
