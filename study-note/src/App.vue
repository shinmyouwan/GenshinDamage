<template>
  <nav>
    <a @click="$router.push('/')">Home</a> |
    <a @click="$router.push('/study?name=Vue3&id=1')">vue3笔记</a> |
    <a @click="$router.push('/study?name=Ts&id=1')">ts笔记</a>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
