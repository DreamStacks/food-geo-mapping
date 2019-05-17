import api from '@api/home'

export default {
  FETCH_TOPICS_LIST: ({ commit, state }, { cookies }) => {
    return state.topicsList
      ? Promise.resolve()
      : api.fetchTopics({ cookies }).then(res => {
        commit('SET_TOPICS_LIST', { list: res.data })
      })
  },
  FETCH_TOPIC_DETAIL: ({ commit }, { id, cookies }) => {
    return api.fetchTopicDetail({ id, cookies }).then(res =>
      commit('SET_TOPIC_DETAIL', { detail: res.data })
    )
  }
}
