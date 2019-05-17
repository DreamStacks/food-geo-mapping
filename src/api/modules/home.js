import api from '../index'

class Service {
  constructor(http) {
    this.http = http
  }

  // 获取APP 列表
  fetchTopics(cookie) {
    return api({
      url: '/api/v1/topics',
      method: 'get'
    })
  }

  // 获取实例信息
  fetchTopicDetail(data, cookie) {
    return api({
      url: `/api/v1/topic/${data.id}`,
      method: 'get'
    })
  }
}

export default new Service(api)
