import { fetchGet } from '../config'

export default {
  getShopRem () {
    return fetchGet('/index/channel/goodsGroup-floor', {callback: '_jsonpu86eq39b08l'})
  },
  getShopList (page, arr) {
    return fetchGet('/index/channel/goods-floor', {[`page=${page}+&pageSize=12&callback`]: arr[page - 1]})
  }
}
