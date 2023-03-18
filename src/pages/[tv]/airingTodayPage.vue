<script>
import axios from 'axios'
import headerPage from '../../components/headerPage.vue'
import '../../assets/base.css'

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
  <section class="grid grid-rows-5 grid-cols-4 gap-3 p-3 text-center">
    <div
      id="card"
      class="shadow-2xl text-white font-semibold shadow-indigo-400 relative"
      v-for="post in posts"
      :key="post.id"
    >
      <div
        class="back-glass flex justify-center items-center absolute right-0 top-0 left-0 bottom-0"
      >
        <p id="name" class="p-1">
          Name: <br />
          {{ post.name }} <br />
          Release Date: <br />
          {{ post.release_date }}
        </p>
      </div>
      <img class="image" v-bind:src="'https://image.tmdb.org/t/p/original' + post.poster_path" />
    </div>
  </section>
</template>

<style scoped></style>
