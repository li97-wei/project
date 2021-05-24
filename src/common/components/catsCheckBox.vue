<template>
  <span :class="'disabled-'+disabled">
    <input ref="ip" type="checkbox" :checked="checked" @click.stop="onChange" />
    <span v-if="label" @click="onLabelClick"><label>{{ label }}</label></span>
  </span>
</template>

<script>
export default {
  data() {
    return {
      checked: this.isChecked,
    };
  },
  methods: {
    dataConvert() {
      if (typeof this.checked === "number") {
        switch (this.checked) {
          case 0: {
            return true;
          }
          case 1: {
            return false;
          }
        }
      }
    },
    onChange() {
      this.checked = !this.checked;
      this.$emit("onchecked", this.checked);
    },
    onLabelClick() {
      this.checked = !this.checked;
      this.$nextTick(() => {
        this.$refs["ip"].focus();
      });
      this.$emit("onchecked", this.checked);
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    isChecked: {
      type: [Boolean, Number]
    }
  },
  created() {
    this.checked = this.dataConvert();
  }
};
</script>

<style scoped>
.disabled-true {
  pointer-events: none;
}

.disabled-false {
  pointer-events: auto;
}
</style>
