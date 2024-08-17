import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { apolloClient } from '@/graphqlClient/apollo'
import { customTheme } from '@/styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}
