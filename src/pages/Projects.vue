<template>
  <Layout>
    <home-selector/>
    <div class="projects">
      <div class="project" v-for="(project, index) in projects" :key="index">
        <a :href="'/images/projects/' + project.image + '.jpeg'"><img :src="'/images/projects/' + project.image + '.jpeg'"/></a>
      </div>
    </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../layouts/main.vue'
import HomeSelector from '../components/home-selector.vue'
import { projects } from '../data/projects.json'

export default {
      head: {
    title: 'Arsenic.projects'
  },
  data: function() {
    return {
      projects
    }
  },
  components: {
    Layout
  }
}
</script>

<style scoped>
  .project {
    width: 100%;
  }
  .project img {
    width:100%;
  }
</style>
