<template>

  <div id="app">
    <router-view></router-view>
   <!-- <home></home>-->
  </div>
</template>

<script>
  //import HelloWorld from './components/HelloWorld'
  import Login from './components/login';

  import Regist from './components/regist';
  import Home from './components/home';
  export default {
    name: 'App',
    components: {
      //HelloWorld,
      "regist":Regist,
      "login":Login,
      "home":Home
    },
    created:function () {
      this.$router.push({path:'/login'})
    }
  }
</script>

<style>
  html{
    font-size:20px;
  }
  html,body{width:98%;height:98%;}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
  ul,ol,dl,dt,dd{ margin:0px; padding:0px;}
  li{ list-style:none;}
  a{text-decoration:none;}
  a img{ boder:0;}
  h1,h2,h3,h4,h5,h6{font-weight:normal; }
  b,strong{ font-weight:normal;}
  .clearfix:after{display:block; content:''; clear:both;}
  .clearfix{zoom:1;}
  i,em{ font-style:normal;}
  .fl{ float:left;}
  .fr{ float:right;}
  .img{ display:block;}
  input,text{border:0; outline:none;}
  table{border-collapse:collapse;}
  th,td{border:1px solid #000; padding:0;}
</style>
