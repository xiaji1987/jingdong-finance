import api from '../../../api/index'
const state = {
  data: [],
  dataBottom: []
}

const actions = {
  getAllMenuRight ({commit}) {
    api.getMenuRight().then(res => {
      // console.log(res.data)
      commit('getAllMenuRight', res)
    })
    api.getRightIcon().then(res => {
      // console.log(res.data)
      commit('getRightIcon', res)
    })
  }
}

const mutations = {
  getAllMenuRight (state, res) {
    state.data = res.data
  },
  getRightIcon (state, res) {
    state.dataBottom = res.data
  }
}
const getters = {
  getBottomIcon: function (state) {
    if (state.dataBottom.length === 0) {
      return []
    }
    let arr = [state.dataBottom.slice(0, 8), state.dataBottom.slice(8, state.dataBottom.length)]
    // console.log(arr)
    return arr
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations,
  getters
})
