import { ApolloProvider } from "@apollo/client";

import { client } from "./lib/apollo";

import Home from "./Home";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
