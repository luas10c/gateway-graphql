import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((request, previous) => {
  return {
    ...previous,
    headers: {
      authorization: "Bearer token",
    },
  };
});

const appLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

export const client = new ApolloClient({
  link: from([authLink, appLink]),
  cache: new InMemoryCache(),
});
