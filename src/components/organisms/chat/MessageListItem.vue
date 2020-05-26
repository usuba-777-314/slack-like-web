<template>
  <li class="message-list-item">
    <div class="timestamp">{{timestamp}}</div>
    <div class="text">{{message.text}}</div>
  </li>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  },

  computed: {
    timestamp() {
      return moment(this.message.timestamp).format('HH:mm');
    }
  }
};
</script>

<style lang="scss" scoped>
.message-list-item {
  display: flex;
  flex-flow: column;

  padding: 8px 20px;

  &:hover {
    background-color: rgba(238, 238, 238, 0.5);
  }
}

.timestamp {
  font-size: 12px;
  color: rgb(97, 96, 97);
}

.text {
  line-height: 1.56668;
  font-size: 14px;
  white-space: pre-wrap;
}
</style>
