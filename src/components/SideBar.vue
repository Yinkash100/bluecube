<template>
  <div class="sidebar">
    <div class="sidebar-toggle">
      <img src="@/assets/icons/cancel.svg" alt="" @click="$emit('toggleSidebar')">
    </div>
    <div class="sidebar-logo">
      <a href="#">
        <img src="@/assets/icons/octagon.svg" alt="">
        <span class="sidebar-logo-text">
          Bluecube
        </span>
      </a>
    </div>
    <ul class="sidebar-list">
      <li class="sidebar-list-item active">
        <a href="#" class="">
          <img src="@/assets/icons/home.svg" alt="">
          <span>
            Home
          </span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a href="#" >
          <img src="@/assets/icons/message.svg" alt="">
          <span>
            Message
          </span>
        </a>
      </li>
      <li class="sidebar-list-item sidebar-list-head">
        SHARE
      </li>
      <li class="sidebar-list-item">
        <a href="#" >
          <img src="@/assets/icons/ranking.svg" alt="">
          <span>
            Ranking
          </span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a href="#" >
          <img src="@/assets/icons/challenge.svg" alt="">
          <span>
            Challenge
          </span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a href="#" >
          <img src="@/assets/icons/party.svg" alt="">
          <span>
            Party
          </span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a href="#" >
          <img src="@/assets/icons/connect.svg" alt="">
          <span>
            Connect
          </span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a href="#" >
          <img src="@/assets/icons/parade.svg" alt="">
          <span>
            Parade
          </span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a href="#" >
          <img src="@/assets/icons/group.svg" alt="">
          <span>
            Group
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "SideBar"
  }
</script>

<style lang="scss" scoped>
.sidebar {
  width: 250px;
  margin: 3rem 2rem;
  padding-right: 50px;
  border-right: 1px solid $color-text;
  &-toggle {
    position: absolute;
    top: 1rem;
    right: 0.5rem;
    display: none;
    img {
      height: 1.5rem;
    }
    @include respond(tab-land){
      display: block;
    }
  }
  &-logo {
    color: $color-primary;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    img {
      height: 2rem;
      margin-right: 0.5rem;
    }
  }
  &-list {
    margin: 2rem 0;
    &-item {
      font-size: 1.2rem;
      padding: 1rem 2rem;
      img {
        height: 1rem;
        margin-right: 0.5rem;
      }

    }
    &-head {
      color: $color-black;
      font-weight: 900;
      padding: 1.5rem 2rem;
    }
    .active {
      border: 1px solid $color-text;
      border-radius: 5px;
      color: $color-primary;
    }
  }
}
</style>
