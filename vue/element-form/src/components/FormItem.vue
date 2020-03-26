<template>
  <div class="wrapper">
    <label for>{{label}}</label>
    <div>
      <slot></slot>
      <p v-if="errStatus">{{errMessage}}</p>
    </div>
  </div>
</template>

<script>
import Schema from "async-validator";

export default {
  components: {},
  inject: ["WForm"],
  props: ["label", "prop"],
  data() {
    return {
      errMessage: "",
      errStatus: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    validator() {
      const rules = this.WForm.rules[this.prop];
      const value = this.WForm.model[this.prop];
      const descriptor = { [this.prop]: rules };
      const schema = new Schema(descriptor);
      schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errMessage = errors[0].message;
          this.errStatus = true;
        } else {
          this.errMessage = "";
          this.errStatus = '';
        }
      });
    }
  },
  created() {},
  mounted() {
    this.$on("validate", this.validator);
  }
};
</script>
<style scoped>
</style>