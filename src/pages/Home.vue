<template>
  <Layout>
    <home-selector/>
  </Layout>
</template>

<script>
import Layout from '../layouts/main.vue'
import HomeSelector from '../components/home-selector.vue'

export default {
    head: {
    title: 'Arsenic.designs'
  },
  components: {
    Layout,
    HomeSelector
  }
}
</script>
