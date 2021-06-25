<template>
  <div class="about full-container">
    <b-card-body>
      <p>關於這個網站</p>
      <hr />
      <p style="line-height: 2rem">
        給不久前轉職工程師的自己的一個練習，以下是資料來源以及參考過的教學<br />
        希望能夠幫上有需要的人，也順便當作筆記以防之後忘記...
      </p>
      <hr />
      <p v-for="(item, idx) in source" :key="idx">
        <a :href="item.href" target="_blank">
          {{ item.label }}
        </a>
      </p>
    </b-card-body>
  </div>
</template>

<script>
export default {
  data: () => ({
    source: [
      {
        label: "口罩剩餘數量 API",
        href: "https://hackmd.io/@mingjunlu/findmasks-api-docs",
      },
      {
        label: "這個網站的程式碼",
        href: "https://github.com/Rag1995/mask_map",
      },
      {
        label: "Vue Leaflet (製作地圖)",
        href: "https://vue2-leaflet.netlify.app/",
      },
      {
        label: "Vue Leaflet Markercluster (地圖效能優化)",
        href: "https://github.com/jperelli/vue2-leaflet-markercluster",
      },
      {
        label: "Vue Event Bus (不同元件的溝通)",
        href: "https://medium.com/itsems-frontend/vue-event-bus-15b76f27aeb9",
      },
      {
        label: "Vue Transitions (用來製作動畫+監聽動畫)",
        href: "https://vuejs.org/v2/guide/transitions.html",
      },
      {
        label: "手機網頁 Layout (填滿整個頁面)",
        href: "https://allthingssmitty.com/2020/05/11/css-fix-for-100vh-in-mobile-webkit/",
      },
    ],
  }),
};
</script>
