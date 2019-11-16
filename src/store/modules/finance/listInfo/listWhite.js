import api from '../../../../api/index'
const state = {
  dataInfo: [],
  dataTop: [],
  dataBottom: []
}

const actions = {
  getAllListWhite ({commit}) {
    api.getListWhite().then(res => {
      // console.log(res.data)
      commit('getAllListWhite', res)
    })
    api.getWhiteTop().then(res => {
      // console.log(res.data)
      commit('getWhiteTop', res)
    })
    api.getWhiteBottom().then(res => {
      // console.log(res.data)
      commit('getWhiteBottom', res)
    })
  }
}

const mutations = {
  getAllListWhite (state, res) {
    state.dataInfo = res.data
  },
  getWhiteTop (state, res) {
    state.dataTop = res.data
  },
  getWhiteBottom (state, res) {
    state.dataBottom = res.data
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})
