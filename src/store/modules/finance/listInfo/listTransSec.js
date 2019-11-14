import api from '../../../../api/index'
const state = {
  dataInfo: []
}
const actions = {
  async getAllListTransSec ({commit}) {
    await api.getTransInfo1().then(res => {
      console.log(res.data)
      commit('getAllTransInfo', res)
    })
    await api.getTransInfo2().then(res => {
      // console.log(res.data)
      commit('getAllTransInfo', res)
    })
    await api.getTransInfo3().then(res => {
      // console.log(res.data)
      commit('getAllTransInfo', res)
    })
    await api.getTransInfo4().then(res => {
      // console.log(res.data)
      commit('getAllTransInfo', res)
    })
  }
}

const mutations = {
  getAllTransInfo (state, res) {
    state.dataInfo.push(res)
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})
