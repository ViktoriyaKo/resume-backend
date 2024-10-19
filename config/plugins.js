module.exports = ({ env }) => ({
  "strapi-google-auth": {
    enabled: true,
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      introspection: true,
    },
  },
  io: {
    enabled: true,
    config: {
      socket: {
        serverOptions: {
          cors: {
            origin: "https://create-resume.online",
            methods: ["GET", "POST", "PUT"],
          },
        },
      },
      contentTypes: ["api::message.message"],
      events: [
        {
          name: "connection",
          handler: ({ strapi }, socket) => {
            strapi.log.info(
              `[io] a new client with id ${socket.id} has connected`
            );

            socket.on("send-message", async (messageData) => {
              strapi.$io.raw({
                event: "receive-message",
                data: messageData,
              });
            });
          },
        },
      ],
    },
  },
});
