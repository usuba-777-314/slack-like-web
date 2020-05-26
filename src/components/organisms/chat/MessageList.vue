<template>
  <ol class="message-list">
    <MessageListItem v-for="message in messages" :key="message.id" :message="message" />
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
  }
};
</script>

<style scoped>
.message-list {
  list-style: none;
  margin: 0;
  padding: 0;

  overflow: scroll;
}
</style>
