import { Button } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import { shadowValue } from '@/styles/theme'

const buttonStyle = {
  position: 'fixed',
  bottom: 5,
  right: 5,
  background: 'white',
  shadow: shadowValue,
  boxSize: 16,
  borderRadius: 'full',
}

ArrowUpIcon.defaultProps = {
  boxSize: 30,
}

function scrollToTop() {
  window.scrollTo(0, 0)
}

export function ScrollToTop() {
  return (
    <Button sx={buttonStyle} onClick={scrollToTop}>
      <ArrowUpIcon />
    </Button>
  )
}
