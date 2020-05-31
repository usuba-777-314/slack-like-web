import api from '@/core/api';

export default {
  async query() {
    const response = await api.get('messages')
    return response.data;
  },

  async send({ text }) {
    const message = { text };
    const data = { message };
    const response = await api.post('messages', data);
    return response.data.message;
  },

  async delete(id) {
    await api.delete(`messages/${id}`);
  }
}
