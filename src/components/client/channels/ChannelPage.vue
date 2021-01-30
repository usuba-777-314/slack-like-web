<template>
  <div class="channel-page">
    <ChannelHeader :channel="channel" />
    <MessageList :messages="messages" />
  </div>
</template>

<script>
import ChannelHeader from "@/components/client/channels/ChannelHeader";
import MessageList from "@/components/client/chat/MessageList";

export default {
  components: {
    ChannelHeader,
    MessageList
  },

  props: {
    channel: {
      type: Object,
      required: true
    },

    messages: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.channel-page {
  display: flex;
  flex-direction: column;
  height: 100%;

  .channel-header {
    flex: 0 0 auto;
  }
}
</style>
