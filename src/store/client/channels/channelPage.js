import repositories from "@/repositories";

const state = {
  channel: {},
  messages: []
};

const getters = {
  channel({ channel }) {
    return channel;
  },

  messages({ messages }) {
    return messages;
  }
};

const mutations = {
  channel(state, { channel }) {
    state.channel = channel;
  },

  messages(state, { messages }) {
    state.messages = messages;
  }
};

const actions = {
  async fetchChannel({ commit }, { channelId }) {
    const { channel } = await repositories.channel.fetch(channelId);
    commit("channel", { channel });
  },

  async queryMessages({ commit }, { channelId }) {
    const { messages } = await repositories.message.queryByChannel(channelId);
    commit("messages", { messages });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
