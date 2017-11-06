<template>
  <div class="page">
    <header-with-menu/>
    <home-selector/>
  </div>
</template>

<script>
import HeaderWithMenu from '../components/header.vue'
import HomeSelector from '../components/home-selector.vue'
export default {
  components: {
    HeaderWithMenu,
    HomeSelector
  }
}
</script>
