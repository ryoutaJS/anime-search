import { extendTheme } from '@chakra-ui/react'

export const shadowValue = '0px 0px 6px 3px #e8e8e8'

export const customTheme = extendTheme({
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
    Text: {
      baseStyle: {
        fontSize: 'xl',
      },
    },
  },
})
