import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
   uri: 'https://api.github.com/graphql',
   cache: new InMemoryCache(),
   headers: {
      authorization: `Bearer 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`
   }
})


export default client;
