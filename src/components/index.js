import pgicon from './icon.vue' // icon
import wrapper from './wrapper.vue' // icon
import PgBuyCar from './buycar.vue' // icon
const install = function (Vue) {
    Vue.component(pgicon.name, pgicon)
    Vue.component(wrapper.name, wrapper)
    Vue.component(PgBuyCar.name,PgBuyCar)
}

export default install