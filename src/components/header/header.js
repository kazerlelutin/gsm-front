import m from 'mithril'
import styles from './header.module.css'
import { LS_KEYS } from '../../utils/constants'

export const Header = {
  code: '',

  oninit(vnode) {
    vnode.state.code = localStorage.getItem(LS_KEYS.code) || ''
  },
  view(vnode) {
    return m(
      'header',
      {
        class: styles.root,
      },
      [
        m('input', {
          class: styles.input,
          placeholder: 'entrer votre code',
          value: vnode.state.code,
          oninput(e) {
            vnode.state.code = e.target.value
            localStorage.setItem(LS_KEYS.code, vnode.state.code)
          },
        }),
      ]
    )
  },
}
