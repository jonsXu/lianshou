import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions/index.js';
import mutations from './mutations/index.js';
import module from './module/index.js';
import * as getters from './getters/index.js';

Vue.use(Vuex);

//state
const state = {
    count: 0,    //counter actions 操作的值
    pageData: {}    //fetch action 操作的值
  };
  
  //把上面的融到一起
  export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    module
  });