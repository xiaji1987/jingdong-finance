import api from '../../../../api/index'
const state = {
  dataAll: []
}
const actions = {
  getAllListInsu ({commit}) {
    api.getListInsu().then(res => {
      // console.log(res.data)
      commit('getAllListInsu', res)
    })
  }
}

const mutations = {
  getAllListInsu (state, res) {
    state.dataAll = res.data
    // console.log(state.dataLeft)
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})
