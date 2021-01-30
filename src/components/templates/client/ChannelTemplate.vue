<template>
  <div class="channel-template">
    <ChannelHeader :channel="channel" />
    <MessageList :messages="messages" @deleteMessage="deleteMessage" />
    <MessageForm
      :form="form"
      :placeholder="messageFormPlaceholder"
      @updateText="updateMessageFormText"
      @send="sendMessage"
    />

    <MessageDeleteModal />
  </div>
</template>

<script>
import ChannelHeader from "@/components/organisms/client/channel/ChannelHeader";
import MessageList from "@/components/organisms/client/chat/MessageList";
import MessageForm from "@/components/organisms/client/chat/MessageForm";
import MessageDeleteModal from "@/components/organisms/client/modals/messageDelete/MessageDeleteModal";

export default {
  components: {
    ChannelHeader,
    MessageList,
    MessageForm,
    MessageDeleteModal
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
    },

    deleteMessage(message) {
      this.$emit("deleteMessage", message);
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
