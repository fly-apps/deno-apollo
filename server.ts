import { ApolloClient, HttpLink, InMemoryCache, gql } from './web_modules/@apollo/client.js';

const env = Deno.env;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api.fly.io/api/v2/graphql',
    headers:{
        Authorization: `Bearer ${env.get('FLY_AUTH_TOKEN')}`
    }
  })
});


const result = await client
  .query({
    query: gql`
    query {
        herokuIntegration {
          viewerAuthenticated
          herokuApps {
            name,
            teamName,
            stack,
            region
          }
        }
      }
    `
  });

console.log("result:", result)