import React from 'react'
import MenuTotal from './Template/Template'

export default function MenuBar() {
  return <MenuTotal from={'Bar'} textFirst={'Main'} toFirst={'/menu'} textSecond={'Desserts'} toSecond={'/menu-desserts'} />
}
