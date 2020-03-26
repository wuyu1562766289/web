<template>
  <div class="wrapper">
      <!-- {{someval}} -->
      <form :model="model" :rules="rules">
          <slot></slot>
      </form>
  </div>
</template>

<script>
export default {
//   inject: ['someval'],

  provide(){
      return{
          WForm: this
      }
  },
  components: {},
  props: {
      model: {
          type: Object,
          required: true
      },
      rules: {
          type: Object
      }
  },
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
</style>