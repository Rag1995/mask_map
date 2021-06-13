<template>
  <transition
    name="drawer"
    @after-enter="invalidateSize()"
    @after-leave="invalidateSize()"
  >
    <div v-show="drawer" ref="drawer" class="drawer rounded-right border-right">
      <b-card-header
        header-bg-variant="primary"
        header-text-variant="white"
        class="d-flex align-items-center flex-nowrap rounded-0"
      >
        <div class="text-nowrap">店家資訊</div>
        <btn-close class="ml-auto" white @click="close()"></btn-close>
      </b-card-header>

      <div class="h-100 overflow-auto pb-5">
        <b-skeleton-wrapper :loading="loading">
          <template #loading>
            <app-drawer-skeleton />
          </template>

          <app-drawer-content :data="data" />
        </b-skeleton-wrapper>
      </div>
    </div>
  </transition>
</template>

<script>
import maskApiMixin from "@/assets/mixin/maskApiMixin.vue";

export default {
  mixins: [maskApiMixin],
  data: () => ({
    drawer: false,
    loading: true,
    data: {},
  }),
  components: {
    "app-drawer-skeleton": () => import("./app-drawer-skeleton.vue"),
    "app-drawer-content": () => import("./app-drawer-content.vue"),
  },
  methods: {
    close() {
      this.$bus.$emit("closeDrawer");
    },
    async refreshData(id) {
      this.$bus.$emit("onload");

      const { status, data } = await this.getMarker(id);
      this.status = status;
      this.data = data.properties;

      this.$bus.$emit("ready");
    },
    invalidateSize() {
      this.$bus.$emit("invalidateSize");
    },
  },
  created() {
    // drawer event
    this.$bus.$on("showDrawer", (id, latlng) => {
      this.drawer = true;
      this.refreshData(id, latlng);
    });
    this.$bus.$on("closeDrawer", () => {
      this.drawer = false;
    });
    // loading event
    this.$bus.$on("onload", () => {
      this.loading = true;
    });
    this.$bus.$on("ready", () => {
      this.loading = false;
    });
  },
  beforeDestroy() {
    this.$bus.$off("showDrawer");
    this.$bus.$off("closeDrawer");

    this.$bus.$off("onload");
    this.$bus.$off("ready");
  },
};
</script>
