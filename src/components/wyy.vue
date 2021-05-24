<template>
  <div>
    <li
      v-for="(item, index) in city"
      :key="index"
      @click="handChangeCity(item.name)"
    >
      {{ item.name }}
    </li>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "wyy",
  data() {
    return {
      city: [
        { id: 1, name: "徐州" },
        { id: 1, name: "南京" },
        { id: 1, name: "上海" },
        { id: 1, name: "北京" }
      ]
    };
  },
  components: {},

  methods: {
    //修改
    //    ...mapMutations('city', ['changeCity']),
    ...mapActions("city", ["changeByAction"]),
    handChangeCity(cityName) {
      this["changeByAction"](cityName);
    }
  },
  computed: {}
};
</script>

<style scoped></style>
