<template>
  <div id="app" class="app">
    <div class="app-sidebar" :class="showSidebar ? 'show-sidebar' : '' ">
      <side-bar @toggleSidebar="toggleShowSideBar" />
    </div>
    <div class="app-main">
      <top-bar @toggleSidebar="toggleShowSideBar" />
      <search-filter />
      <div class="images">
        <image-result v-for="(eachImage, index) in images" :key="index" :currentImage="eachImage" />
      </div>
    </div>
  </div>
</template>

<script>

import TopBar from "@/components/TopBar";
import SearchFilter from "./components/SearchFilter";
import ImageResult from "@/components/ImageResult";
import SideBar  from "@/components/SideBar";
import store from "@/vuex.js"
export default {
  name: 'App',
  components: {
    SideBar,
    ImageResult,
    SearchFilter,
    TopBar
  },
  store,
  data(){
    return {
      showSidebar: false,
    }
  },
  computed: {
    images(){
      return this.$store.state.images
    }
  },
  async mounted() {
    await this.$axios.get('/search/photos?query=people').then((resp)=>{
      this.$store.commit('updateImages', resp.data.results);
    }).catch((error)=>{
      console.log('An error occured /n ', error)
    });
    // await this.$axios.get('/me').then((resp)=>{
    //   console.log('myself = ', resp.data);
    //   return resp.data
    // }).catch((error)=>{
    //   console.log('An error occured /n ', error)
    // });
  },
  methods: {
    toggleShowSideBar() {
      this.showSidebar = !this.showSidebar;
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
<style lang="scss" scoped>
.app{
  display: flex;
  flex-wrap: nowrap;
  &-sidebar{
    display: inline-block;
    background-color: $color-white;
    @include respond(tab-land){
      display: none;
    }
  }
  &-main{
    display: inline-block;
    width: calc(100vw - 300px);
    @include respond(tab-land){
      display: block;
      width: 100%;
    }
  }
}
.images {
  margin: 3rem 0;
}
.show-sidebar {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
}
</style>
