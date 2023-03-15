<script></script>
<template>
  <main>
    <section
      style="height: 49rem"
      class="flex lg:flex-row flex-col p-7 items-center justify-around"
    >
      <!-- Left Part -->
      <div class="text-center lg:text-lg md:text-lg sm:text-lg text-sm text-indigo-400">
        <h1 class="text-3xl tracking-wide cursor-default">TV</h1>
        <div class="my-2"></div>
        <RouterLink to="/tv/airing-today">
          <div
            id="items"
            class="tv-Airing rounded-md shadow-lg hover:shadow-indigo-400 hover:scale-105 hover:cursor-pointer transition-all"
          >
            Airing Today
          </div>
        </RouterLink>
        <div class="my-2"></div>
        <div class="flex">
          <RouterLink to="/tv/ontv">
            <div
              id="items"
              class="tv-OnTV w-fit rounded-md shadow-lg hover:shadow-indigo-400 hover:scale-105 hover:cursor-pointer transition-all"
            >
              On TV
            </div>
          </RouterLink>
          <div class="mx-1"></div>
          <RouterLink to="/tv/popular">
            <div
              id="items"
              class="tv-popular w-fit rounded-md shadow-lg hover:shadow-indigo-400 hover:scale-105 hover:cursor-pointer transition-all"
            >
              Popular
            </div>
          </RouterLink>
        </div>
      </div>
      <!-- Right Part -->
      <div
        class="text-center mt-6 lg:mt-0 lg:text-lg md:text-lg sm:text-lg text-sm text-indigo-400"
      >
        <h1 class="text-3xl tracking-wide cursor-default">Movies</h1>
        <div class="my-2"></div>
        <!-- top -->
        <div class="flex">
          <RouterLink to="/movie/top-rated">
            <div
              id="items"
              class="movie-top rounded-md shadow-lg hover:shadow-indigo-400 hover:scale-105 hover:cursor-pointer transition-all"
            >
              Top Rated
            </div>
          </RouterLink>
          <div class="mx-1"></div>
          <RouterLink to="/movie/popular">
            <div
              id="items"
              class="movie-popular rounded-md shadow-lg hover:shadow-indigo-400 hover:scale-105 hover:cursor-pointer transition-all"
            >
              Popular
            </div>
          </RouterLink>
        </div>
        <div class="my-2"></div>
        <!-- bottom -->
        <RouterLink to="/movie/now-playing">
          <div
            id="items"
            class="movie-now flex rounded-md shadow-lg hover:shadow-indigo-400 hover:scale-105 hover:cursor-pointer transition-all justify-center"
          >
            Now Playing
          </div>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
#items {
  background-color: #393053;
  padding: 2rem;
}

#items:hover {
  background-color: #443c68;
}
</style>
