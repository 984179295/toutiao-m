import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载动态设置 REM 基准值
import 'amfe-flexible'
// 导入vant
import './plugins/vant.js'

// 加载全局样式
import './styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
