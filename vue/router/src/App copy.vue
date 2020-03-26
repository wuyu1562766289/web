<template>
  <div id="app">
    <!-- to必须得有 -->
    <!-- <router-link to="/a">pageA | </router-link> -->
    <!-- 路由命名 -->
    <router-link :to="{name: 'pageA'}">pageA | </router-link>
    <router-link to="/b">pageB</router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
