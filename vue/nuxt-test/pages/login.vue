<template>
  <div>
    <h1>用户登录</h1>
    <el-input v-model="user.username" placeholder=""></el-input>
    <el-input v-model="user.password" type="password" placeholder=""></el-input>
    <el-button @click="onLogin" type="primary">登录</el-button>
  </div>
</template>

<script>
  export default {
    // 设置用谁去布局
    layout: 'blank',
    data() {
      return {
        user: {
          username: "",
          password: ""
        }
      }
    },
    methods: {
      onLogin() {
        this.$store.dispatch("user/login", this.user).then(ok => {
          if(ok) {
            const redirect = this.$route.query.redirect || '/';
            this.$router.push(redirect);
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>