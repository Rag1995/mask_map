<template>
  <app-drawer-container>
    <template #name>{{ data.name }}</template>

    <template #info>
      <div>商店地址：{{ data.address }}</div>
      <div>聯絡電話：{{ data.phone }}</div>
    </template>

    <template #mask>
      <mask-left-content
        :src="require('@/assets/img/child.png')"
        :value="data.childMasksLeft"
        label="兒童口罩 庫存"
      ></mask-left-content>
      <mask-left-content
        :src="require('@/assets/img/adult.png')"
        :value="data.masksLeft"
        label="成人口罩 庫存"
      ></mask-left-content>
    </template>

    <template #note>
      <p>備註說明：</p>
      <div>{{ data.note }}</div>
    </template>

    <template #open-on>
      <p>服務時段：</p>
      <open-on-table :data="data.opensOn"></open-on-table>
    </template>
  </app-drawer-container>
</template>

<script>
export default {
  props: ["data"],
  components: {
    "app-drawer-container": () => import("./app-drawer-container.vue"),
    "open-on-table": () => import("../components/open-on-table.vue"),
    "mask-left-content": () => import("./mask-left-content.vue"),
  },
};
</script>
