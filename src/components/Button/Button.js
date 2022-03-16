import React from 'react'
import { ButtonSection, ButtonItem, ButtonCell, TelLink } from './ButtonStyles'

export default function Button({ footer }) {
  return (
    <ButtonSection>
      <ButtonItem footer={footer}>
        <TelLink href="tel:+79999999999">
          <ButtonCell footer={footer}>Call us</ButtonCell>
        </TelLink>
      </ButtonItem>

      <ButtonItem footer={footer}>
        <ButtonCell footer={footer}>Reservation</ButtonCell>
      </ButtonItem>
    </ButtonSection>
  )
}
