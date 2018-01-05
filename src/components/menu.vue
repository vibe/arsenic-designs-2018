<template>
  <div class="menu" :class="{ activeMenu: menuIsActive}">
    <ul>
        <li v-for="(route, index) in menu" :key="index">
            <router-link :to="{ name: route }">.{{ route }}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
        routes: ['designs', 'ui', 'logos', 'projects']
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
    menuIsActive() {
        return this.$store.state.app.activeMenu;
    },
    menu() {
        return [this.currentRoute, ...this.routes.filter(route => route !== this.currentRoute)];
    },
  }
};
</script>


<style scoped>
.menu {
  display: inline-block;
  position: absolute;
  z-index: 1;
  left: 0;
  top: -50px;
  background: #000;
  transition: all .5s;
  height: 0;
  overflow: hidden;
}
ul {
  list-style-type: none;
  color: #ffffff;
  width: 100%;
  padding: 0;
  padding-top: 18px;
  padding-right: 50px;
}
li {
  text-align: left;
  padding-bottom: 10px;
}
li:first-child {
    padding-bottom: 25px;
}
a {
  text-decoration: none;
  color: #ffffff;
}
.activeMenu {
    height: 260px;
}
@media all and (max-width: 500px) {
    ul {
        padding-top: 26px;
    }
}
</style>