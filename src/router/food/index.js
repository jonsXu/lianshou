
import Food from 'src/view/foods/index.vue'
import foodDetail from 'src/view/foods/components/detail/index.vue'

export default [
    {
      path: '/food',
      name: 'food',
      component: Food
    },
    {
      path: '/foodDetail',
      name: 'foodDetail',
      component: foodDetail
    },
]
