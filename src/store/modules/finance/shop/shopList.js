import api from '../../../../api/index'
const state = {
  dataList: []
}
const arr = ['_jsonpz1gfll12o0j', '_jsonpw17du24tfy', '_jsonpjcwos0uegbg', '_jsonpteq8x57znpp', '_jsonp48cicg6s5px']
const actions = {
  getAllShopList ({commit}, page) {
    api.getShopList(page, arr).then(res => {
      // console.log(res.data)
      commit('getAllShopList', res)
    })
  }
}

const mutations = {
  getAllShopList (state, res) {
    state.dataList.push(...res.data.goodThings)
  }
}

export default ({
  namespaced: true,
  state,
  actions,
  mutations
})
