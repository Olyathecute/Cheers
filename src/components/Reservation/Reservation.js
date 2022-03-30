import React from 'react'
import { Wrapper, ResBlock, ResButton, ResInput, ResText } from './ReservationStyels'

export default function Reservation({ show, setShow }) {
  return (
    <Wrapper show={show} onClick={() => setShow(false)}>
      <ResBlock onClick={(e) => e.stopPropagation}>
        <ResInput type="text" id="name" placeholder="Enter your name"></ResInput>

        <ResText for="date">Choose a date</ResText>
        <ResInput type="date" id="date"></ResInput>

        <ResText for="time">Choose a time</ResText>
        <ResInput type="time" id="time" min="12:00" max="21:30" required></ResInput>

        <ResText for="number">Select the number of people</ResText>
        <ResInput id="number" type="number" min="1" max="6" step="1"></ResInput>

        <ResButton onClick={() => setShow(false)}>Reservation</ResButton>
      </ResBlock>
    </Wrapper>
  )
}
