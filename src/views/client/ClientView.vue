<template>
  <div class="client-view">
    <ClientTopNav />

    <div class="workspace">
      <ClientSidebar />

      <div class="client-primary-view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import ClientTopNav from "@/components/client/topNav/ClientTopNav";
import ClientSidebar from "@/components/client/sidebar/ClientSidebar";

export default {
  components: {
    ClientTopNav,
    ClientSidebar
  }
};
</script>

<style lang="scss" scoped>
.client-view {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;

  .client-top-nav {
    flex: 0 0 auto;
  }

  .workspace {
    flex: 1 1 0;
    min-height: 0;
  }
}

.workspace {
  display: flex;

  .client-sidebar {
    flex: 0 0 260px;
  }

  .client-primary-view {
    flex: 1 1 0;
  }
}
</style>
