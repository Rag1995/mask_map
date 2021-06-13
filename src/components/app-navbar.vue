<template>
  <b-navbar id="app-navbar" toggleable="lg" variant="dark" type="dark">
    <b-navbar-brand class="text-black">台灣口罩地圖</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link
          v-for="(item, idx) in nav"
          :key="idx"
          :to="item.to"
          v-slot="{ navigate }"
          custom
        >
          <b-nav-item @click="navigate">
            <fa-icon :icon="item.icon" fixed-width />
            {{ item.title }}
          </b-nav-item>
        </router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export default {
  data: () => ({
    nav: [
      { title: "首頁", icon: "map-marker-alt", to: { name: "Home" } },
      { title: "關於", icon: "info-circle", to: { name: "About" } },
    ],
  }),
  created() {
    library.add(faMapMarkerAlt, faInfoCircle);
  },
};
</script>
