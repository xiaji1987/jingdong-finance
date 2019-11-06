import { fetchGetMock } from '../configMock'

export default {
  getTopBar () {
    return fetchGetMock('/api/finance/topbar')
  },
  getheaderBar () {
    return fetchGetMock('/api/finance/headerbar')
  }
}
