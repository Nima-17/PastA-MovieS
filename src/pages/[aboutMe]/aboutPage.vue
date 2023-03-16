<script>
import headerPage from '../../components/headerPage.vue'

export default {
  components: {
    headerPage
  }
}
</script>
<template>
  <headerPage></headerPage>
  <div class="text-center cursor-default text-indigo-400 mt-24">
    <p class="text-shadow text-4xl tracking-wide font-bold">Get in touch!</p>
    <p class="text-shadow tracking-wider">Contact me for your a comments!!</p>
  </div>
  <div
    id="container"
    class="text-indigo-400 p-1 transition-all flex items-center justify-center mt-8"
  >
    <div
      class="text-center transition-alla cursor-default rounded-md hover:shadow-md hover:shadow-indigo-400 hover:bg-indigo-400 hover:text-indigo-900 p-4"
    >
      <font-awesome-icon size="lg" icon="fa-solid fa-map-location" />
      <p class="text-sm tracking-widest font-semibold mt-2 cursor-default">
        IR, KhorasanRazavi, Sabzevar
      </p>
    </div>
    <div class="margin mx-3"></div>
    <div
      class="text-center transition-alla cursor-default rounded-md hover:shadow-md hover:shadow-indigo-400 hover:bg-indigo-400 hover:text-indigo-900 p-4"
    >
      <font-awesome-icon size="lg" icon="fa-solid fa-phone" />
      <p class="text-sm font-semibold mt-2 cursor-default">09335563113</p>
    </div>
    <div class="margin mx-3"></div>
    <div
      class="text-center transition-alla cursor-default rounded-md hover:shadow-md hover:shadow-indigo-400 hover:bg-indigo-400 hover:text-indigo-900 p-4"
    >
      <font-awesome-icon size="lg" icon="fa-solid fa-message" />
      <p class="text-sm tracking-wider font-semibold mt-1 cursor-default">
        nimakadkhodazade22@gmail.com
      </p>
    </div>
  </div>
</template>
<style scoped>
@media screen and (max-width: 704px) {
  #container {
    display: flex;
    flex-direction: column;
  }

  .margin {
    margin-top: 20px;
  }
}
.text-shadow {
  text-shadow: 1px 1px 9px rgb(129, 140, 248);
}
.transition-alla {
  transition: all 0.25s ease;
}
</style>
