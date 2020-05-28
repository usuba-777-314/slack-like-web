import dao from '@/dao';

const state = {
  messages: [],

  messageForm: {
    text: ''
  }
};

const mutations = {
  messages(state, { messages }) {
    state.messages = messages;
  },

  messageFormText({ messageForm }, { text }) {
    messageForm.text = text;
  }
};

const actions = {
  async queryMessages({ commit }) {
    const messages = await dao.message.query();
    commit('messages', { messages })
  },

  async sendMessage({ state, commit }) {
    const { messages, messageForm } = state;
    const { text } = messageForm;
    const timestamp = Date.now()

    commit('messages', { messages: messages.concat({ text, timestamp }) });
    commit('messageFormText', { text: '' });
  },

  async setMessageFormText({ commit }, { text }) {
    commit('messageFormText', { text });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
