<template>
  <mask-left-container>
    <template #img>
      <b-img
        :src="src"
        width="56px"
        height="56px"
        :class="`border rounded-circle border-${color}`"
      ></b-img>
    </template>

    <template #value>
      <div :class="`h3 text-success font-weight-bold text-${color}`">
        {{ value | number }}
      </div>
    </template>

    <template #label>
      <div class="text-secondary">{{ label }}</div>
    </template>
  </mask-left-container>
</template>

<script>
export default {
  props: ["src", "value", "label"],
  components: {
    "mask-left-container": () => import("@/components/mask-left-container.vue"),
  },
  computed: {
    color() {
      switch (true) {
        case this.value > 1000:
          return "success";
        case this.value > 500:
          return "info";
        default:
          return "danger";
      }
    },
  },
  filters: {
    number(val) {
      return val.toLocaleString("en");
    },
  },
};
</script>
