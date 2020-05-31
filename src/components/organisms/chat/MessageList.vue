<template>
  <ol class="message-list">
    <MessageListItem
      v-for="message in messages"
      :key="message.id"
      :message="message"
      @deleteMessage="deleteMessage"
    />
  </ol>
</template>

<script>
import MessageListItem from './MessageListItem';

export default {
  components: {
    MessageListItem
  },

  props: {
    messages: {
      type: Array,
      required: true
    }
  },

  methods: {
    deleteMessage(message) {
      this.$emit('deleteMessage', message);
    }
  }
};
</script>

<style scoped>
.message-list {
  list-style: none;
  margin: 0;
  padding: 24px 0 0;

  overflow: scroll;
}
</style>
