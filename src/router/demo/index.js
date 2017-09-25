
import Hello from 'src/components/Hello'
import demo from 'src/view/demo/demo'
import yiyao from 'src/view/demo/yiyao'

export default [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/yiyao',
      name: 'yiyao',
      component: yiyao
    },

]
