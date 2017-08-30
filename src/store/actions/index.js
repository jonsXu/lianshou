import * as types from '../mutations/index'

export const setName = ({ commit }, name) => {
    commit(types.DEMO_NAME, name)
  }

  
//   export default {
//     setName:({ commit }, name) => {
//       commit(types.DEMO_NAME, name)
//     }
// }