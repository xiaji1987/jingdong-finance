import { fetchGet } from '../config'

export default {
  getShopRem () {
    return fetchGet('/index/channel/goodsGroup-floor', {callback: '_jsonpu86eq39b08l'})
  },
  getShopListFir () {
    return fetchGet('/index/channel/goods-floor', {'page=1&pageSize=12&callback': '_jsonpz1gfll12o0j'})
  },
  getShopListSec () {
    return fetchGet('/index/channel/goods-floor', {'page=1&pageSize=12&callback': '_jsonpz1gfll12o0j'})
  },
  getShopListThi () {
    return fetchGet('/index/channel/goods-floor', {'page=1&pageSize=12&callback': '_jsonpz1gfll12o0j'})
  },
  getShopListFou () {
    return fetchGet('/index/channel/goods-floor', {'page=1&pageSize=12&callback': '_jsonpz1gfll12o0j'})
  },
  getShopListFiv () {
    return fetchGet('/index/channel/goods-floor', {'page=1&pageSize=12&callback': '_jsonpz1gfll12o0j'})
  }
}
