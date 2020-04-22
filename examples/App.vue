<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~@/assets/fonts/iconfont.css';

* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}

</style>
