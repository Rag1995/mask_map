<template>
  <l-map
    :zoom="zoom"
    :center="center"
    class="map"
  >
    <l-tile-layer
      :url="url"
      :attribution="attribution"
    ></l-tile-layer>

    <!-- <l-marker :lat-lng="center"></l-marker> -->
    <l-marker
      v-for="item in markers"
      :key="item.properties.id"
      :lat-lng="{
        lat: item.geometry.coordinates[1],
        lng: item.geometry.coordinates[0]
      }"
    ></l-marker>

    <l-control position="bottomleft">
      {{ status }}
    </l-control>
  </l-map>
</template>

<script>
// vue2-leaflet components
import {
  LMap,
  LTileLayer,
  LMarker,
  LControl,
} from 'vue2-leaflet';

// leaflet css
import 'leaflet/dist/leaflet.css';

// leaflet icon
import { Icon } from 'leaflet';
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  // shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

import maskApi from '@/assets/js/mask_api';

export default {
  components: {
    'l-map': LMap,
    'l-tile-layer': LTileLayer,
    'l-marker': LMarker,
    'l-control': LControl,
  },
  data: () => ({
    zoom: 10,
    center: {
      lat: 25.09,
      lng: 121.55
    },
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    status: false,
    markers: [],
  }),
  mounted() {
    this.findAll();
  },
  methods: {
    findAll() {
      maskApi
        .findAll()
        .then(res => {
          const { status, data } = res;
          this.status = ( 200<=status && status<300 )
          this.markers = data.features
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}
</script>