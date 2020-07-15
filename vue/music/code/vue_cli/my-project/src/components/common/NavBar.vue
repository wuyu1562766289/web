<template>
  <div class="tmpl">
    <mt-header :title="title">
      <div @click="goBack" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  components: {},
  name: "nav-bar",
  props: ["title"], // props属性再template中可以直接使用
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    // 在这就用this.title
  },
  mounted() {}
};
</script>
<style scoped>
.tmpl .mint-header {
  background-color: aquamarine;
}
</style>