import Vue from 'vue'
import App from './App.vue'
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
