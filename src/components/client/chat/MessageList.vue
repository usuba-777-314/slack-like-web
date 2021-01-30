<template>
  <ol class="message-list">
    <MessageListItem
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
  </ol>
</template>

<script>
import MessageListItem from "./MessageListItem";

export default {
  components: {
    MessageListItem
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
.message-list {
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  .message-list-item {
    flex: 0 0 auto;

    &:last-child {
      margin-bottom: 16px;
    }
  }
}
</style>
