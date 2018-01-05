<template>
  <header>
      <h1>Arsenic<div @click="toggleMenu"><span>.{{ currentRoute }}</span><DropDownMenu></DropDownMenu></div></h1>
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
    overflow: visible;
}
h1 {
    padding: 0;
    margin: 0;
    padding-top: 50px;
    padding-bottom: 50px;
}
div {
    display: inline-block;
    position: relative;
    cursor: pointer;
}
@media all and (max-width: 500px) {
    h1 {
        font-size: 1.5em;
    }
}
</style>
