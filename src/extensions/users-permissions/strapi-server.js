module.exports = (plugin) => {
  plugin.controllers.user.updateMe = async (ctx) => {
    await strapi.entityService
      .update("plugin::users-permissions.user", ctx.state.user.id, {
        data: JSON.parse(ctx.request.body),
      })
      .then((res) => {
        ctx.response.status = 200;
        ctx.response.body = res;
      });
  };

  plugin.routes["content-api"].routes.push({
    method: "PUT",
    path: "/user/me",
    handler: "user.updateMe",
    config: {
      prefix: "",
      policies: [],
    },
  });

  return plugin;
};
