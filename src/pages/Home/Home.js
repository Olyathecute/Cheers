import React from 'react'
import { Paragraph, Text } from '../../globalStyles'
import { HoweWrapper, Hero, Background, Note, Plate1, Plate2, Plate3, Caption1, Caption2 } from './HomeStyles'

export default function Home() {
  return (
    <HoweWrapper>
      <Hero />
      <Background />
      <Note>
        <Paragraph>Our Mission</Paragraph>
        <Text>
          Cheers Restaurant is a modern restaurant located in the heart of Paris with a great view of the Eiffel Tower. Chef Anatole has many years of
          experience and leads a team of chefs using innovation and superior technique. Cheers offers a variety of amazing dishes, signature cocktails
          and interesting desserts. Ingredients for dishes are brought from all over the world and also several quality checks.
        </Text>
      </Note>
      {/* // <Plate1 src="assets/donates.png" />
      // <Plate2 src="assets/fish.png" />
      // <Plate3 src="assets/meat.png" />
      // <Caption1>Awesome and savory dishes</Caption1>
      // <Caption2>View Our Menu</Caption2> */}
    </HoweWrapper>
  )
}
