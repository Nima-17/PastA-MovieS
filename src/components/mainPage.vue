<script></script>
<template>
  <main>
    <section
      style="height: 91vh"
      class="lg:flex lg:justify-around lg:items-center grid grid-rows-2 grid-cols-1 p-7 lg:p-0"
    >
      <!-- Left Part -->
      <div class="text-center lg:text-lg md:text-lg sm:text-lg text-sm text-indigo-400">
        <h1 class="text-3xl tracking-wide">TV</h1>
        <div class="my-2"></div>
        <!-- bottom -->
        <RouterLink to="/tv/airing-today">
          <div
            id="items"
            class="flex w-full md:w-full rounded-md shadow-lg hover:shadow-indigo-400 hover:scale-105 hover:cursor-pointer transition-all p-8 justify-center"
          >
            Airing Today
          </div>
        </RouterLink>
        <div class="my-2"></div>
        <!-- top -->
        <div class="flex">
          <RouterLink to="/tv/ontv">
            <div
              id="items"
              class="lg:w-36 md:w-full w-full rounded-md shadow-lg hover:shadow-indigo-400 p-8 hover:scale-105 hover:cursor-pointer transition-all"
            >
              On TV
            </div>
          </RouterLink>
          <div class="mx-1"></div>
          <RouterLink class="lg:w-72 md:w-3/5 sm:w-full w-60" to="/tv/popular">
            <div
              id="items"
              class="lg:w-72 md:w-3/5 sm:w-full w-60 rounded-md shadow-lg hover:shadow-indigo-400 hover:scale-105 hover:cursor-pointer transition-all p-8"
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
        <h1 class="text-3xl tracking-wide">Movies</h1>
        <div class="my-2"></div>
        <!-- top -->
        <div class="flex">
          <RouterLink to="/movie/top-rated">
            <div
              id="items"
              class="lg:w-72 md:w-3/5 sm:w-full w-56 rounded-md p-8 shadow-lg hover:shadow-indigo-400 hover:scale-105 hover:cursor-pointer transition-all"
            >
              Top Rated
            </div>
          </RouterLink>
          <div class="mx-1"></div>
          <RouterLink to="/movie/popular">
            <div
              id="items"
              class="lg:w-36 md:w-full w-full rounded-md shadow-lg hover:shadow-indigo-400 hover:scale-105 hover:cursor-pointer transition-all p-8"
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
            class="flex rounded-md shadow-lg hover:shadow-indigo-400 hover:scale-105 hover:cursor-pointer transition-all p-8 justify-center"
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
}

#items:hover {
  background-color: #443c68;
}
</style>
