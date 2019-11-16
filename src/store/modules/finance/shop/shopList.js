import api from '../../../../api/index'
const state = {
  dataList: []
}

const actions = {
  getAllShopList ({commit}, index) {
    api.getShopListFir().then(res => {
      console.log(res.data)
      commit('getAllShopList', res)
    })
  }
}

const mutations = {
  getAllShopList (state, res) {
    state.dataList = res.data
    // console.log(state.dataLeft)
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})
