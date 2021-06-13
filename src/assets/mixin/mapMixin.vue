<script>
import { Icon } from "leaflet";
import {
  LMap,
  LTileLayer,
  LControlZoom,
  LGeoJson,
  LPopup,
  LFeatureGroup,
} from "vue2-leaflet";
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";

import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "@/assets/sass/_MarkerCluster.Custom.sass";
// import "leaflet.markercluster/dist/MarkerCluster.Default.css";

export default {
  components: {
    "l-map": LMap,
    "l-tillayer": LTileLayer,
    "l-control-zoom": LControlZoom,
    "l-geo-json": LGeoJson,
    "l-popup": LPopup,
    "l-feature-group": LFeatureGroup,
    "l-marker-cluster": Vue2LeafletMarkerCluster,
  },
  created() {
    delete Icon.Default.prototype._getIconUrl;
    Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  },
};
</script>
