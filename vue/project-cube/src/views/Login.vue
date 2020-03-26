<template>
  <div class="wrapper">
    <div class="logo">
      <img src="https://www.baidu.com/img/bd_logo1.png" width="100px" alt />
    </div>
    <cube-form :model="model" :schema="schema" @submit="handelLogin" @validate="handelValidate"></cube-form>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      model: {
        username: "",
        passwd: ""
      },
      schema: { // 表单结构定义
        fields: [ // 字段数字
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              // 检验规则
              required: true
            },
            trigger: "blur"
          },
          {
            type: "input",
            modelKey: "passwd",
            label: "密码",
            props: {
              type: "password",
              placeholder: "请输入密码",
              eye: {
                open: true
              }
            },
            rules: {
              required: true
            },
            trigger: "blur"
          },
          {
            type: "submit",
            label: "登录"
          }
        ]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    handelLogin(e){
      // 阻止表单提交的默认行为
      e.preventDefault();
      // 登录请求
      this.$store.dispatch('login', this.model)
          .then(code => {
            if(code) {
              // 登录成功重定向
              const path = this.$route.query.redirect || '/';
              this.$router.push(path);
            }
          }).catch(error => {
            // 有错误发生或者登录失败
            const toast = this.$createToast({
              time: 2000,
              txt: error.message || error.response.data.message || "登录失败",
              type: "error"
            });
            toast.show();
          })
    },
    handelValidate(ret){
      window.console.log(ret);      
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
</style>