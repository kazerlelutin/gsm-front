import m from 'mithril'

export const Title = {
  title: 'Hello World',
  count: 0,

  view(vnode) {
    return m('div', [
      m('h1', vnode.state.title),
      m(
        'button',
        {
          onclick: () => {
            vnode.state.count++
            vnode.state.title = `Clicked ${vnode.state.count} times`
          },
        },
        'Click me'
      ),
    ])
  },
}
