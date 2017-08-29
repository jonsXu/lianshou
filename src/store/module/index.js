import * as types from '../mutations/index.js'
//
const state={
    name:"xuwen"
}
const mutations = {
    // 保存省数据
    [types.GET_REGIONS] (state, data) {
        state.stateList = data
    }
} 