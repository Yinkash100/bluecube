import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentUrl: '/search/photos?query=people',
    images: [],
  },
  mutations: {
    changeUrl (state, newUrl){
      state.currentUrl = newUrl;
    },
    updateUrl (state, url) {
      state.currentUrl + url
    },
    updateImages (state, images){
      state.images = images
    },
    increment (state) {
      state.count++
    }
  }

});


export default store;
