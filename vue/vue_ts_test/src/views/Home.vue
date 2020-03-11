<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Hello msg="hello ts" @add-feature="fun" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Hello from '@/components/Hello.vue';
import { Features } from '@/components/Hello.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Hello
  },
  methods: {
    fun(value) {
      alert(value.name);
    }
  },
}
</script>
