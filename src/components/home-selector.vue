<template>
  <section class="home-menu">
      <ul>
          <li class="your-element" v-for="(option, index) in options" :key="index">
                <router-link :to=" { name: option.slug }">
                    <span class="slug">.{{option.name}}</span>
                    <span class="category">{{option.category}}</span>
                </router-link>
            </li>
        </ul>
  </section>
</template>

<script>
import VanillaTilt from "../libs/swag";

export default {
  mounted() {
    VanillaTilt.init(document.querySelectorAll(".your-element a"), {
      max: 10,
      speed: 400,
      scale: 1.08,
      glare: true,
      "max-glare": 0.1
    });
  },
  data: function() {
    return {
      options: [
        {
          category: "user_interface",
          slug: "ui",
          name: "ui",
        },
        {
          category: "logo_design",
          slug: "logos",
          name: "ui",
        },
        {
          category: "projects",
          slug: "projects",
          name: "proj"
        }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1400px;
  width: 80%;
  flex-wrap: wrap;
}
li {
  display: flex;
  width: 30%;
  max-width: 440px;
  max-height: 658px;
}
li a {
  background: #000000;
  display: flex;
  color: #ffffff;
  text-decoration: none;
  width: 100%;
  height: 100%;
  font-family: "Ayuthaya";
  will-change: transform;
}
span.category {
  /* text-orientation: upright; */
  writing-mode: vertical-rl;
  align-self: flex-start;
  transform: rotate(-180deg);
  font-size: 1.5vw;
  padding: 20px 5px;
}
span.slug {
  padding-top: 130%;
  width: 100%;
  align-self: flex-end;
  font-size: 4.1vw;
}
@media all and (max-width: 1024px) {
  li {
    width: 100%;
    margin: 10px;
  }
  span.slug {
    font-size: 8.1vw;
  }
  span.category {
    font-size: 5.1vw;
  }
}
</style>
