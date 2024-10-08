import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_ANNICT_API_URL,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_ANNICT_ACCESS_TOKEN}`,
  },
})
