import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import demo from './module/index'
import game from './module/game'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    demo,
    game,
  },

})