<template>
  <div class="image">
    <div class="image-main">
      <img :src="currentImage.urls.full" alt="" class="image-img">
    </div>
    <div class="image-info">
      <div class="image-info-name">{{ currentImage.user.first_name }}, {{ currentImage.user.total_likes }}</div>
      <div class="image-info-location">
        <img src="@/assets/icons/location.svg" alt="">
        {{ currentImage.user.location }}
      </div>
      <div class="image-buttons">
        <button class="btn btn-icon btn-like" @click="likeImage">
          <img v-if="currentImage.liked_by_user" src="@/assets/icons/heart-filled-ash.svg" alt="">
          <img v-else src="@/assets/icons/heart.svg" alt="">

        </button>
        <button class="btn btn-icon btn-thumb-down">
          <img src="@/assets/icons/thumb-down.svg" alt="">
        </button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "ImageResult",
    props: {
      currentImage: {
        required: true,
        type: Object,
      }
    },
    methods: {
      likeImage() {
        this.$axios.post(`/photos/${this.currentImage.id}/like`)
      }
    }
  }
</script>

<style lang="scss" scoped>
.image{
  display: inline-block;
  cursor: pointer;
  width: 200px;
  height: 270px;
  position: relative;
  margin: 1.5rem 1rem;
  box-shadow: 0px 10px 35px rgba(73, 130, 255, 0.15);
  &-main {
    img {
      width: 200px;
      height: 270px;
      object-fit: cover;
      border-radius: 10px;
    }
   }
  &-info {
    position: absolute;
    padding: 0.5rem 1rem 1rem;
    bottom: 0;
    color: $color-white;
    width: 100%;
    font-size: 1.5rem;
    &-location {
      font-size: 0.85rem;
      margin-top: 0.25rem;
      img {
        width: 0.75rem;
      }
    }
  }
  &-buttons {
    margin-top: 1rem;
    .btn {
      padding: 0.25rem 1.5rem;
      border-radius: 2px;
      img {
        width: 1rem;
      }
    }
    .btn-like {
      background-color: $color-red;
      margin-right: 0.5rem;
    }
    .btn-thumb-down {
      background-color: $color-primary;
    }

  }
  &:hover > button {
    display: none;
  }
  &:hover  .btn {
    display: inline-block;
  }

}
.image .image-info .image-buttons {
  display: none;
}
.image:hover .image-info .image-buttons {
  display: block;
}
.image:hover .image-info {
  color: $color-primary;
  background-color: $color-white;
}
.image:hover .image-info .image-info-location {
  coloe: $color-text;
}
</style>
