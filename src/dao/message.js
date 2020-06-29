import api from "@/core/api";

export default {
  async queryToChannel(channelId) {
    const params = { channelId };
    const response = await api.get("messages", { params });
    return response.data;
  },

  // eslint-disable-next-line no-unused-vars
  async sendToChannel({ channelId, text }) {
    const message = { text };
    message.id = Date.now();
    message.timestamp = Date.now();
    message.user = { name: "Test" };
    return { message };
  }
};
