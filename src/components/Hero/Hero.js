import React from 'react'
import { Paragraph, Text } from '../../globalStyles'
import { HeroWrapper, Hero, Background, Note, Rectangle, Plate1, Plate2, Plate3, Caption1, Caption2, Caption3, CaptionMenu } from './HeroStyles'

export default function HeroSection() {
  return (
    <HeroWrapper>
      <Hero />
      <Caption1>Fresh ingredients sourced globally</Caption1>
      <Caption2>Taste is like art</Caption2>
      <Background />
      <Rectangle>
        <Caption3>Awesome and savory dishes</Caption3>
      </Rectangle>
      <Note>
        <Paragraph>Our Mission</Paragraph>
        <Text>
          Restaurant Cheers is a modern restaurant located in the heart of Paris with a great view of the Eiffel Tower. Chef Anatole has many years of
          experience and leads a team of chefs using innovation and superior technique. Cheers offers a variety of amazing dishes, signature cocktails
          and interesting desserts. Ingredients for dishes are brought from all over the world and also several quality checks.
        </Text>
      </Note>
    </HeroWrapper>
  )
}
