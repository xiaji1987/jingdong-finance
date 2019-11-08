import { fetchGet } from '../config'

export default {
  getInfoHeader () {
    return fetchGet('/index/channel/news', {callback: '_jsonplokvviqlylo'})
  }
}
