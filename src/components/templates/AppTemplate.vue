<template>
  <div class="app-template">
    <TopNav />

    <div class="workspace">
      <section class="workspace-sidebar"></section>

      <section class="workspace-primary-view">
        <slot />
      </section>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/organisms/app/TopNav';

export default {
  components: {
    TopNav
  }
};
</script>

<style lang="scss" scoped>
.app-template {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;

  .top-nav {
    flex: 0 0 auto;
  }

  .workspace {
    flex: 1 1 0;
  }
}

.workspace {
  display: flex;

  .workspace-sidebar {
    flex: 0 0 260px;
  }

  .workspace-primary-view {
    flex: 1 1 0;
  }
}

.workspace-sidebar {
  background-color: rgb(63, 14, 64);
}
</style>
