<script></script>
<template>
  <footer class="bg-transparent text-sm text-indigo-900 lg:p-1 p-1">
    <seciton class="flex justify-center font-semibold items-center">
      <div class="text-shadow">
        <font-awesome-icon size="lg" class="text-shadow mr-1" icon="fa-solid fa-code" />
        <a href="https://github.com/Nima-17/PastA-MovieS">GitHub</a>
      </div>
      <div class="mx-3 lg:mx-9"></div>
      <div class="text-shadow">
        <font-awesome-icon size="lg" class="text-shadow mr-1" icon="fa-brands fa-instagram" />
        <a href="https://www.instagram.com/_ni.ma___/">Instagram</a>
      </div>
      <div class="mx-3 lg:mx-9"></div>
      <div class="text-shadow">
        <font-awesome-icon size="lg" class="text-shadow mr-1" icon="fa-brands fa-twitter" />
        <a href="https://twitter.com/NK48741762">Twitter</a>
      </div>
      <div class="mx-3 lg:mx-9"></div>
      <div class="text-shadow">
        <RouterLink to="/contact">
          <font-awesome-icon size="lg" class="text-shadow mr-1" icon="fa-solid fa-phone" />
          <span>Contact</span>
        </RouterLink>
      </div>
    </seciton>
  </footer>
</template>
<style scoped>
.text-shadow {
  cursor: pointer;
}
.text-shadow:hover {
  text-shadow: 1px 1px 15px rgb(102, 115, 236);
  color: rgb(129 140 248);
  transition: 0.5s ease;
}
</style>
