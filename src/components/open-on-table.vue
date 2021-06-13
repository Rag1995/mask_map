<template>
  <b-table-simple bordered hover responsive small striped class="text-center">
    <b-thead>
      <b-tr>
        <b-th sticky-column></b-th>
        <b-th v-for="(item, idx) in header" :key="idx" :class="item.thClass">
          {{ item.text }}
        </b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr v-for="(period, i) in periods" :key="i">
        <b-th sticky-column>{{ period }}</b-th>
        <b-td v-for="(item, j) in data" :key="j">
          <b-icon
            v-if="item.indexOf(period) > -1"
            icon="check-circle-fill"
            variant="success"
          ></b-icon>
        </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
</template>

<script>
export default {
  props: ["data"],
  data: () => ({
    header: [
      { text: "日", thClass: "text-danger" },
      { text: "一", thClass: "" },
      { text: "二", thClass: "" },
      { text: "三", thClass: "" },
      { text: "四", thClass: "" },
      { text: "五", thClass: "" },
      { text: "六", thClass: "text-danger" },
    ],
    periods: ["上午", "下午", "晚上"],
  }),
  computed: {
    // data() {
    //   if (this.rawData.length === 0) {
    //     return [];
    //   } else {
    //     return this.time.map((el) => {
    //       const trade = this.rawData.reduce((acc, cur, idx) => {
    //         acc[idx];
    //         return { ...acc, trade: cur.indexOf(el) > -1 };
    //       }, {});
    //       return {
    //         time: el,
    //       };
    //     });
    //   }
    // },
  },
};
</script>
