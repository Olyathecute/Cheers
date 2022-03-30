import React, { useState } from 'react'
import Reservation from '../Reservation/Reservation'
import { ButtonSection, ButtonItem, ButtonCell, TelLink } from './ButtonStyles'

export default function Button({ footer }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <Reservation show={show} setShow={setShow} />
      <ButtonSection>
        <ButtonItem footer={footer}>
          <TelLink href="tel:+79999999999">
            <ButtonCell footer={footer}>Call us</ButtonCell>
          </TelLink>
        </ButtonItem>

        <ButtonItem footer={footer}>
          <ButtonCell footer={footer} onClick={() => setShow(true)}>
            Reservation
          </ButtonCell>
        </ButtonItem>
      </ButtonSection>
    </>
  )
}
