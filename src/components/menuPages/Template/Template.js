import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MenuWrapper, MenuText, MenuLink } from './TemplateStyles'

export default function MenuTotal({ from, textFirst, toFirst, textSecond, toSecond }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <MenuWrapper>
      <MenuText>This page can contain a {from} Menu for restaurant</MenuText>
      <MenuText>
        to&nbsp;
        <MenuLink to={toFirst}>{textFirst} Menu</MenuLink>
      </MenuText>
      <MenuText>
        to&nbsp;
        <MenuLink to={toSecond}>{textSecond} Menu</MenuLink>
      </MenuText>
    </MenuWrapper>
  )
}
