
import demo from './demo' // 系统配置
import game from './game' // 登录token

export default {
	...demo,
    ...game
}

// import * as types from '../mutations/index'

// export const setName = ({ commit }, name) => {
//     commit(types.DEMO_NAME, name)
// }
// export const setCtx = ({ commit }, name) => {
//     commit(types.GAME_CTX, name)
//   }
