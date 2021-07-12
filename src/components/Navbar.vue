<template>
  <div class="nav">
    <div>
      <route link-text="Vue js " class-name="nav-text nav-item" />
    </div>
    <div class="main-links">
      <router-link :to="{ name: 'home' }" tag="div" class="nav-item">
        Home
      </router-link>
      <router-link :to="{ name: 'modify' }" tag="div" class="nav-item">
        Edit / Delete
      </router-link>
      <router-link :to="{ name: 'create' }" tag="div" class="nav-item">
        Create new
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Route from '@/components/Route.vue';
@Component({
  components: { Route }
})
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/navbar';
</style>
