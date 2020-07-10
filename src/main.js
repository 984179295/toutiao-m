import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载vant 核心组件库
import Vant from 'vant'
import 'vant/lib/index.css'

// 全局css样式
import './styles/index.less'

// 动态设置Rem值
import 'amfe-flexible'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
