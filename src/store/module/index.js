import * as types from '../mutations/index'

// initial state
// shape: [{ id, quantity }]
const state = {
  name:'hehe'
}


// mutations
const mutations = {

  [types.DEMO_NAME] (state, data) {
    // rollback to the cart saved before sending the request
    state.name = data
  }
}

export default {
  state,
  mutations
}
