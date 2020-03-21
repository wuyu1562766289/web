<template>
  <div>
    <el-header>
      <el-menu mode="horizontal">
        <el-menu-item index="1">
          <img src="/logo.png" class="logo" alt />
        </el-menu-item>
        <el-menu-item index="2">
          <nuxt-link to="/">首页</nuxt-link>
        </el-menu-item>

        <el-menu-item v-if="userinfo._id" index="5" class="pull-right">
          <nuxt-link :to="'/user/'+userinfo._id">Hey {{userinfo.nickname}}</nuxt-link>
        </el-menu-item>
        <el-menu-item v-if="userinfo._id" index="5" class="pull-right">
          <nuxt-link to="/editor/new">写文章</nuxt-link>
        </el-menu-item>
        <el-menu-item v-if="!userinfo._id" index="5" class="pull-right">
          <nuxt-link to="/register">注册</nuxt-link>
        </el-menu-item>
        <el-menu-item v-if="!userinfo._id" index="6" class="pull-right">
          <nuxt-link to="/login">登录</nuxt-link>
        </el-menu-item>
      </el-menu>
    </el-header>

    <el-main>
      <nuxt />
    </el-main>

    <!-- <el-footer></el-footer>

    <el-container></el-container>

    <h1>标题</h1>

    <nuxt />

    <h2>底部</h2> -->
  </div>
</template>
<script>
export default {
  mounted() {
    const token = localStorage.getItem('token')
    if (token) {
      this.$store.dispatch('user/detail')
    }
  },
  computed: {
    userinfo() {
      return this.$store.state.user
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: rgb(232, 245, 226);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.logo {
  height: 50%;
}
.pull-right {
  float: right !important;
}
.user-container {
  width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  padding: 10px;
  /* display: inline-block; */
}
</style>
