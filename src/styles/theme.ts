import { extendTheme, withDefaultSize } from '@chakra-ui/react'

export const customTheme = extendTheme(
  withDefaultSize({
    size: 'lg',
    components: ['Input'],
  }),
  {
    components: {
      Heading: {
        baseStyle: {
          fontFamily: 'sans-serif',
        },
      },
      Input: {
        baseStyle: {
          field: {
            boxShadow: 'sm',
          },
        },
      },
    },
  }
)
