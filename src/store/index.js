import Vue from 'vue'
import Vuex from 'vuex'
import headerBar from './modules/finance/headerBar/index'
import headerMenu from './modules/finance/headerMenu/index'
import midInfo from './modules/finance/midInfo/index'
import listInfo from './modules/finance/listInfo/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ...headerBar,
    ...headerMenu,
    ...midInfo,
    ...listInfo
  }
})
