<template>
  <li class="message-list-item">
    <div class="timestamp">{{timestamp}}</div>
    <div class="text">{{message.text}}</div>
    <div class="action-menu">
      <UiButton @click="deleteMessage">
        <i class="material-icons">delete</i>
      </UiButton>
    </div>
  </li>
</template>

<script>
import UiButton from '@/components/atoms/UiButton';

import moment from 'moment';

export default {
  components: {
    UiButton
  },

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
  },

  methods: {
    deleteMessage() {
      console.log('deleteMessage');
      this.$emit('deleteMessage', this.message);
    }
  }
};
</script>

<style lang="scss" scoped>
.message-list-item {
  display: flex;
  flex-flow: column;
  position: relative;

  padding: 8px 20px;

  .action-menu {
    position: absolute;
    top: -16px;
    right: 17px;
    display: none;
    z-index: 1;
  }

  &:hover {
    background-color: rgba(238, 238, 238, 0.5);

    .action-menu {
      display: flex;
    }
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

.action-menu {
  border-radius: 6px;
  padding: 2px;
  background: white;
  box-shadow: 0 0 0 1px, 0 1px 3px 0 rgba(0, 0, 0, 0.08);
}
</style>
