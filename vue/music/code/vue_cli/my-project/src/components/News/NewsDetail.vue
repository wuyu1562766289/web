<template>
  <div>
    新闻详情
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      src: ""
      //NewsInfo: {}, // 新闻详情数据
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    this.src = this.$route.params;
    console.log(this.src);
    

    // 1.获取路由参数
    //let {id} = this.$route.params;
    // 2.拼接后台url发起请求
    // let url = 'getnew/' + id;
    //this.$axios.get(id)
    //.then(res =>{
    // 3.响应的数据渲染到页面上，通过一个详情对象
    // this.NewsInfo = res.data;
    //})
    //.catch(err => console.log(err));
  },
  mounted() {
    
  }
};
</script>
<style scoped>
</style>