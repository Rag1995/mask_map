<template>
  <div
    ref="map"
    class="map"
  ></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// leaflet icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import maskApi from '@/assets/js/mask_api';

export default {
  data: () => ({
    // map object
    map: null,
    tileLayer: null,
    // variable
    zoom: 10,
    center: [25.09, 121.55],
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',

    status: false,
  }),
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = L.map(this.$refs.map).setView(this.center, this.zoom);
      this.tileLayer = L.tileLayer(this.url, {
        maxZoom: 19,
        attribution: this.attribution,
      });
      this.tileLayer.addTo(this.map);
      this.getMarkers();
    },
    getMarkers() {
      maskApi
        .findAll()
        .then(res => {
          const { status, data } = res;
          this.status = ( 200<=status && status<300 );
          const geoJsonLayer = L.geoJSON(data);
          const markers = new L.markerClusterGroup({
            showCoverageOnHover: false,
            maxClusterRadius: 120,
          });
          markers
            .addLayer(geoJsonLayer)
            .on('click', ({ layer }) => {
              const id = layer.feature.properties.id;
              console.log('OK', id);
            });
          this.map.addLayer(markers);

        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}
</script>