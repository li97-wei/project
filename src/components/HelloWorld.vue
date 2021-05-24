<template>
  <div>
    <div class="hello" @click="clears">
      <input v-model="msg" />
      <span class="titleg">{{ msglet() }}</span>
    </div>
    <div>
      <cats-check-box
        @onchecked="select"
        :isChecked="isChecked"
        :label="'男'"
        :disabled="false"
      ></cats-check-box>
    </div>
  </div>
</template>

<script>
import catsCheckBox from "../common/components/catsCheckBox.vue";
import deboubce from "../common/debounce.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      isChecked: 1 | false,
      msg: "",
      boundle: undefined
    };
  },
  components: {
    catsCheckBox
  },
  beforeMount() {
    this.boundle = deboubce(
      () => {
        this.msg = "";
      },
      2000,
      false
    );
  },
  methods: {
    select(value) {
      console.log(value);
    },
    // 防抖函数
    clears() {
      this.boundle();
    }
  },
  computed: {
    msglet() {
      return () => {
        return this.msg.length;
      };
    }
  }
};
</script>

<style scoped></style>
