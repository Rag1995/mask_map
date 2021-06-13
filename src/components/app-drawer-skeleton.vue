<template>
  <app-drawer-container>
    <template #name>
      <b-skeleton width="65%" />
    </template>

    <template #info>
      <b-skeleton width="85%" />
      <b-skeleton width="45%" />
    </template>

    <template #mask>
      <mask-left-skeleton v-for="i in 2" :key="i"></mask-left-skeleton>
    </template>

    <template #note>
      <p>
        <b-skeleton width="45%" />
      </p>
      <b-skeleton width="85%" />
      <b-skeleton width="65%" />
    </template>

    <template #open-on>
      <p>
        <b-skeleton width="45%" />
      </p>
      <b-skeleton-table
        :rows="3"
        :columns="7"
        :table-props="{
          bordered: true,
          responsive: true,
          small: true,
          striped: true,
        }"
      ></b-skeleton-table>
    </template>

    <template #updatedAt>
      <b-skeleton width="65%" />
    </template>
  </app-drawer-container>
</template>

<script>
export default {
  components: {
    "app-drawer-container": () => import("./app-drawer-container.vue"),
    "mask-left-skeleton": () => import("./mask-left-skeleton.vue"),
  },
};
</script>
