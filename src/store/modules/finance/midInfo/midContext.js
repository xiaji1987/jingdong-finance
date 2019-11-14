import api from '../../../../api/index'
const state = {
  dataLeft: [],
  dataMid: [],
  dataRight: [],
  dataBottom: []
}

const actions = {
  getAllMid ({commit}) {
    api.getMidLeft().then(res => {
      // console.log(res.data)
      commit('getAllMidLeft', res)
    })
    api.getMidInfo().then(res => {
      // console.log(res.data)
      commit('getAllMidInfo', res)
    })
    api.getMidRight().then(res => {
      // console.log(res.data)
      commit('getAllMidRight', res)
    })
    api.getMidBottom().then(res => {
      // console.log(res.data)
      commit('getAllBottom', res)
    })
  }
}

const mutations = {
  getAllMidLeft (state, res) {
    state.dataLeft = res.data
  },
  getAllMidInfo (state, res) {
    state.dataMid = res.data
  },
  getAllMidRight (state, res) {
    state.dataRight = res.data
  },
  getAllBottom (state, res) {
    state.dataBottom = res.data
  }
}

const getters = {
  getMidRightImg: function (state) {
    if (state.dataRight.length === 0) {
      return []
    }
    // console.log(state.dataRight[0])
    return state.dataRight[0]
  },
  getMidRightInfo: function (state) {
    if (state.dataRight.length === 0) {
      return []
    }
    // console.log(state.dataRight.slice(1, state.dataRight.length))
    return state.dataRight.slice(1, state.dataRight.length)
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations,
  getters
})
