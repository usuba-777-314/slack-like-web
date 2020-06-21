<template>
  <div class="client-template">
    <TopNav />

    <div class="workspace">
      <Sidebar />

      <main class="primary-view">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/organisms/client/topNav/TopNav";
import Sidebar from "@/components/organisms/client/sidebar/Sidebar";

export default {
  components: {
    TopNav,
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
.client-template {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;

  .top-nav {
    flex: 0 0 auto;
  }

  .workspace {
    flex: 1 1 0;
    min-height: 0;
  }
}

.workspace {
  display: flex;

  .sidebar {
    flex: 0 0 260px;
  }

  .primary-view {
    flex: 1 1 0;
  }
}
</style>
