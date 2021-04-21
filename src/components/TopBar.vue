<template>
  <div>
    <div  class="topbar">
      <div class="topbar-sidebar-toggle">
        <img src="@/assets/icons/donot.svg" alt="" @click="$emit('toggleSidebar')">
      </div>
      <search-bar class="topbar-search" />
      <div class="topbar-others">
        <div class="topbar-item notification">
          <span @click="toggleNotification">
            <img src="@/assets/icons/notification.svg" alt="" class="notification-img">
            <div class="notification-text">3</div>
            </span>
          <notifications v-if="showNotification" />
        </div>
        <div class="topbar-item user">
        <div class="user-image">
          <img src="@/assets/images/alita.jpg" alt="user">
          <div class="user-image-dot"></div>
        </div>
        <div class="user-name">
          Abigail
          <img src="@/assets/icons/caret-down.svg" alt="">
        </div>
      </div>
      </div>
    </div>
    <search-bar class="search" />
  </div>
</template>

<script>
  import SearchBar from "./SearchBar";
  import Notifications  from "./Notifications";
  export default {
    name: "TopBar",
    components: {Notifications, SearchBar},
    data(){
      return {
        showNotification: false,
      }
    },
    methods: {
      toggleNotification() {
        this.showNotification = !this.showNotification;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .topbar {
    display: flex;
    justify-content: flex-end;
    margin: 1rem;
    align-items: center;
    @include respond(tab-land){
      display: flex;
      justify-content: space-between;
    }
    &-item {
      margin: 0 0.5rem;
      cursor: pointer;
    }
    &-sidebar-toggle {
      display: none;
      margin-right: 1rem;
      img {
        height: 1.5rem;
      }
      @include respond(tab-land){
        display: block;
      }
    }
    &-search{
      @include respond(tab-land) {
        display: none;
      }
    }
    &-others {
      display: flex;
      flex-wrap: nowrap;
    }
  }
  .search {
    display: none;
    @include respond(tab-land){
      display: block;
      width: 100%;
      padding: 1rem 2rem 3rem;
    }
    @include respond(smart-phone){
      padding: 1rem 1rem 3rem;
    }
  }
  .notification{
    position: relative;
    &-img {
      width: 2.5rem;
      height: 2.5rem;
    }
    &-text {
      bottom: 0.5rem;
      right: 0.25rem;
      position: absolute;
      font-size: 0.75rem;
      font-weight: bold;
      color: $color-white;
      text-align: center;
      line-height: 1rem;
      height: 1rem;
      width: 1rem;
      background-color: $color-red;
      border-radius: 50%;
    }
  }
  .user {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    &-image {
      position: relative;
      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
      }
      &-dot {
        position: absolute;
        bottom: 0.35rem;
        border-radius: 50%;
        right: 0;
        height: 0.75rem;
        width: 0.75rem;
        background-color: $color-green;
      }
    }
    &-name{
      margin-left: 1rem;
      color: $color-primary;
      white-space: nowrap;
      img{
        width: auto;
        height: 0.5rem;
      }
    }
  }
</style>
