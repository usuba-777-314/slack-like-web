<template>
  <ChannelTemplate
    :messages="messages"
    :form="messageForm"
    @sendMessage="sendMessage"
    @updateMessageFormText="setMessageFormText({ text: $event })"
  />
</template>

<script>
import ChannelTemplate from '@/components/templates/ChannelTemplate';

import { mapActions, mapState } from 'vuex';

export default {
  components: {
    ChannelTemplate
  },

  created() {
    this.queryMessages();
  },

  methods: {
    ...mapActions('pages/channel', [
      'queryMessages',
      'sendMessage',
      'setMessageFormText'
    ])
  },

  computed: {
    ...mapState('pages/channel', ['messages', 'messageForm'])
  }
};
</script>
