<script>
import headerPage from '../components/headerPage.vue'

export default {
  components: {
    headerPage
  }
}
</script>
<template>
  <headerPage></headerPage>
  <section
    class="flex text-3xl text-indigo-400 p-1 divide-x divide-indigo-400 h-screen justify-center items-center"
  >
    <div class="p-3">404</div>
    <div class="p-3">This page could not be found.</div>
  </section>
</template>
