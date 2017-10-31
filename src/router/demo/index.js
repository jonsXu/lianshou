
import Hello from 'src/components/Hello.vue'
import demo from 'src/view/demo/demo.vue'
import demo2 from 'src/view/demo/demo2.vue'
import yiyao from 'src/view/demo/yiyao.vue'

export default [
    
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
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/yiyao',
      name: 'yiyao',
      component: yiyao
    },

]
