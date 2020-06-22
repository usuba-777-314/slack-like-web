<template>
  <li class="message-list-item">
    <div class="icon-gutter">
      <i class="icon material-icons">person</i>
    </div>

    <div class="content">
      <span class="sender">{{ message.user.name }}</span>
      &nbsp;&nbsp;
      <span class="timestamp">{{ timestamp }}</span>

      <br />

      <div class="text">{{ message.text }}</div>
    </div>
  </li>
</template>

<script>
import moment from "moment";

export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  },

  computed: {
    timestamp() {
      return moment(this.message.timestamp).format("YYYY/MM/DD HH:mm");
    }
  }
};
</script>

<style lang="scss" scoped>
.message-list-item {
  display: flex;

  padding: 8px 20px;

  &:hover {
    background-color: rgba(238, 238, 238, 0.5);
  }
}

.icon-gutter {
  margin-right: 8px;
  display: inline-flex;
}

.icon {
  width: 36px;
  height: 36px;

  border-radius: 3px;
  font-size: 36px;
  background-color: #3f0e40;
  color: #cfc3cf;
}

.content {
  padding: 8px;
  padding-left: 16px;
  margin: -12px -8px -16px -16px;
}

.sender {
  font-size: 14px;
  font-weight: 900;
}

.timestamp {
  margin-left: 4px;
  font-size: 12px;
  color: rgb(97, 96, 97);
}

.text {
  line-height: 1.56668;
  font-size: 14px;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: break-word;
}
</style>
