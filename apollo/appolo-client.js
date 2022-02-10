import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
   uri: 'https://api.github.com/graphql',
   cache: new InMemoryCache(),
   headers: {
      authorization: `Bearer ${'ghp/_pRA5DK9O/cSUbtoTZpzqD3b26/eXQidl1lS/Zb0'.replace(/\//g,'')}`
   }
})

export default client;
