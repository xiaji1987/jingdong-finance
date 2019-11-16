import api from '../../../../api/index'
const state = {
  dataShop: []
}
const actions = {
  getAllShopRem ({commit}) {
    api.getShopRem().then(res => {
      // console.log(res.data)
      commit('getAllShopRem', res)
    })
  }
}

const mutations = {
  getAllShopRem (state, res) {
    state.dataShop = res.data
    // console.log(state.dataLeft)
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})
