import * as types from '../mutations/index'

export const setCtx = ({ commit }, ctx) => {
    commit(types.GAME_CTX, ctx)
  }

// export default{
//     nameGetter : state => state.demo.name,
// }