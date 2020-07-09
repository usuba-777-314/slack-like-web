import dao from "@/dao";

const state = {
  channelId: null,
  channel: {},
  messages: [],
  messageForm: {
    text: ""
  }
};

const getters = {
  channel({ channel }) {
    return channel;
  },

  messages({ messages }) {
    const copy = Object.assign([], messages);
    return copy.reverse();
  },

  messageForm({ messageForm }) {
    return messageForm;
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
  },

  messageFormText({ messageForm }, { text }) {
    messageForm.text = text;
  },

  addMessage(state, { message }) {
    state.messages = [message].concat(state.messages);
  },

  deleteMessage(state, { message }) {
    state.messages = state.messages.filter(m => m.id !== message.id);
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
  },

  async setMessageFormText({ commit }, { text }) {
    commit("messageFormText", { text });
  },

  async sendMessage({ state, commit }) {
    const { channelId, messageForm } = state;
    const { text } = messageForm;

    commit("messageFormText", { text: "" });

    const data = { channelId, text };
    const { message } = await dao.message.sendToChannel(data);

    commit("addMessage", { message });
  },

  async deleteMessage({ commit }, { message }) {
    await dao.message.delete(message.id);
    commit("deleteMessage", { message });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
