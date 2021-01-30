<template>
  <div class="channel-view">
    <ChannelPage :channel="channel" :messages="messages" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

import ChannelPage from "@/components/client/channels/ChannelPage";

const channelPage = createNamespacedHelpers("client/channels/channelPage");

export default {
  components: {
    ChannelPage
  },

  props: {
    channelId: {
      type: [String, Number],
      required: true
    }
  },

  computed: {
    ...channelPage.mapState(["channel", "messages"])
  },

  async created() {
    const { channelId } = this;
    await Promise.all([
      this.fetchChannel({ channelId }),
      this.queryMessages({ channelId })
    ]);
  },

  methods: {
    ...channelPage.mapActions(["fetchChannel", "queryMessages"])
  }
};
</script>
