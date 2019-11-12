import api from '../../../../api/index'
const state = {
  data: []
}

const actions = {
  getAllInfoHeader ({commit}) {
    api.getInfoHeader().then(res => {
      // console.log(res.data)
      commit('getAllInfoHeader', res)
    })
  }
}

const mutations = {
  getAllInfoHeader (state, res) {
    state.data = res.data
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})
