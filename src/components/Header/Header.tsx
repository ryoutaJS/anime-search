import { Heading } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'

const headerStyle = {
  border: '1px',
  borderColor: 'gray.300',
  p: 4,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export function Header() {
  return (
    <>
      <Box sx={headerStyle}>
        <Heading>Anime Search</Heading>
      </Box>
    </>
  )
}
