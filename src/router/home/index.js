
import Home from 'src/view/home/index.vue'
import Game from 'src/view/game/index.vue'

export default [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
]
