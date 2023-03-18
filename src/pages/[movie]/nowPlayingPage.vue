<script lang="js">
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
      .get('https://api.themoviedb.org/3/movie/now_playing?api_key=e31e495fe47500767004b1e3d20123a2')
      .then((res) => (this.posts = res.data.results))
  }
}
</script>

<template>
  <headerPage></headerPage>
  <section id="grid-container" class="p-3 text-center">
    <div
      id="card"
      class="shadow-2xl text-black font-semibold shadow-indigo-400 relative"
      v-for="post in posts"
      :key="post.id"
    >
      <div class="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
        <p id="name" class="p-1 text-white">
          Name: <br />
          {{ post.title }} <br />
          Release Date: <br />
          {{ post.release_date }}
        </p>
      </div>
      <img v-bind:src="'https://image.tmdb.org/t/p/original' + post.poster_path" />
    </div>
  </section>
</template>

<style scoped>
@media screen and (min-width: 704px) {
  #grid-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }
}

#name {
  opacity: 0;
  font-size: small;
  font-weight: 600;
  background: rgba(0, 0, 0, 0);
  border-radius: 4px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  text-shadow: 2px 2px 10px black;
}

#card:hover #name {
  opacity: 1;
  transition: all 0.25s ease-in;
}

#grid-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(5, minmax(0, 1fr));
  gap: 8px;
}
</style>
