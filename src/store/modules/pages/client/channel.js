import dao from "@/dao";

const state = {
  channelId: null,
  channel: {},
  messages: []
};

const getters = {
  channel({ channel }) {
    return channel;
  },

  messages({ messages }) {
    const copy = Object.assign([], messages);
    return copy.reverse();
  }
};

const mutations = {
  channelId(state, { channelId }) {
    state.channelId = channelId;
  },

  channel(state, { channel }) {
    state.channel = channel;
  },

  messages(state, { messages }) {
    state.messages = messages;
  }
};

const actions = {
  setChannelId({ commit }, { channelId }) {
    commit("channelId", { channelId });
  },

  async fetchChannel({ state, commit }) {
    const { channelId } = state;
    const { channel } = await dao.channel.fetch(channelId);
    commit("channel", { channel });
  },

  async queryMessages({ state, commit }) {
    const { channelId } = state;
    const { messages } = await dao.message.queryToChannel(channelId);
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
