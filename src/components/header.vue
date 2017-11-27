<template>
  <header>
      <h1>Aresnic<div @click="toggleMenu"><span>.{{ currentRoute }}</span><DropDownMenu></DropDownMenu></div></h1>
  </header>
</template>
<script>
import DropDownMenu from '../components/menu.vue';

export default {
    components: {
        DropDownMenu
    },
    computed: {
        currentRoute() {
            return this.$route.name;
        }
    },
    methods: {
        toggleMenu: function() {
            console.log('test');
            this.$store.dispatch('toggleMenu')
        }
    },
    mounted() {
        console.log(this.$route.name);
    }
}
</script>

<style scoped>
header {
    width: 100%;
    text-align: center;
    font-family: 'Ayuthaya';
    overflow: hidden;
}
h1 {
    padding: 0;
    margin: 0;
    padding-top: 50px;
    padding-bottom: 175px;
}
div {
    display: inline-block;
    position: relative;
    cursor: pointer;
}
</style>
