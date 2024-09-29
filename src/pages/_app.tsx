import Head from 'next/head'
import { DefaultSeo } from '@/components/seo/DefaultSeo'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { apolloClient } from '@/graphqlClient/apollo'
import { customTheme } from '@/styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={customTheme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/images/anime-search.png" />
        </Head>

        <DefaultSeo />

        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}
