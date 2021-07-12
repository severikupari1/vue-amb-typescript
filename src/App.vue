<template>
  <div id="app" v-loading="isLoading">
    <navbar />
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import { namespace } from 'vuex-class';
const globalValues = namespace('globalValues');
@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  @globalValues.State
  public isLoading!: boolean;
}
</script>
