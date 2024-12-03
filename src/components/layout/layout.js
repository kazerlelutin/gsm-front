import m from 'mithril'
import { Header } from '../header/header'
import styles from './layout.module.css'

export const Layout = {
  view(vnode) {
    return m('div', { class: styles.root }, [
      m(Header),
      m('main', vnode.children),
    ])
  },
}
