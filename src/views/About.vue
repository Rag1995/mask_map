<template>
  <div class="about full-container">
    <b-card-body>
      <p>關於這個網站</p>
      <hr />
      <p>關於這個網站</p>
      <hr />
      <p v-for="(item, idx) in source" :key="idx">
        {{ item.label }}：
        <a :href="item.href" target="_blank">{{ item.href }}</a>
      </p>
    </b-card-body>
  </div>
</template>

<script>
export default {
  data: () => ({
    source: [
      {
        label: "口罩供需資訊平台",
        href: "https://g0v.hackmd.io/@kiang/mask-info",
      },
      {
        label: "「口罩咧？」API ",
        href: "https://hackmd.io/@mingjunlu/findmasks-api-docs",
      },
    ],
  }),
};
</script>
