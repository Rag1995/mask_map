<template>
  <mask-left-container>
    <template #img>
      <b-skeleton type="avatar" height="56px" width="56px"></b-skeleton>
    </template>

    <template #value>
      <b-skeleton height="28px" width="90px" class="mt-1 mb-2" />
    </template>

    <template #label>
      <b-skeleton width="65%" />
    </template>
  </mask-left-container>
</template>

<script>
export default {
  components: {
    "mask-left-container": () => import("@/components/mask-left-container.vue"),
  },
};
</script>
