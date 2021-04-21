import Vue from 'vue'
import App from './App.vue'
import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = 'Client-ID lIgFgz0u4QleOUMZTmsvprwfsel2XDWeF6aNvS7M_Sc';
axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app');
