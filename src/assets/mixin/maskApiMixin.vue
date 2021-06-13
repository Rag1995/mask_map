<script>
import maskApi from "../js/maskApi";

export default {
  methods: {
    listMarkers() {
      return maskApi
        .findAll()
        .then(({ data }) => {
          return {
            status: true,
            data: data.features,
          };
        })
        .catch(() => {
          return {
            status: false,
            data: [],
          };
        });
    },
    getMarker(id) {
      return maskApi
        .findOne(id)
        .then(({ data }) => {
          return {
            status: true,
            data: data,
          };
        })
        .catch(() => {
          return {
            status: false,
            data: {},
          };
        });
    },
  },
};
</script>
