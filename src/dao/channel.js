import api from "@/core/api";

export default {
  async fetch(id) {
    const response = await api.get(`channels/${id}`);
    return response.data;
  }
};
