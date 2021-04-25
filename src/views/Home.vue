<template>
  <div class="home full-container">
    <my-map></my-map>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    'my-map': () => import('@/components/map'),
  },
  methods: {
  }
}
</script>
