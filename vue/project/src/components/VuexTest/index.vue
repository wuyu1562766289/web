<template>
  <div>
    <h3>Vuex Test</h3>
    <p>{{$store.state.count}}</p>
    <p>{{$store.getters.score}}</p>
    <button @click="add">add</button>
    <button @click="asyncAdd">asyncAdd</button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      // action
      this.$store.commit("add", 2);
    },
    // asyncAdd() {
    //   // mutations
    //   this.$store.dispatch('asyncAdd', 3);
    // }
    async asyncAdd() {
      // mutations
      const result = await this.$store.dispatch("asyncAdd", 3);
      if(result.ok === 1) {
        alert('success！');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>