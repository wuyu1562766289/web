<template>
  <div class="wrapper">
<!--     <button @click="add">+</button>
    {{$store.state.count}}
    <button @click="minus">-</button> -->
    <hr />
    <button @click="increment">+</button>
    {{$store.state.count}}
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  /*   methods: {
    add() {
        this.$store.dispatch('increment')
    },
    minus() {
        this.$store.dispatch('decrement')
    }
  }, */
  // 把组件中的事件和Action中的事件做映射
    methods: mapActions([
      'increment',
      'decrement'
  ]),
/*   methods: {
    ...mapActions[("increment", "decrement")],
    add() {
      this.$store.dispatch("increment");
    },
    minus() {
      this.$store.dispatch("decrement");
    }
  }, */
  created() {},
  mounted() {}
};
</script>
<style scoped>
</style>