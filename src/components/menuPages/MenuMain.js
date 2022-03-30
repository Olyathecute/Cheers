import React from 'react'
import MenuTotal from './Template/Template'

export default function MenuMain() {
  return <MenuTotal from={'Main'} textFirst={'Bar'} toFirst={'/menu-bar'} textSecond={'Desserts'} toSecond={'/menu-desserts'} />
}
