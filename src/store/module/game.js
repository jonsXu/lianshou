import * as types from '../mutations/index'

// initial state
// shape: [{ id, quantity }]
const state = {
  ctx:null
}


// mutations
const mutations = {

  [types.GAME_CTX] (state, data) {
    // rollback to the cart saved before sending the request
    state.ctx = data
  }
}

export default {
  state,
  mutations
}
