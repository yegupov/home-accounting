<template lang="html">
  <div class="app-main-layout">
    <Navbar @hideSidebar="isOpenSidebar = !isOpenSidebar" />
    <Sidebar v-if="isOpenSidebar" :openSidebar="isOpenSidebar"/>

    <main class="app-content" :class="{full: !isOpenSidebar}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue'
import Sidebar from '@/components/app/Sidebar.vue'

export default {
  name: 'main-layout',
  data: () => ({
    isOpenSidebar: true
  }),
  components: {
    Navbar, Sidebar
  }
}
</script>

<style lang="scss" scoped>
</style>
