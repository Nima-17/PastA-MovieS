<script></script>
<template>
  <nav class="text-indigo-400 flex justify-between p-3 items-center">
    <div>
      <router-link to="/">
        <font-awesome-icon size="lg" icon="fa-solid fa-home" />
      </router-link>
    </div>
    <div>
      <p class="text-shadow text-indigo-400 text-center cursor-default text-xl font-semibold">
        PastA MovieS
      </p>
    </div>
    <div>
      <router-link to="/">
        <font-awesome-icon class="transition-all" size="lg" icon="fa-solid fa-user" />
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.text-shadow {
  text-shadow: 1px 1px 15px rgb(129, 140, 248);
  transition: 0.5s ease;
}
.divider {
  border-right: 1px solid rgb(129 140 248);
}
</style>
