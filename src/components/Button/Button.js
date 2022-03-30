import React, { useState } from 'react'
import Reservation from '../Reservation/Reservation'
import { ButtonSection, FooterButtonItem, HeaderButtonItem, HeaderButtonCell, FooterButtonCell, TelLink } from './ButtonStyles'

export default function Button({ footer }) {
  const [reservation, setReservation] = useState(false)

  const ButtonCell = footer ? FooterButtonCell : HeaderButtonCell
  const ButtonItem = footer ? FooterButtonItem : HeaderButtonItem

  return (
    <>
      <Reservation reservation={reservation} setReservation={setReservation} />
      <ButtonSection>
        <ButtonItem>
          <TelLink href="tel:+79999999999">
            <ButtonCell>Call us</ButtonCell>
          </TelLink>
        </ButtonItem>

        <ButtonItem>
          <ButtonCell onClick={() => setReservation(true)}>Reservation</ButtonCell>
        </ButtonItem>
      </ButtonSection>
    </>
  )
}
