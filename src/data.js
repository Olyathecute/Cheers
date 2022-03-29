export const dataGallery = Array(11)
  .fill(0)
  .map((_, index) => `assets/food${index + 1}.jpg`)

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
