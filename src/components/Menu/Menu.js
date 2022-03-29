import React from 'react'
import { dataMenu } from '../../data'
import { MenuWrapper, MenuSectionWrapper, MenuSection, MenuPicture, MenuTitle, MenuLink } from './MenuStyles'

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuSectionWrapper>
        {dataMenu.map((element) => {
          console.log(element.id)
          return (
            <MenuSection key={element.id} move={element.id}>
              <MenuLink to={element.link}>
                <MenuTitle>{element.text}</MenuTitle>
                <MenuPicture src={element.img}></MenuPicture>
              </MenuLink>
            </MenuSection>
          )
        })}
      </MenuSectionWrapper>
    </MenuWrapper>
  )
}
