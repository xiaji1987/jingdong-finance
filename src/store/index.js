import Vue from 'vue'
import Vuex from 'vuex'
import topBar from './modules/finance/topBar'
import headerBar from './modules/finance/headerBar'
import menuPendant from './modules/finance/menuPendant'
import menuLeft from './modules/finance/menuLeft'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    topBar,
    headerBar,
    menuPendant,
    menuLeft
  }
})
