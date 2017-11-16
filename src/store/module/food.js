import * as types from '../mutations/index'

// initial state
// shape: [{ id, quantity }]
const state = {
  roominfo:{}
}


// mutations
const mutations = {

  [types.FOOD_INFO] (state, data) {
    // rollback to the cart saved before sending the request
    state.roominfo = data
  }
}

export default {
  state,
  mutations
}
