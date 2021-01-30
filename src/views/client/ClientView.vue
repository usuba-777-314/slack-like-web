<template>
  <div class="client-view">
    <ClientPage>
      <router-view />
    </ClientPage>
  </div>
</template>

<script>
import ClientPage from "@/components/client/ClientPage";

export default {
  components: {
    ClientPage
  }
};
</script>
