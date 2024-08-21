import { extendTheme, Textarea, withDefaultSize } from '@chakra-ui/react'

export const customTheme = extendTheme(
  withDefaultSize({
    size: 'lg',
    components: ['Input'],
  }),
  {
    styles: {
      global: {
        body: {
          bg: '#fdfdfd',
        },
        form: {
          maxWidth: '400px',
          width: '100%',
        },
      },
    },
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
