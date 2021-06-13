<template>
  <button
    type="button"
    :class="{
      close: true,
      'text-white': white,
    }"
    aria-label="Close"
    @click="$emit('click')"
  >
    <fa-icon icon="times"></fa-icon>
  </button>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default {
  props: {
    white: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    library.add(faTimes);
  },
};
</script>
