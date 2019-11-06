import { fetchGet } from '../config'

export default {
  getMenuPendant () {
    return fetchGet('/index/channel/firstleft', {callback: '_jsonpiu1g0rrcfyd'})
  },
  getMenuLeft () {
    return fetchGet('/index/nav', {callback: '_jsonpcedwu266ush'})
  }
}
