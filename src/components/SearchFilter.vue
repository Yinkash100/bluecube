<template>
  <div class="searchfilter">
    <div class="searchfilter-inputs">

      <select name="" id="" class="form__select"  @change="searchImage(value)">
        <option value="world" selected>World</option>
        <option value="africa">Africa</option>
        <option value="africa">Asia</option>
        <option value="europe">Europe</option>
        <option value="america">America</option>
      </select>
      <select name="" id="" class="form__select">
        <option value="following" selected>Following</option>
        <option value="not following">Not Following</option>
      </select>
      <select name="" id="" class="form__select" @change="searchImage(this.value)">
        <option value="popular" selected>Popular</option>
        <option value="unpopular">Unpopular</option>
      </select>
      <select name="" id="" class="form__select">
        <option value="post" selected>Post</option>
      </select>
      <select name="" id="" class="form__select">
        <option value="location" selected>Location</option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchFilter",
    data(){
      return {
        searchItem: '',
        location: null,
      }
    },
    methods: {
      async searchImage() {
        const searchUrl = this.$store.state.currentUrl + '+' + this.searchItem;
        await this.$axios.get(searchUrl).then((resp) => {
          this.$store.commit('updateImages', resp.data.results);
          this.$store.commit('changeUrl', searchUrl);
        }).catch((error) => {
          console.log('An error occured /n ', error)
        });
      }
    },

  }
</script>

<style lang="scss" scoped>
.searchfilter {
  &-inputs {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    padding: 1rem;
  }
  select {
    display: inline-block;
    border-radius: 0;
    margin-right: -1px;

  }
}
</style>
