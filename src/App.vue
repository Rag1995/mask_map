<template>
  <div id="app">
    <app-navbar />
    <router-view />
  </div>
</template>

<script>
export default {
  components: {
    "app-navbar": () => import("./components/app-navbar"),
  },
};
</script>
