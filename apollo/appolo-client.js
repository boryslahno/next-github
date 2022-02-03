import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
   uri: 'https://api.github.com/graphql',
   cache: new InMemoryCache(),
   headers: {
      authorization: "Bearer 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"
   }
})

export default client;