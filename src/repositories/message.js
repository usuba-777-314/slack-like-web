import http from "@/http";

export default {
  async queryByChannel(channelId) {
    const params = { channelId };
    const response = await http.get("messages", { params });
    return response.data;
  }
};
