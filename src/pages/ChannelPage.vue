<template>
  <ChannelTemplate :messages="messages" />
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
    ...mapActions('pages/channel', ['queryMessages'])
  },

  computed: {
    ...mapState('pages/channel', ['messages'])
  }
};
</script>
