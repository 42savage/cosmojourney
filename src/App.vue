<template>
  <div id="app">
      <router-view/>
  </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body { height: 100% }
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
