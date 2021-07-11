<template>
  <router-link :to="{ name: 'home' }" :tag="tag" :class="className">
    {{ linkText }}
  </router-link>
</template>
<script lang="ts">
export default {
  name: 'route',
  props: {
    linkText: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>
