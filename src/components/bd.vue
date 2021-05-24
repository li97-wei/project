<template>
  <div>
    <span>{{ this.citystate.cityName }}</span>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "wyy",
  data() {
    return {};
  },
  computed: {
    ...mapState("city", { citystate: state => state }),
    ...mapGetters({
      getState: "city/getState"
    })
  }
};
</script>

<style scoped></style>
