import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
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