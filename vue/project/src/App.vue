<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->

    <!-- render函数使用 -->
    <!-- <comp></comp> -->
    <!-- <WForm></WForm> -->
    <!-- <hr> -->
    <!-- <Tree></Tree> -->

    <!-- <VuexTest></VuexTest> -->
    <WVuexTest></WVuexTest>
    <input v-model.lazy="value" placeholder="字母转数字" />
    <br />
    {{stringToNum}}
    <hr />
    <input v-model.lazy="numTo" placeholder="数字转字母" />
    <br />
    {{numToString}}
  </div>
</template>

<script>
// import WForm from "./components/form"
// import Tree from '@/components/tree';
// import VuexTest from '@/components/VuexTest';
import WVuexTest from "@/components/WVuexTest";

export default {
  components: {
    // WForm,
    // Tree,
    // VuexTest,
    WVuexTest
  },
  data() {
    return {
      value: "",
      numTo: ""
    };
  },
  computed: {
    stringToNum() {
      let a = this.value;
      if(!a) {
        return;
      }
      let str = a.toLowerCase().split("");
      let al = str.length;
      let getCharNumber = function(charx) {
        return charx.charCodeAt() - 96;
      };
      let numout = 0;
      let charnum = 0;
      for (let i = 0; i < al; i++) {
        charnum = getCharNumber(str[i]);
        numout += charnum * Math.pow(26, al - i - 1);
      }
      return numout;
    },
    numToString() {
      let numm = this.numTo;
      if(!numm) {
        return;
      }
      let stringArray = [];
      let numToStringAction = function(nnum) {
        let num = nnum - 1;
        let a = parseInt(num / 26);
        let b = num % 26;
        stringArray.push(String.fromCharCode(64 + parseInt(b + 1)));
        if (a > 0) {
          numToStringAction(a);
        }
      };
      numToStringAction(numm);
      return stringArray.reverse().join("");
    }
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
