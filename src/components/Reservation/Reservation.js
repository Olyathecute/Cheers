import React from 'react'
import { Wrapper, ResBlock, ResButton, ResInput, ResText } from './ReservationStyels'

export default function Reservation({ reservation, setReservation }) {
  return (
    <Wrapper reservation={reservation} onClick={() => setReservation(false)}>
      <ResBlock onClick={(event) => event.stopPropagation()}>
        <ResInput type="text" id="name" placeholder="Enter your name"></ResInput>

        <ResText>Choose a date</ResText>
        <ResInput type="date"></ResInput>

        <ResText>Choose a time</ResText>
        <ResInput type="time" min="12:00" max="21:30"></ResInput>

        <ResText>Select the number of people</ResText>
        <ResInput type="number" min="1" max="6" step="1"></ResInput>

        <ResButton onClick={() => setReservation(false)}>Reservation</ResButton>
      </ResBlock>
    </Wrapper>
  )
}
