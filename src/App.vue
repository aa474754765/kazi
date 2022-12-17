<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  font-size: 16px;
}
body {
  padding: 0;
  margin: 0;
}

#app {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
