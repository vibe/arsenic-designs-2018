<template>
  <div class="page">
    <header-with-menu/>
    <slot></slot>
  </div>
</template>

<script>
import HeaderWithMenu from '../components/header.vue'

export default {
  components: {
        HeaderWithMenu
    }
}
</script>
