export default {
  async fetch(id) {
    const channel = {
      id,
      name: "general",
      topic: "全社的なアナウンスと業務関連の事項",
      usersCount: 8
    };

    return { channel };
  }
};
