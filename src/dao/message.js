export default {
  // eslint-disable-next-line no-unused-vars
  async query_to_channel(channelId) {
    const messages = [
      {
        id: 5,
        text:
          "Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world. Hello world.",
        timestamp: Date.parse("2020-06-22T21:00:00+0900"),

        user: {
          id: 1,
          name: "Igawa Hironobu"
        }
      },

      {
        id: 4,
        text: `Hello world.
Hello world.
Hello world.
Hello world.
Hello world.
Hello world.
Hello world.
Hello world.`,
        timestamp: Date.parse("2020-06-22T20:00:00+0900"),

        user: {
          id: 1,
          name: "Igawa Hironobu"
        }
      },

      {
        id: 3,
        text: "Hello world.",
        timestamp: Date.parse("2020-06-22T19:00:00+0900"),

        user: {
          id: 1,
          name: "Igawa Hironobu"
        }
      },

      {
        id: 2,
        text: "Hello world.",
        timestamp: Date.parse("2020-06-22T18:00:00+0900"),

        user: {
          id: 1,
          name: "Igawa Hironobu"
        }
      },

      {
        id: 1,
        text: "Hello world.",
        timestamp: Date.parse("2020-06-22T17:00:00+0900"),

        user: {
          id: 1,
          name: "Igawa Hironobu"
        }
      }
    ];

    return {
      messages
    };
  }
};
