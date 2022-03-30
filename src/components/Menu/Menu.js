import React from 'react'
import { dataMenu } from '../../data'
import { Link } from 'react-router-dom'
import { MenuWrapper, MenuSectionWrapper, MenuSection, MenuPicture, MenuTitle, MenuCaption } from './MenuStyles'

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuCaption>View Our Menu</MenuCaption>
      <MenuSectionWrapper>
        {dataMenu.map((element) => {
          return (
            <MenuSection key={element.id} move={element.id}>
              <Link to={element.link}>
                <MenuTitle>{element.text}</MenuTitle>
                <MenuPicture src={element.img}></MenuPicture>
              </Link>
            </MenuSection>
          )
        })}
      </MenuSectionWrapper>
    </MenuWrapper>
  )
}
