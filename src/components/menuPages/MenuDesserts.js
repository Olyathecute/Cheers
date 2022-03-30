import React from 'react'
import MenuTotal from './Template/Template'

export default function MenuDesserts() {
  return <MenuTotal from={'Desserts'} textFirst={'Main'} toFirst={'/menu'} textSecond={'Bar'} toSecond={'/menu-bar'} />
}
