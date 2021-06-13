<template>
  <div class="home full-container overflow-hidden">
    <app-drawer />
    <app-map />
  </div>
</template>

<script>
export default {
  components: {
    "app-map": () => import("../components/app-map"),
    "app-drawer": () => import("../components/app-drawer"),
  },
};
</script>
