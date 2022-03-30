import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'

export const dataSchedule = [{ text: 'Mo - Fr: 12PM - 10PM' }, { text: 'Su - Sa: 12PM - 11PM' }]

export const dataGallery = Array(11)
  .fill(0)
  .map((_, index) => `assets/food${index + 1}.jpg`)

export const dataNavbar = [
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/About',
    text: 'About'
  },
  {
    to: '/Gallery',
    text: 'Gallery'
  }
]

export const dataMenu = [
  {
    text: 'Bar',
    id: 1,
    img: 'assets/menu-bar.jpg',
    link: '/menu-bar'
  },
  {
    text: 'Menu',
    id: 2,
    img: 'assets/menu.jpg',
    link: '/menu'
  },
  {
    text: 'Desserts',
    id: 3,
    img: 'assets/menu-desserts.jpg',
    link: '/menu-desserts'
  }
]

export const dataMedia = [
  {
    icon: <FaInstagramSquare size={45} />,
    link: 'https://instagram.com'
  },
  {
    icon: <FaFacebookSquare size={45} />,
    link: 'https://facebook.com'
  },
  {
    icon: <FaTwitterSquare size={45} />,
    link: 'https://twitter.com'
  }
]
