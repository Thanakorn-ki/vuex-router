<template lang="html">
<button @click="increment">Click</button>
Name : <input type="text" v-model="name" value="">
<button @click="add_name(name)">add</button>
</template>

<script>
import { incrementCounter, addname } from '../vuex/actions'
export default {
  vuex: {
    actions: {
      increment: incrementCounter,
      fun_name: addname
    }
  },
  data: function () {
    return {
      name: ''
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    add_name: function (name) {
      this.fun_name(name)
      this.name = ''
    }
  },
  components: {}
}
</script>
<style lang="css">

</style>
