import React from 'react'
import { Paragraph, Text } from '../../globalStyles'
import { AboutWrapper, TextWrapper, Hero, Background, Note, Plate1, Picture } from './AboutStyles'

export default function About() {
  return (
    <AboutWrapper>
      <Hero />
      <Background />
      <Note />
      <TextWrapper>
        <Paragraph>Our Chief</Paragraph>
        <Text>
          Anatole, Executive Chef of Cheers Restaurant. Prior to working at Cheers, Chef Anatole worked and learned from master chefs Jean-Georges
          Vongerichten, Nobu Matsuhisa and others. His training reflects his experiences in French, Japanese and Asian cuisines. Chef Anatole was born
          in Poitiers and has lived and worked in New York, Moscow and Tokyo – bringing with him a broad range of traditions and local cuisines.
        </Text>
      </TextWrapper>
      <Picture src="../Cheers/assets/chief.jpg"></Picture>
      <Plate1 src="../Cheers/assets/plate1.png"></Plate1>
    </AboutWrapper>
  )
}
