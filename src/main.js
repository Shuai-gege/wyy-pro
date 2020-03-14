import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import "@/permission"

import 'lib-flexible/flexible' //px转为rem
//axios
import http from "./common/axios";
Vue.prototype.axios = http;
//瀑布流插件
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);




Vue.config.productionTip = false
console.log("mian中打印的变量", process.env)
console.log(process.env.BASE_URL)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')