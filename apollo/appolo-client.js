import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
   uri: 'https://api.github.com/graphql',
   cache: new InMemoryCache(),
   headers: {
      authorization: `Bearer ${'ghp_xo/IiA/ER3b/Mq8Ao/GdZ0eS/GVLT2e/l7RP0/oN7gf'.replace(/\//g, '')}`
   }
})

export default client;
