import http from "@/http";

export default {
  async fetch(id) {
    const response = await http.get(`channels/${id}`);
    return response.data;
  }
};
