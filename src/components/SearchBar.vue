<template>
  <div class="searchbar">
    <div class="form__group">
      <div class="append__btn">
        <div>
          <img src="@/assets/icons/search.svg" alt="" class="prepend__btn-icon">
        </div>
        <input v-model="searchItem" type="text" class="form__input  append__input" @keyup.enter="searchImage()">
        <div class=" append__btn-icon">
          <button class="btn btn-primary" @click="searchImage()">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchBar",
    data(){
      return {
        searchItem: ''
      }
    },
    methods: {
      async searchImage() {
        const formattedSearchItem = this.URLify(this.searchItem)
        const searchUrl = `/search/photos?query=${formattedSearchItem}`;
        await this.$axios.get(searchUrl).then((resp)=>{
          this.$store.commit('updateImages', resp.data.results);
          this.$store.commit('changeUrl', formattedSearchItem);
        }).catch((error)=>{
          console.log('An error occured /n ', error)
        });
      },
      URLify(string) {
        return string.trim().replace(/\s/g, '%20');
      }
    }

  }
</script>

<style lang="scss" scoped>
.searchbar {
  width: 100%;
}
.form__input {
  padding-left: 3rem;
}
</style>
