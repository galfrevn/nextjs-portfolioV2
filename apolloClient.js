import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl1jojs1k6ucj01z694yw63gn/master",
  cache: new InMemoryCache(),
  ssr: true
});

export default client;