import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

// import './styles/index.scss' // global css
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

// 关闭生产模式下给出的提示
Vue.config.productionTip = true

// global loading
Vue.prototype.$loading = loading => {}

export function createApp() {
  const router = createRouter()
  const store = createStore()
  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
