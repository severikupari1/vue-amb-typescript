<template>
  <img :src="imageSrc" :class="className" :alt="alt" />
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default Vue.component('CustomImage', {
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: 'nav-item'
    },
    alt: {
      type: String,
      default: ''
    }
  }
})
</script>
