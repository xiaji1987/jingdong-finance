import api from '../../../../api/index'
const state = {
  dataList: []
}

const actions = {
  getAllShopList ({commit}, index) {
    api.getShopListFir().then(res => {
      console.log(res.data)
      commit('getAllShopList', res)
    })
    // setTimeout(() => {
    // api.getShopListSec().then(res => {
    //   console.log(res.data)
    //   commit('getShopListPush', res)
    // })
    // }, 5000)
  }
}

const mutations = {
  getAllShopList (state, res) {
    state.dataList = res.data
    // console.log(state.dataLeft)
  }// ,
  // getShopListPush (state, res) {
  //   state.dataList.goodThings.push(...res.data.goodThings)
  // }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})
