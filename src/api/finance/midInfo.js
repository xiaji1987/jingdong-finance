import { fetchGet } from '../config'

export default {
  getInfoHeader () {
    return fetchGet('/index/channel/news', {callback: '_jsonplokvviqlylo'})
  },
  getMidLeft () {
    return fetchGet('/index/channel/vip-user', {callback: '_jsonpa9nwkbg'})
  },
  getMidInfo () {
    return fetchGet('/index/channel/vip-mission', {callback: '_jsonph2bpdyw1jth'})
  },
  getMidRight () {
    return fetchGet('/index/channel/app', {callback: '_jsonptm79qtni0z'})
  },
  getMidBottom () {
    return fetchGet('/index/channel/coupon', {callback: '_jsonplapx7k23aqd'})
  }
}
