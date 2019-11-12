import api from '../../../../api/index'
const state = {
  data: [],
  dataBottom: []
}

const actions = {
  getAllRotationChart ({commit}) {
    api.getRotationChart().then(res => {
      // console.log(res.data)
      commit('getAllRotationChart', res)
    })
    api.getRotationBottom().then(res => {
      // console.log(res.data)
      commit('getAllRotationBottom', res)
    })
  }
}

const mutations = {
  getAllRotationChart (state, res) {
    state.data = res.data
  },
  getAllRotationBottom (state, res) {
    state.dataBottom = res.data
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})
