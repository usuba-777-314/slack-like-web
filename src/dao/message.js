import api from "@/core/api";

export default {
  async queryToChannel(channelId) {
    const params = { channelId };
    const response = await api.get("messages", { params });
    return response.data;
  }
};
