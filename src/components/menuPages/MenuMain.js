import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MenuWrapper, MenuText, MenuLink } from './MenuPagesStyles'

export default function MenuMain() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <MenuWrapper>
      <MenuText>This page can contain a Main Menu for restaurant</MenuText>
      <MenuText>
        to&nbsp;
        <MenuLink to="/menu-bar">Bar Menu</MenuLink>
      </MenuText>
      <MenuText>
        to&nbsp;
        <MenuLink to="/menu-desserts">Desserts Menu</MenuLink>
      </MenuText>
    </MenuWrapper>
  )
}
