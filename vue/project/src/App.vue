<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <FormTest></FormTest>

    <hr />
    <Tree></Tree>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import FormTest from "@/components/form";
import Tree from "@/components/tree";

export default {
  name: "App",
  components: {
    HelloWorld,
    FormTest,
    Tree
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
