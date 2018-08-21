<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<group>
      <cell title="title" value="value"></cell>
    </group>-->
    11111
    <group>
      <calendar title="title" ></calendar>
    </group>
  </div>
</template>

<script>
  import { Calendar } from 'vux'
  import { Group, Cell } from 'vux'
  export default {
    name: 'HelloWorld',
    components: {
      Calendar,
      Group
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        value:"aaaa"
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
