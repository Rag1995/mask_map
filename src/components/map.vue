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

    <l-marker :lat-lng="center"></l-marker>
    
    <slot></slot>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

import { Icon } from 'leaflet';
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  components: {
    'l-map': LMap,
    'l-tile-layer': LTileLayer,
    'l-marker': LMarker,
  },
  data: () => ({
    zoom: 10,
    center: {
      lat: 25.09,
      lng: 121.55
    },
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  })
}
</script>