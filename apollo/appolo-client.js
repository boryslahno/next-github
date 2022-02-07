import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
   uri: 'https://api.github.com/graphql',
   cache: new InMemoryCache(),
   headers: {
      authorization: 'Bearer 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'
   }
})

export default client;
