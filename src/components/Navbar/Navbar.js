import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiRestaurant2Fill } from 'react-icons/ri'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Nav, NavLogo, NavSection, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarStyles'
import { data } from '../../data/NavbarData'

export default function Navbar() {
  const [show, setShow] = useState(false)

  const handleClickShow = () => {
    setShow(!show)
  }

  let navigate = useNavigate()

  const closeMobileMenu = (to) => {
    navigate(to)
    setShow(false)
  }

  return (
    <Nav>
      <NavSection>
        <MobileIcon onClick={handleClickShow}>{show ? <RiRestaurant2Fill size={30} /> : <AiOutlineMenu size={30} />}</MobileIcon>
        <NavMenu show={show}>
          {data.map((item, index) => (
            <NavItem key={index}>
              <NavLinks to={item.to} onClick={() => closeMobileMenu(item.to)}>
                {item.text}
              </NavLinks>
            </NavItem>
          ))}
        </NavMenu>
      </NavSection>
      <NavSection>
        <NavLogo to="/" onClick={() => closeMobileMenu('/')}>
          Cheers
        </NavLogo>
      </NavSection>
    </Nav>
  )
}
