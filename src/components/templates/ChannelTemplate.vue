<template>
  <div class="channel-template">
    <MessageList :messages="messages" />

    <MessageForm
      :form="form"
      placeholder="メッセージ"
      @updateText="updateMessageFormText"
      @send="sendMessage"
    />
  </div>
</template>

<script>
import MessageList from '@/components/organisms/chat/MessageList';
import MessageForm from '@/components/organisms/chat/MessageForm';

export default {
  components: {
    MessageList,
    MessageForm
  },

  props: {
    messages: {
      type: Array,
      required: true
    },

    form: {
      type: Object,
      required: true
    }
  },

  methods: {
    updateMessageFormText(formMessage) {
      this.$emit('updateMessageFormText', formMessage);
    },

    sendMessage() {
      this.$emit('sendMessage');
    }
  }
};
</script>

<style lang="scss" scoped>
.channel-template {
  height: 100%;

  display: flex;
  flex-flow: column;

  .message-list {
    flex: 1 1 0;
  }

  .message-form {
    flex: 0 0 auto;
  }
}
</style>
