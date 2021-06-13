<template>
  <l-map
    ref="map"
    :zoom="zoom"
    :center="center"
    :options="mapOptions"
    class="flex-grow-1"
    style="height: auto"
  >
    <l-tillayer :url="url" :attribution="attribution"></l-tillayer>
    <l-control-zoom position="topright"></l-control-zoom>

    <l-marker-cluster :options="clusterOptions">
      <l-geo-json
        v-for="(geojson, idx) in data"
        :key="idx"
        :geojson="geojson"
        @click="select($event.latlng, geojson.properties)"
      ></l-geo-json>
    </l-marker-cluster>

    <l-feature-group ref="features">
      <l-popup :options="popupOptions" class="text-nowrap font-weight-bold">
        <b>{{ storeName }}</b>
      </l-popup>
    </l-feature-group>
  </l-map>
</template>

<script>
import { divIcon, point } from "leaflet";
import mapMixin from "@/assets/mixin/mapMixin.vue";
import maskApiMixin from "@/assets/mixin/maskApiMixin.vue";

export default {
  mixins: [mapMixin, maskApiMixin],
  data() {
    const iconCreateFunction = () => {
      return divIcon({
        html: `<div></div>`,
        className: "marker-cluster",
        iconSize: point(42, 42),
      });
    };
    return {
      ready: false,
      zoom: 10,
      center: [25.09, 121.55],
      url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
      mapOptions: { zoomControl: false },
      clusterOptions: {
        disableClusteringAtZoom: 18,
        maxClusterRadius: 120,
        showCoverageOnHover: false,
        iconCreateFunction: iconCreateFunction,
      },
      popupOptions: {
        maxWidth: 840,
        offset: point(0, -30),
      },
      map: null,
      data: null,
      storeName: null,
    };
  },
  mounted() {
    this.map = this.$refs.map.mapObject;
    this.init();
  },
  methods: {
    async init() {
      const { status, data } = await this.listMarkers();
      this.status = status;
      this.data = data;
    },
    select(latlng, properties) {
      const { id, name } = properties;
      this.storeName = name;
      this.$bus.$emit("showDrawer", id, latlng);
      this.$nextTick(() => {
        this.$refs.features.mapObject.openPopup(latlng);
        this.panTo(latlng);
      });
    },
    panTo(latlng) {
      const pt = this.map.project(latlng).add(point(0, -30));
      const center = this.map.unproject(pt);
      this.map.panTo(center, {
        animate: true,
      });
    },
  },
  created() {
    this.$bus.$on("invalidateSize", () => {
      this.map.invalidateSize({
        animate: true,
      });
    });
  },
  beforeDestroy() {
    this.$bus.$off("invalidateSize");
  },
};
</script>
