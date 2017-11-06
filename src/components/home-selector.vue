<template>
  <section class="home-menu">
      <ul>
          <li v-for="option in options">
                <span class="slug">{{option.slug}}</span>
                <span class="category">{{option.category}}</span>
            </li>
        </ul>
  </section>
</template>

<script>
export default {
  data: function() {
      return {
          options: [{
              category: 'user_interface',
              slug: 'ui'
          }, {
              category: 'logo_design',
              slug: 'logo'
          }, {
              category: 'projects',
              slug: 'proj'
          }]
      }
  }
}
</script>

<style scoped>
    ul {
        display: flex;
        list-style-type: none;
        box-sizing: border-box;
        padding: 0;
        justify-content: space-around;
        margin: 0 auto;
    }
    li {
        background: #000000;
        color: #ffffff;
        display: flex;
        width: 33%;
        padding: 20px;
        max-width: 440px;
    }
    span.category {
        padding: 20px;
        text-orientation: upright;
        writing-mode: vertical-rl;
    }
    span.slug {
        padding-top: 150%;
        width: 100%;
        align-self: flex-end;
    }
    
</style>
