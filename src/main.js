import m from 'mithril'
import './style.css'
import { Home } from './pages/home'

m.route(document.body, '/', {
  '/': Home,
})
