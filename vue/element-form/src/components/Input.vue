<template>
  <div class="wrapper">
    <input :type="type" :value="value" @input="onInput" />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
      value: {
          type: String,
          default: ''
      },
      type: {
          type: String,
          default: 'text'
      }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    onInput(e) {
      let value = e.target.value;
      this.$emit("input", value);

      this.$parent.$emit('validate');
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
</style>