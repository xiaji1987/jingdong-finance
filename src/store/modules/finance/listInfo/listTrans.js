import api from '../../../../api/index'
const state = {
  data: [],
  dataInfo: []
}
// const arr = ['getTransInfo1', 'getTransInfo2', 'getTransInfo3', 'getTransInfo4']
const actions = {
  getAllListTrans ({commit}) {
    api.getListTrans().then(res => {
      // console.log(res.data)
      commit('getAllListTrans', res)
    })
  }
}

const mutations = {
  getAllListTrans (state, res) {
    state.data = res.data
  },
  getAllTransInfo (state, res) {
    state.dataInfo.push(res)
    console.log(state.dataInfo)
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})
