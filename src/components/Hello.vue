<template>
  <div class="hello">
 {{getCount}}
 <br>
 name : {{getNames}}
  </div>
</template>

<script>
import { getCount, getName } from '../vuex/getters'
export default {
  vuex: {
    getters: {
      getCount: getCount,
      getNames: getName
    }
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  ready: function () {
    this.add()
  },
  methods: {
    add: function () {
      console.log(this.getName)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
