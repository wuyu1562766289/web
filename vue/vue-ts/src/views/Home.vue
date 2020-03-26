<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Hello msg="ts学习"></Hello>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Hello from "@/components/Hello.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Hello
  }
};
</script>
