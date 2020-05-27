import api from '@/core/api';

export default {
  async query() {
    const response = await api.get('messages')
    return response.data;
  }
}
