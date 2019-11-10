import Vue from 'vue'
import Vuex from 'vuex'
import topBar from './modules/finance/topBar'
import headerBar from './modules/finance/headerBar'
import menuPendant from './modules/finance/menuPendant'
import menuLeft from './modules/finance/menuLeft'
import rotationChart from './modules/finance/rotationChart'
import menuRight from './modules/finance/menuRight'
import infoHeader from './modules/finance/infoHeader'
import midContext from './modules/finance/midContext'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    topBar,
    headerBar,
    menuPendant,
    menuLeft,
    rotationChart,
    menuRight,
    infoHeader,
    midContext
  }
})
