import Vue from "vue";
import Vuex from "vuex";

import channelPage from "@/store/client/channels/channelPage";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    client: {
      namespaced: true,
      modules: {
        channels: {
          namespaced: true,
          modules: {
            channelPage
          }
        }
      }
    }
  }
});
