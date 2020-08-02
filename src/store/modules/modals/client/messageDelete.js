const state = {
  isOpen: false,
  message: null,
  resolve: null,
  reject: null
};

const getters = {
  isOpen({ isOpen }) {
    return isOpen;
  },

  message({ message }) {
    return message;
  }
};

const mutations = {
  open(state, { message, resolve, reject }) {
    state.isOpen = true;
    state.message = message;
    state.resolve = resolve;
    state.reject = reject;
  },

  close(state) {
    state.isOpen = false;
    state.message = null;
    state.resolve = null;
    state.reject = null;
  }
};

const actions = {
  async open({ commit }, { message }) {
    return new Promise((resolve, reject) => {
      commit("open", { message, resolve, reject });
    });
  },

  done({ state, commit }) {
    const { message, resolve } = state;
    resolve(message);
    commit("close");
  },

  cancel({ state, commit }) {
    const { message, reject } = state;
    reject(message);
    commit("close");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
