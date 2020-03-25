<template>
  <div id="app">
    <component :is="layout"/>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
