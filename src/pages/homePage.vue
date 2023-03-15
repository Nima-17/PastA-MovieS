<script>
import footerPage from '../components/footerPage.vue'
import mainPage from '../components/mainPage.vue'
import headerPage from '../components/headerPage.vue'

export default {
  components: {
    headerPage,
    mainPage,
    footerPage
  }
}
</script>
<template>
    <headerPage />
    <mainPage />
    <footerPage />
</template>
