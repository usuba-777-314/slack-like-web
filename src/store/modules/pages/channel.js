import dao from '@/dao';

const state = {
  messages: []
};

const mutations = {
  messages(state, { messages }) {
    state.messages = messages;
  }
};

const actions = {
  async queryMessages({ commit }) {
    const messages = await dao.message.query();
    commit('messages', { messages })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
