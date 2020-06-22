<template>
  <ChannelTemplate :channel="channel" :messages="messages" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ChannelTemplate from "@/components/templates/client/ChannelTemplate";

export default {
  components: {
    ChannelTemplate
  },

  props: {
    channelId: {
      type: [String, Number],
      required: true
    }
  },

  computed: {
    ...mapGetters("pages/client/channel", ["channel", "messages"])
  },

  async created() {
    this.setChannelId({ channelId: this.channelId });

    await Promise.all([this.fetchChannel(), this.queryMessages()]);
  },

  methods: {
    ...mapActions("pages/client/channel", [
      "setChannelId",
      "fetchChannel",
      "queryMessages"
    ])
  }
};
</script>
