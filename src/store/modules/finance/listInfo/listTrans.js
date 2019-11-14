import api from '../../../../api/index'
const state = {
  dataLeft: []
}
const actions = {
  getAllListTrans ({commit}) {
    api.getListTrans().then(res => {
      console.log(res)
      commit('getAllListTrans', res)
    })
  }
}

const mutations = {
  getAllListTrans (state, res) {
    state.dataLeft = res.data
    // console.log(state.dataLeft)
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})
