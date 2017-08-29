
import Hello from '@/components/Hello'
import demo from '@/view/demo'


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
