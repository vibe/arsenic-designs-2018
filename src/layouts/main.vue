<template>
  <div class="page" :class="{ activeMenu: menuIsActive}">
    <slot></slot>
  </div>
</template>

<script>
import HeaderWithMenu from '../components/header.vue'

export default {
  components: {
        HeaderWithMenu
    },
    computed: {
      menuIsActive() {
        return this.$store.state.app.activeMenu;
    }
  }
}
</script>

<style scoped>
.page {
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  transition: all .3s;
}
.activeMenu {
  opacity: .3;
  transition: all .3s;
  pointer-events: none;
}

</style>