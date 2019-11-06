import Mock from 'mockjs'
import finance from './finance/index'

// 延时200-600毫秒请求到数据
Mock.setup({
  timeout: '200-600'
})

const mocks = [
  ...finance
]

mocks.forEach(route => {
  Mock.mock(route.url, route.type, route.response)
})