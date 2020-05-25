<template>
  <div id="app">
    <AppTemplate>
      <router-view />
    </AppTemplate>
  </div>
</template>

<script>
import AppTemplate from '@/components/templates/AppTemplate';

export default {
  components: {
    AppTemplate
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(29, 28, 29);
  font-weight: 400;
}
</style>
