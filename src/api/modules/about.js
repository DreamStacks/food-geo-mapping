import api from '../index'

class Service {
  constructor(http) {
    this.http = http
  }

  // 获取 Changelog
  fetchChangeLog() {
    return api({
      url: 'https://api.github.com/repos/DreamStacks/food-geo-mapping/contents/CHANGELOG.md?ref=master',
      method: 'get',
      withCredentials: false
    })
  }
}

export default new Service(api)
