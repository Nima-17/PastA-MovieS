<script>
import axios from 'axios'
import headerPage from '../../components/headerPage.vue'

export default {
  components: {
    headerPage
  },

  data() {
    return {
      posts: []
    }
  },

  mounted() {
    axios
      .get('https://api.themoviedb.org/3/tv/airing_today?api_key=e31e495fe47500767004b1e3d20123a2')
      .then((res) => {
        this.posts = res.data.results
      })
  }
}
</script>
<template>
  <headerPage></headerPage>
  <section class="grid grid-rows-5 grid-cols-4 gap-4 p-3 text-center">
    <div
      class="shadow-2xl cursor-pointer text-black font-semibold shadow-indigo-400 relative"
      v-for="post in posts"
      :key="post.id"
    >
      <div class="back-glass flex justify-center items-end absolute right-0 top-0 left-0 bottom-0">
        <p class="w-full bg-white">{{ post.name }}</p>
        <p class="w-full bg-white">{{ post.first_air_date }}</p>
      </div>
      <img class="image" v-bind:src="'https://image.tmdb.org/t/p/original' + post.poster_path" />
    </div>
  </section>
</template>

<style scoped>
.back-glass {
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.28);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
}

.image {
  height: 60vh;
  width: 100%;
}
</style>
