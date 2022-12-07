import { GraphQLError } from "graphql";

module.exports = {
  isAuth: (next) => (root, args, context, info) => {
    // Check if Authorization header is present
    if (!context.headers.authorization) {
      throw new GraphQLError("unauthenticated", {
        extensions: {
          code: "UNAUTHENTICATED",
          http: {
            status: 401,
          },
        },
      });
    }
    return next(root, args, context, info);
  },
};
