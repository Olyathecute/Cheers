import React from 'react'
import Navbar from '../Navbar/Navbar'
import { HeaderWrapper, HeaderSection, HeaderItem, TelLink } from './HeaderStyles'
import { Button } from '../../globalStyles'

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderSection>
        <HeaderItem>
          <Navbar />
        </HeaderItem>
      </HeaderSection>

      <HeaderSection>
        <HeaderItem>
          <TelLink light href="tel:+79999999999">
            <Button>Call us</Button>
          </TelLink>
        </HeaderItem>
        <HeaderItem>
          <Button>Reservation</Button>
        </HeaderItem>
      </HeaderSection>
    </HeaderWrapper>
  )
}
