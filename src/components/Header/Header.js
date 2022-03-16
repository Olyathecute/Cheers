import React from 'react'
import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button'
import { HeaderWrapper, HeaderSection } from './HeaderStyles'

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderSection mobile>
        <Navbar />
      </HeaderSection>

      <HeaderSection>
        <Button />
      </HeaderSection>
    </HeaderWrapper>
  )
}
