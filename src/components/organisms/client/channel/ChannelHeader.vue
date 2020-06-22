<template>
  <div class="channel-header">
    <div class="info">
      <div class="title">
        <span class="name">{{ channel.name }}</span>
      </div>

      <div class="metadata">
        <span class="users-count">
          <i class="material-icons">person</i>{{ channel.usersCount }}
        </span>

        <span class="separator">|</span>

        <span class="topic">{{ channel.topic }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    channel: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.channel-header {
  height: 64px;
  padding: 0 16px 0 20px;
  border-bottom: 1px solid rgba(29, 28, 29, 0.13);

  display: flex;
  align-items: center;
}

.title {
  font-size: 15px;

  .name {
    font-weight: 900;

    &::before {
      content: "#";
      margin-left: 4px;
      margin-right: 2px;
    }
  }
}

.metadata {
  display: flex;
  align-items: center;

  font-size: 13px;
  color: rgba(29, 28, 29, 0.7);

  .users-count {
    display: inline-flex;
    align-items: center;

    .material-icons {
      font-size: 16px;
    }
  }

  .separator {
    color: rgba(29, 28, 29, 0.5);
    margin: 0 6px;
  }
}
</style>
