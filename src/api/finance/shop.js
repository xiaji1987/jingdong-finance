import { fetchGet } from '../config'

export default {
  getShopRem () {
    return fetchGet('/index/channel/goodsGroup-floor', {callback: '_jsonpu86eq39b08l'})
  },
  getShopListFir () {
    return fetchGet('/index/channel/goods-floor', {'page=1&pageSize=12&callback': '_jsonpz1gfll12o0j'})
  },
  getShopListSec () {
    return fetchGet('/index/channel/goods-floor', {'page=2&pageSize=12&callback': '_jsonpw17du24tfy'})
  },
  getShopListThi () {
    return fetchGet('/index/channel/goods-floor', {'page=3&pageSize=12&callback': '_jsonpjcwos0uegbg'})
  },
  getShopListFou () {
    return fetchGet('/index/channel/goods-floor', {'page=4&pageSize=12&callback': '_jsonpteq8x57znpp'})
  },
  getShopListFiv () {
    return fetchGet('/index/channel/goods-floor', {'page=5&pageSize=12&callback': '_jsonp48cicg6s5px'})
  }
}
