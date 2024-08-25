import { ThreeDots } from 'react-loader-spinner'
import { Center } from '@chakra-ui/react'

ThreeDots.defaultProps = {
  color: '#1DA1F2',
  width: 80,
  height: 80,
  wrapperStyle: { marginTop: '1.5rem' },
}

export function LoadingIndicator() {
  return (
    <Center>
      <ThreeDots />
    </Center>
  )
}
