import { fetchGet } from '../config'

export default {
  getListTrans () {
    return fetchGet('/index/channel/xjk-floor', {callback: '_jsonp2whlj03ns5x'})
  },
  getTransInfo1 () {
    return fetchGet('/index/channel/xjk-floor/licai-list?type=0', {callback: '_jsonpyz48ia1glqa'})
  },
  getTransInfo2 () {
    return fetchGet('/index/channel/xjk-floor/licai-list?type=1', {callback: '_jsonplclb32eksc'})
  },
  getTransInfo3 () {
    return fetchGet('/index/channel/xjk-floor/licai-list?type=2', {callback: '_jsonpznufrwy81p'})
  },
  getTransInfo4 () {
    return fetchGet('/index/channel/xjk-floor/tslc', {callback: '_jsonp5hmu8xwtcf'})
  },
  getListWhite () {
    return fetchGet('/index/channel/baitiao-floor', {callback: '_jsonpohrwigpe62'})
  },
  getWhiteTop () {
    return fetchGet('/index/channel/baitiao-floor/shop', {callback: '_jsonp4tvlftc9qng'})
  },
  getWhiteBottom () {
    return fetchGet('/index/channel/baitiao-floor/shop-bottom', {callback: '_jsonpywwu5drxfhm'})
  },
  getListFund () {
    return fetchGet('/index/channel/zc-floor', {callback: '_jsonptbjbimjb3kl'})
  },
  getListInsu () {
    return fetchGet('/index/channel/bao-floor', {callback: '_jsonp7c0qdn3ehzu'})
  },
  getListPay () {
    return fetchGet('/index/channel/pay-floor', {callback: '_jsonpkoy0snmnph'})
  },
  getListShare () {
    return fetchGet('/index/channel/stock-floor', {callback: '_jsonp1hrmelmj2bh'})
  },
  getShareNum () {
    return fetchGet('/index/channel/stock-floor/quote', {callback: '_jsonp1hrmelmj2bh'})
  }
}
