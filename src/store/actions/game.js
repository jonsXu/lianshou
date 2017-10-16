
import * as types from '../mutations/index'

// export const setCtx = ({ commit }, name) => {
//     commit(types.GAME_CTX, name)
//   }

export default{  setCtx : ({ commit }, name) => {
    commit(types.GAME_CTX, name)
  }
}
