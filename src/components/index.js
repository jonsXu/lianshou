import pgicon from './icon.vue' // icon
import wrapper from './wrapper.vue' // icon
const install = function (Vue) {
    Vue.component(pgicon.name, pgicon)
    Vue.component(wrapper.name, wrapper)
}

export default install