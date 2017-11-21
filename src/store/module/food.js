import * as types from '../mutations/index'

// initial state
// shape: [{ id, quantity }]
const state = {
  roominfo:{},
  orders:[],//购物车列表
}


// mutations
const mutations = {

  [types.FOOD_INFO] (state, data) {
    // rollback to the cart saved before sending the request
    state.roominfo = data
  },
  [types.ORDERS] (state, data) {
    // rollback to the cart saved before sending the request
    state.orders = data
  },
}

export default {
  state,
  mutations
}
