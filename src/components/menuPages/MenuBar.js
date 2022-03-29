import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MenuWrapper, MenuText, MenuLink } from './MenuPagesStyles'

export default function MenuBar() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <MenuWrapper>
      <MenuText>In this page can contain a Bar Menu for restaurant</MenuText>
      <MenuText>
        to&nbsp;
        <MenuLink to="/menu">Main Menu</MenuLink>
      </MenuText>
      <MenuText>
        to&nbsp;
        <MenuLink to="/menu-desserts">Desserts Menu</MenuLink>
      </MenuText>
    </MenuWrapper>
  )
}
