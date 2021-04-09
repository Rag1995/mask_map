<template>
  <div class="home full-container">
    <div class="map-container">
      <my-map></my-map>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    'my-map': () => import('@/components/map'),
  }
}
</script>
