import { extendTheme } from '@chakra-ui/react'

export const customTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'sans-serif',
      },
    },
  },
})
