import page from 'page'
import layout from './layout'
import homepage from './homepage'
import contacto from './contacto'
import acercade from './acercade'
import carrito from './carrito'
import productos from './productos'

const main = document.querySelector('main')

page('/', () => {
	main.innerHTML = layout(homepage)
})

page('/contacto', () => {
	main.innerHTML = layout(contacto)
})

page('/acercade', () => {
	main.innerHTML = layout(acercade)
})

page('/carrito', () => {
	main.innerHTML = layout(carrito)
})

page('/productos', () => {
	main.innerHTML = layout(productos)
})