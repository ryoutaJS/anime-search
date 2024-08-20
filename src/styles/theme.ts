import { extendTheme, Textarea, withDefaultSize } from '@chakra-ui/react'

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
      Select: {
        baseStyle: {
          field: {
            boxShadow: 'sm',
          },
        },
      },
      Text: {
        baseStyle: {
          fontSize: 'xl',
        },
      },
    },
  }
)
