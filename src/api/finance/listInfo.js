import { fetchGet } from '../config'

export default {
  getListTrans () {
    return fetchGet('/index/channel/xjk-floor', {callback: '_jsonp2whlj03ns5x'})
  },
  getListWhite () {
    return fetchGet('/index/channel/baitiao-floor', {callback: '_jsonpohrwigpe62'})
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
  }
}
