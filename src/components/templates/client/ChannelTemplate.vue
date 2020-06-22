<template>
  <div class="channel-template">
    <ChannelHeader :channel="channel" />
    <MessageList :messages="messages" />
  </div>
</template>

<script>
import ChannelHeader from "@/components/organisms/client/channel/ChannelHeader";
import MessageList from "@/components/organisms/client/chat/MessageList";

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
.channel-template {
  display: flex;
  flex-direction: column;
  height: 100%;

  .channel-header {
    flex: 0 0 auto;
  }

  .message-list {
    flex: 1 1 auto;
    min-height: 0;
  }
}
</style>
