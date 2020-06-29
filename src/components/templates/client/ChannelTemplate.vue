<template>
  <div class="channel-template">
    <ChannelHeader :channel="channel" />
    <MessageList :messages="messages" />
    <MessageForm
      :form="form"
      :placeholder="messageFormPlaceholder"
      @updateText="updateMessageFormText"
      @send="sendMessage"
    />
  </div>
</template>

<script>
import ChannelHeader from "@/components/organisms/client/channel/ChannelHeader";
import MessageList from "@/components/organisms/client/chat/MessageList";
import MessageForm from "@/components/organisms/client/chat/MessageForm";

export default {
  components: {
    ChannelHeader,
    MessageList,
    MessageForm
  },

  props: {
    channel: {
      type: Object,
      required: true
    },
    messages: {
      type: Array,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },

  computed: {
    messageFormPlaceholder() {
      return `#${this.channel.name} へのメッセージ`;
    }
  },

  methods: {
    updateMessageFormText(formMessage) {
      this.$emit("updateMessageFormText", formMessage);
    },

    sendMessage() {
      this.$emit("sendMessage");
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

  .message-form {
    flex: 0 0 auto;
  }
}
</style>
