<template>
  <div class="channel-template">
    <MessageList :messages="messages" />
  </div>
</template>

<script>
import MessageList from '@/components/organisms/chat/MessageList';

export default {
  components: {
    MessageList
  },

  props: {
    messages: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.channel-template {
  height: 100%;
}

.message-list {
  height: 100%;
}
</style>
