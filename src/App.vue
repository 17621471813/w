<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
*{
  margin:0;
  padding:0;
  list-style: none;

}
body{
  height:100%;
  border: 1px solid black;
  overflow: hidden;
}

</style>
