import React, { useState } from 'react'
import Reservation from '../Reservation/Reservation'
import { ButtonSection, ButtonItem, ButtonCell, TelLink } from './ButtonStyles'

export default function Button({ footer }) {
  const [reservation, setReservation] = useState(false)

  return (
    <>
      <Reservation reservation={reservation} setReservation={setReservation} />
      <ButtonSection>
        <ButtonItem footer={footer}>
          <TelLink href="tel:+79999999999">
            <ButtonCell footer={footer}>Call us</ButtonCell>
          </TelLink>
        </ButtonItem>

        <ButtonItem footer={footer}>
          <ButtonCell footer={footer} onClick={() => setReservation(true)}>
            Reservation
          </ButtonCell>
        </ButtonItem>
      </ButtonSection>
    </>
  )
}
