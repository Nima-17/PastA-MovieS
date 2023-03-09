<script></script>
<template>
  <nav class="text-indigo-400 flex justify-between p-1 items-center">
    <div class="flex">
      <div class="mx-3"></div>
      <button class="p-2 cursor-pointer">
        <font-awesome-icon size="lg" icon="fa-solid fa-sun" />
      </button>
    </div>
    <div class="flex text-center">
      <p class="text-shadow hover:shadow-indigo-400 shadow-lg transition hover:bg-indigo-500 text-indigo-200 ml-14 text-center cursor-default text-xl font-semibold">
        PastA MovieS
      </p>
    </div>
    <div class="flex">
      <button
        class="hover:shadow-indigo-400 shadow-lg transition hover:bg-indigo-500 rounded-md hover:text-white p-2"
      >
        Sign Up
      </button>
      <div class="divider mx-3"></div>
      <button
        class="hover:shadow-indigo-400 shadow-lg transition hover:bg-indigo-500 rounded-md hover:text-white p-2"
      >
        Sign In
      </button>
    </div>
  </nav>
</template>

<style scoped>
.text-shadow {
  text-shadow: 2px 2px 8px rgb(129 140 248);
}
.divider {
  border-right: 1px solid rgb(129 140 248);
}
</style>
