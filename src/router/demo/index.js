
import Hello from 'src/components/Hello'
import demo from 'src/view/demo/demo'


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
    }

]
