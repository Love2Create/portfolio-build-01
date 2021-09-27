import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  data:{
    portfolio:[
    {name:'Detroit Red Wings Wallpapers', image: 'https://www.kaicheonglu.com/detroit-red-wings-wallpapers'},
    {name:'Spring Training Countdown Graphics', image:'https://www.kaicheonglu.com/spring-training-countdown-graphics'}
    ]
  },
  render: h => h(App)
}).$mount('#app')
