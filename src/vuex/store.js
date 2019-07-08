import Vue from 'vue'
import Vuex,{store, Store} from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


Vue.use(Vuex)

export default new Store({
    state,
    mutations,
    actions,
    getters
})