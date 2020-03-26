<template>
  <div class="wrapper">
    this is pageB
    <!-- {{$route.params.id}} -->
    {{id}}
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['id'],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    // window.console.log(this.$route.params.id);
    window.console.log(this.id);
  }
};
</script>
<style scoped>
</style>