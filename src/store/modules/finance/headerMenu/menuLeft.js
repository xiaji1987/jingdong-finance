import api from '../../../../api/index'
const state = {
  dataMenu: []
}

const actions = {
  getAllMenuLeft ({commit}) {
    api.getMenuLeft().then(res => {
      // console.log(res.data)
      commit('getAllMenuLeft', res)
    })
  }
}

const mutations = {
  getAllMenuLeft (state, res) {
    state.dataMenu = res.data
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})
