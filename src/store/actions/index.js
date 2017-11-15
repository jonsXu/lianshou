
import demo from './demo' // 系统配置
import game from './game' // 登录token
import food from './food'

export default {
	...demo,
    ...game,
    ...food,
}

// import * as types from '../mutations/index'

// export const setName = ({ commit }, name) => {
//     commit(types.DEMO_NAME, name)
// }
// export const setCtx = ({ commit }, name) => {
//     commit(types.GAME_CTX, name)
//   }
