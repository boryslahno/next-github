import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
   uri: 'https://api.github.com/graphql',
   cache: new InMemoryCache(),
   headers: {
      authorization: 'Bearer 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'
   }
})

export default client;