import { fetchGet } from '../config'

export default {
  getMenuPendant () {
    return fetchGet('/index/channel/firstleft', {callback: '_jsonpiu1g0rrcfyd'})
  },
  getMenuLeft () {
    return fetchGet('/index/nav', {callback: '_jsonpcedwu266ush'})
  },
  getRotationChart () {
    return fetchGet('/index/channel/banner-top', {callback: '_jsonpogbk7tvjfkk'})
  },
  getRotationBottom () {
    return fetchGet('/index/channel/banner-bottom', {callback: '_jsonp1acf5d8wpar'})
  },
  getMenuRight () {
    return fetchGet('/index/channel/yield', {callback: '_jsonps5n8fixhzz8'})
  },
  getRightIcon () {
    return fetchGet('/index/channel/class-icon', {callback: '_jsonpwjib4qp1ezi'})
  }
}
