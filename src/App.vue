<template>
  <div id="app">
    <div id="menu">
    <ul>
        <li v-link="{ path: '/' }">Home</li>
        <li v-link="{ path: '/disabled' }">Disabled</li>
        <li v-link="{ path: '/register' }">Register</li>
        <li v-link="{ path: '/contact' }"> Contact</li>
    </ul>
  </div>
    <br><br><br><br>
     <router-view></router-view>
  </div>
</template>
<script>
import store from './vuex/store'
export default {
  store,
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>
<style media="screen">
@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,300,400,600,700,800);
body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 300;
  color: #3d414a;
  -webkit-font-smoothing: subpixel-antialiased;
  position: relative;
  background-color: #d1e0f5;
}

#menu {
  background-color: #ffffff;
  position: fixed;
  margin: 0;
  padding: 0;
  display: block;
  overflow: hidden;
  height: 70px;
  width: 100%;
  -webkit-box-shadow: -10px -10px 70px rgba(10, 200, 200, 0.2), 10px 10px 70px rgba(0, 200, 50, 0.3), -15px 15px 70px rgba(0, 0, 255, 0.1), 15px -15px 70px rgba(100, 200, 255, 0.3);
  -moz-box-shadow: -10px -10px 70px rgba(10, 200, 200, 0.2), 10px 10px 70px rgba(0, 200, 50, 0.3), -15px 15px 70px rgba(0, 0, 255, 0.1), 15px -15px 70px rgba(100, 200, 255, 0.3);
  box-shadow: -10px -10px 70px rgba(10, 200, 200, 0.2), 10px 10px 70px rgba(0, 200, 50, 0.3), -15px 15px 70px rgba(0, 0, 255, 0.1), 15px -15px 70px rgba(100, 200, 255, 0.3);
  animation: ani1 1s cubic-bezier(.75, .06, .27, .98);
  -webkit-animation: ani1 1s cubic-bezier(.75, .06, .27, .98);
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-direction: alternate;
  -webkit-animation-direction: alternate;
}

@keyframes ani1 {
  0% {
    -webkit-box-shadow: -10px -10px 70px rgba(10, 200, 200, 0.2), 10px 10px 70px rgba(0, 200, 50, 0.3), -15px 15px 70px rgba(0, 0, 255, 0.1), 15px -15px 70px rgba(100, 200, 255, 0.3);
    -moz-box-shadow: -10px -10px 70px rgba(10, 200, 200, 0.2), 10px 10px 70px rgba(0, 200, 50, 0.3), -15px 15px 70px rgba(0, 0, 255, 0.1), 15px -15px 70px rgba(100, 200, 255, 0.3);
    box-shadow: -10px -10px 70px rgba(10, 200, 200, 0.2), 10px 10px 70px rgba(0, 200, 50, 0.3), -15px 15px 70px rgba(0, 0, 255, 0.1), 15px -15px 70px rgba(100, 200, 255, 0.3);
  }
  100% {
    -webkit-box-shadow: -15px 15px 70px rgba(10, 0, 200, 0.2), 15px -15px 70px rgba(0, 200, 50, 0.3), -10px -10px 70px rgba(0, 0, 255, 0.1), 10px 10px 70px rgba(100, 200, 255, 0.3);
    -moz-box-shadow: -15px 15px 70px rgba(10, 0, 200, 0.2), 15px -15px 70px rgba(0, 200, 50, 0.3), -10px -10px 70px rgba(0, 0, 255, 0.1), 10px 10px 70px rgba(100, 200, 255, 0.3);
    box-shadow: -15px 15px 70px rgba(10, 0, 200, 0.2), 15px -15px 70px rgba(0, 200, 50, 0.3), -10px -10px 70px rgba(0, 0, 255, 0.1), 10px 10px 70px rgba(100, 200, 255, 0.3);
  }
}

@-webkit-keyframes ani1 {
  0% {
    -webkit-box-shadow: -10px -10px 70px rgba(10, 200, 200, 0.2), 10px 10px 70px rgba(0, 200, 50, 0.3), -15px 15px 70px rgba(0, 0, 255, 0.1), 15px -15px 70px rgba(100, 200, 255, 0.3);
    -moz-box-shadow: -10px -10px 70px rgba(10, 200, 200, 0.2), 10px 10px 70px rgba(0, 200, 50, 0.3), -15px 15px 70px rgba(0, 0, 255, 0.1), 15px -15px 70px rgba(100, 200, 255, 0.3);
    box-shadow: -10px -10px 70px rgba(10, 200, 200, 0.2), 10px 10px 70px rgba(0, 200, 50, 0.3), -15px 15px 70px rgba(0, 0, 255, 0.1), 15px -15px 70px rgba(100, 200, 255, 0.3);
  }
  100% {
    -webkit-box-shadow: -15px 15px 70px rgba(10, 0, 200, 0.2), 15px -15px 70px rgba(0, 200, 50, 0.3), -10px -10px 70px rgba(0, 0, 255, 0.1), 10px 10px 70px rgba(100, 200, 255, 0.3);
    -moz-box-shadow: -15px 15px 70px rgba(10, 0, 200, 0.2), 15px -15px 70px rgba(0, 200, 50, 0.3), -10px -10px 70px rgba(0, 0, 255, 0.1), 10px 10px 70px rgba(100, 200, 255, 0.3);
    box-shadow: -15px 15px 70px rgba(10, 0, 200, 0.2), 15px -15px 70px rgba(0, 200, 50, 0.3), -10px -10px 70px rgba(0, 0, 255, 0.1), 10px 10px 70px rgba(100, 200, 255, 0.3);
  }
}

#menu ul {
  margin: 0;
  padding: 0;
  text-align: center;
  height: 70px;
}

#menu ul>li {
  padding: 25px 0px 0px 0px;
  position: relative;
  width: 25%;
  float: left;
  height: 45px;
  display: block;
  overflow: hidden;
  z-index: 1000;
  color: #4e9acc;
  list-style: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  -webkit-transition: all 0.9s cubic-bezier(.75, .06, .27, .98);
  -moz-transition: all 0.9s cubic-bezier(.75, .06, .27, .98);
  -ms-transition: all 0.9s cubic-bezier(.75, .06, .27, .98);
  -o-transition: all 0.9s cubic-bezier(.75, .06, .27, .98);
  transition: all 0.9s cubic-bezier(.75, .06, .27, .98);
  -webkit-box-shadow: inset 0px -3px 0px #4e9acc, inset 0px 3px 0px #4e9acc;
  -moz-box-shadow: inset 0px -3px 0px #4e9acc, inset 0px 3px 0px #4e9acc;
  box-shadow: inset 0px -3px 0px #4e9acc, inset 0px 3px 0px #4e9acc;
}

#menu ul>li:hover {
  color: rgba(255, 255, 255, 0.8);
  -webkit-box-shadow: inset 0px -3px 0px rgba(255, 255, 255, 0.8), inset 0px 400px 0px #3e9ac8;
  -moz-box-shadow: inset 0px -3px 0px rgba(255, 255, 255, 0.8), inset 0px 400px 0px #3e9ac8;
  box-shadow: inset 0px -3px 0px rgba(255, 255, 255, 0.8), inset 0px 400px 0px #3e9ac8;
}
</style>
