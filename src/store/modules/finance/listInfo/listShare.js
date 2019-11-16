import api from '../../../../api/index'
const state = {
  dataAll: [],
  dataNum: []
}
const actions = {
  getAllListShare ({commit}) {
    api.getListShare().then(res => {
      // console.log(res.data)
      commit('getAllListShare', res)
    })
    api.getShareNum().then(res => {
      // console.log(res.data)
      commit('getAllShareNum', res)
    })
  }
}

const mutations = {
  getAllListShare (state, res) {
    state.dataAll = res.data
    // console.log(state.dataLeft)
  },
  getAllShareNum (state, res) {
    state.dataNum = res.data
    // console.log(state.dataLeft)
  }
}

const getters = {
  getDataAll: function (state) {
    if (state.dataAll.length === 0) {
      return []
    }
    return state.dataAll.rateMonths.slice(0, 2)
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations,
  getters
})
