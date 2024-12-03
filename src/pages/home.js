import m from 'mithril'
import { Layout } from '../components/layout/layout'

export const Home = {
  view() {
    return m(Layout, [
      m('h1', 'Hello World'),
      m('nav.menu', [m(m.route.Link, { href: '/Homeless' }, 'Users')]),
    ])
  },
}
