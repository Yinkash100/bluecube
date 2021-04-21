<template>
  <div class="notif">
    <div class="notif-item">
      <div class="notif-left">
        <div class="notif-image">
          <img src="@/assets/images/micheal.jpg" alt="">
        </div>
        <div class="notif-text">
          <div class="notif-text-text">Micheal liked you!</div>
          <div class="notif-text-time">About 20 minutes ago</div>
        </div>
      </div>
      <div class="notif-icon">
        <img src="@/assets/icons/heart-filled-ash.svg" alt="like">
      </div>
    </div>
    <div class="notif-item">
      <div class="notif-left">
        <div class="notif-image">
          <img src="@/assets/images/travis.jpg" alt="">
        </div>
        <div class="notif-text">
        <div class="notif-text-text">Jack liked you!</div>
        <div class="notif-text-time">About 40 minutes ago</div>
      </div>
      </div>
      <div class="notif-icon">
        <img src="@/assets/icons/heart-filled-red.svg" alt="like">
      </div>
    </div>
    <div class="notif-item">
      <div class="notif-left">
        <div class="notif-image">
          <img src="@/assets/images/travis.jpg" alt="">
        </div>
        <div class="notif-text">
        <div class="notif-text-text">Jack liked you!</div>
        <div class="notif-text-time">About 40 minutes ago</div>
      </div>
      </div>
      <div class="notif-icon">
        <img src="@/assets/icons/chat.svg" alt="like">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Notifications",
  }
</script>

<style lang="scss" scoped>
.notif {
  background-color: $color-white;
  border: 1px solid $color-text;
  border-radius: 7.5px;
  min-width: 300px;
  width: 100%;
  position: absolute;
  top: 4rem;
  z-index: 2;
  &-item {
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    &:not(last-child){
      border-bottom: 1px solid $color-text;
    }
  }
  &-left {
    display: flex;
  }
  &-text {
    margin: 0 1rem;
    &-text {
      font-size: 1.025rem;
      font-weight: bold;
      /*padding-bottom: 0.25rem;*/
    }
    &-time{
      font-weight: lighter;
    }
  }
  &-image {
    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    }
  }
  &-icon {
    img {
      height: 1rem;
    }
  }
}
</style>
