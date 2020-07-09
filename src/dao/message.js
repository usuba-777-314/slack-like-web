import api from "@/core/api";

export default {
  async queryToChannel(channelId) {
    const params = { channelId };
    const response = await api.get("messages", { params });
    return response.data;
  },

  async sendToChannel({ channelId, text }) {
    const data = { channelId, text };
    const response = await api.post("messages", data);
    return response.data;
  },

  // eslint-disable-next-line no-unused-vars
  async delete(id) {
    // 何もしない
  }
};
