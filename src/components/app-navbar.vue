<template>
  <b-navbar id="app-navbar" toggleable="lg" variant="dark" type="dark">
    <b-navbar-brand class="text-black">口罩地圖</b-navbar-brand>

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
            {{ item.title }}
          </b-nav-item>
        </router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import {
  BNavbar,
  BNavbarNav,
  BNavItem,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
} from "bootstrap-vue";

export default {
  components: {
    "b-navbar": BNavbar,
    "b-navbar-nav": BNavbarNav,
    "b-nav-item": BNavItem,
    "b-navbar-brand": BNavbarBrand,
    "b-navbar-toggle": BNavbarToggle,
    "b-collapse": BCollapse,
  },
  data: () => ({
    nav: [
      { title: "首頁", to: { name: "Home" } },
      { title: "關於", to: { name: "About" } },
    ],
  }),
};
</script>
